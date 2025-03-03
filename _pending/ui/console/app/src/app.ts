import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

// Tipos
type Validator<T> = (input: string) => Promise<T>;
type ValidationError = Error;

// Interfaz para los datos del usuario
interface UserData {
    nombre: string;
    edad: number;
}

// Crear la interfaz de readline
const rl = readline.createInterface({ input, output });

// Validadores
const validarNumero: Validator<number> = async (numero: string): Promise<number> => {
    const num = Number(numero);
    if (isNaN(num) || numero.trim() === '') {
        throw new Error('Debes ingresar un número válido');
    }
    if (num < 0 || num > 120) {
        throw new Error('La edad debe estar entre 0 y 120 años');
    }
    return num;
};

const validarTexto: Validator<string> = async (texto: string): Promise<string> => {
    const textoLimpio = texto.trim();
    if (textoLimpio.length === 0) {
        throw new Error('El texto no puede estar vacío');
    }
    return textoLimpio;
};

// Función genérica para obtener entrada válida
const obtenerEntradaValida = async <T>(
    mensaje: string,
    validador: Validator<T>
): Promise<T> => {
    while (true) {
        try {
            const entrada = await rl.question(mensaje);
            return await validador(entrada);
        } catch (error) {
            if (error instanceof Error) {
                console.log(`Error: ${error.message}`);
            } else {
                console.log('Error desconocido durante la validación');
            }
        }
    }
};

// Función principal
const main = async (): Promise<void> => {
    try {
        const userData: UserData = {
            nombre: await obtenerEntradaValida('Por favor, ingresa tu nombre: ', validarTexto),
            edad: await obtenerEntradaValida('Por favor, ingresa tu edad: ', validarNumero)
        };

        console.log('\nDatos ingresados:');
        console.log(`Nombre: ${userData.nombre}`);
        console.log(`Edad: ${userData.edad} años`);

    } catch (error) {
        if (error instanceof Error) {
            console.error('Error inesperado:', error.message);
        } else {
            console.error('Error desconocido');
        }
    } finally {
        rl.close();
    }
};

// Ejecutar el programa
main().catch((error: unknown) => {
    if (error instanceof Error) {
        console.error('Error en la ejecución:', error.message);
    } else {
        console.error('Error desconocido en la ejecución');
    }
});