import Imap from "imap-simple";
import { ImapSimple, ImapSimpleOptions, Message } from "imap-simple";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno desde un .env

const config: ImapSimpleOptions = {
    imap: {
        user: process.env.ICLOUD_EMAIL,
        password: process.env.ICLOUD_PASSWORD,
        host: "imap.mail.me.com",
        port: 993,
        tls: true,
        authTimeout: 10000,
    },
};

const DOMAIN_FILTER = "@ejemplo.com"; // Reemplázalo con el dominio que quieres filtrar

async function fetchEmails() {
    try {
        const connection: ImapSimple = await Imap.connect(config);
        await connection.openBox("INBOX"); // Abrir bandeja de entrada

        // Filtrar solo correos del dominio específico
        const searchCriteria = [["FROM", DOMAIN_FILTER]];
        const fetchOptions = { bodies: ["HEADER.FIELDS (FROM SUBJECT DATE)"], struct: true };

        const messages: Message[] = await connection.search(searchCriteria, fetchOptions);

        console.log(`📩 Se encontraron ${messages.length} correos de ${DOMAIN_FILTER}:`);
        messages.forEach((msg, index) => {
            const header = msg.parts[0].body;
            console.log(`${index + 1}. ${header.subject[0]} - ${header.date[0]} - ${header.from[0]}`);
        });

        connection.end();
    } catch (error) {
        console.error("❌ Error al obtener correos:", error);
    }
}

fetchEmails();