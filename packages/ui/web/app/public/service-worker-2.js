// public/service-worker.js

const version = 5;

self.addEventListener('install', async (event) => {
    console.log(`Worker ${ version }: Install`);
    await self.skipWaiting();
    // console.log(`Worker ${ version }: End - Install`);
});

self.addEventListener('activate', async (event) => {
    console.log(`Worker ${ version }: Activate 2`);
    // console.log(`Worker ${ version }: END - Activate 2`);
});

self.addEventListener('fetch', async (event) => {

    const requestMessage = `${ event.request.method } URL: ${ event.request.url }`;
    const url = event.request.url.toLocaleLowerCase().trim();
    const extensions = ['://extensions', 'chrome-extension://'];
    const contains = extensions.some(o => url.includes(o));

    debugger;

    if (!contains) {
        console.log(`Worker ${ version }: Fetch ${ requestMessage }`);
    }

    event.respondWith(fetch(event.request));

    // if (!contains) {
    //     console.log(`Worker ${ version }: END - Fetch ${ requestMessage }`);
    // }

});

self.addEventListener('message', async (event) => {
    console.log(`Worker ${ version }: Message => `, event.data);
});