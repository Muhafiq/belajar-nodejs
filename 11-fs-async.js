// you can import module with constructor or not
// const fs = require('fs');
const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) throw err;
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) throw err;
        const second = result;
        writeFile('./content/result-async.txt', `Here result : ${first}, ${second}`, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
});