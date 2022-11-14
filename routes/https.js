const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');

const host = '127.0.0.1';
const port = 7000;

https
    .createServer(
        {
            key: fs.readFileSync('/cert/key.pem'),
            cert: fs.readFileSync('/cert/cert.pem'),
        },
        app
    )
    .listen(port, host, function () {
        console.log(`Server listens https://${host}:${port}`);
    });
