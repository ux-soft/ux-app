// Función para cargar otros recursos como CSS, imágenes, etc.
function cargarRecursos() {

    debugger;

    // Ejemplo de cargar recursos dinámicamente
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'assets/styles.css';
    document.head.appendChild(link);

    // const script = document.createElement('script');
    // script.src = 'otherScript.js';
    // document.body.appendChild(script);

    // También puedes cargar imágenes u otros recursos aquí
}

// Escuchar mensajes del Web Worker
navigator.serviceWorker.addEventListener('message', event => {
    debugger;
    if (event.data === 'workerReady') {
        // El Web Worker está listo, ahora puedes cargar otros recursos
        cargarRecursos();
    }
});

// Registrarse con el Web Worker
if ('serviceWorker' in navigator) {
    debugger;
    navigator.serviceWorker.register('worker.js').then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
        // Enviar mensaje para comprobar si el Worker está listo
        navigator.serviceWorker.controller.postMessage('areYouReady');
    }).catch(error => {
        console.error('Registro del Service Worker falló:', error);
    });
}