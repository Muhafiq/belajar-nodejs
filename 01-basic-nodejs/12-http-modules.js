const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our homepage');
    } else if (req.url === '/about') {
        res.end('our short story');
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>we can't find the page</p>
        <a href="/">back to homepage</a>
        `);
    }
});

server.listen(5000, () => {
    console.log('server runing in port 5000');
});