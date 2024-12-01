
const version = 7;
let serviceWorker;

document.addEventListener('DOMContentLoaded', async () => {

    console.log(`Web ${ version }: DOMContentLoaded`);

    // debugger;

    // const serviceWorker = new Worker('service-worker.js');
    //
    // serviceWorker.postMessage('service-worker:start');
    //
    // serviceWorker.addEventListener('message', (event) => {
    //     console.log('Message from service worker:', event.data);
    // });

    serviceWorker = await navigator.serviceWorker.register('/service-worker.js');

    // navigator.serviceWorker.register('/service-worker.js')
    //     .then(registration => {
    //         console.log('Service Worker registrado con éxito:', registration);
    //     })
    //     .catch(error => {
    //         console.error('Error al registrar el Service Worker:', error);
    //     });

    // console.log(`Web ${ version }: END - DOMContentLoaded`);
});