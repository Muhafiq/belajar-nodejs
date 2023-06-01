const fs = require('fs');
// const { createReadStream } = require('fs');

const stream = fs.createReadStream('./content/big.txt',{highWaterMark:1000000, encoding: 'utf-8'});

stream.on('data', (result) => console.log(result));
stream.on('error',(err) => console.log(err));