const express = require('express');
const path = require('path');

const webServer = express();
const port = 3000;

webServer.use((req, res, next) => {

    const allowedHeaderItems = [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization',
        'token',
        'tokenCsrf',
        'Method',
        'socketMessageId',
        'socketMessageType',
        'Accept-Ranges'
    ];

    const allowedHeaders = allowedHeaderItems.join(', ');

    const sets = [
        { key: 'Access-Control-Allow-Origin', value: '*' },
        { key: 'Access-Control-Allow-Headers', value: allowedHeaders },
        { key: 'Access-Control-Expose-Headers', value: 'Accept-Ranges' },
        { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, PATCH' },
        { key: 'Cache-Control', value: 'no-cache' },
        { key: 'Pragma', value: 'no-cache' },
    ];

    for (const set of sets) {
        res.header(set.key, set.value);
    }

    next();
});
webServer.use(express.static(path.join(__dirname, 'public')));
webServer.get('/', (req, res) => {
    // console.log(`${ }`);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

webServer.listen(port, () => {
    console.log(`Listening http://localhost:${ port }`);
});
