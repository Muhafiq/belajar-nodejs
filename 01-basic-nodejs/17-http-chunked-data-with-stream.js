const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream('./content/big.txt', {encoding: 'utf-8'});
    stream.on('open',() => {
        stream.pipe(res);
    });
    stream.on('error',(err) => res.end(err));
});

server.listen(3000, () => console.log('server listen in port 3000'));