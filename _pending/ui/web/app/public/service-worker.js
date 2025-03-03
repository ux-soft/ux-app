let version = 3;

self.addEventListener('install', event => {
    debugger;
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
    debugger;
    event.waitUntil(self.clients.claim());
});

// Enviar mensaje cuando el Web Worker esté listo
self.addEventListener('message', event => {
    debugger;
    if (event.data === 'areYouReady') {
        self.clients.matchAll().then(clients => {
            clients.forEach(client => client.postMessage('workerReady'));
        });
    }
});

// Manejar solicitudes fetch
self.addEventListener('fetch', event => {
    debugger;
    // Manejar solicitudes fetch aquí
});