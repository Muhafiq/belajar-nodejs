const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('welcome');
});

server.listen(5000, () => {
    console.log('server running in port 5000');
});