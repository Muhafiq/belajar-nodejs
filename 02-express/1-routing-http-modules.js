const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./weather-app/index.html');
const homeStyle = fs.readFileSync('./weather-app/style.css');
const homeScript = fs.readFileSync('./weather-app/script.js');

const server = http.createServer((req, res) => {
    // console.log(req.method); to know the method of request
    /** take the url of request */ 
    const url = req.url;

    /** root file, html css javascript */

    if(url === '/') {
        console.log(`user hit the server ${url}`);
        res.writeHead(200, { 'Content-Type':'text/html'});
        res.write(homePage);
        res.end();
    
    } else if(url === '/style.css') {
        console.log(`user hit the server in ${url}`);
        res.writeHead(200, { 'Content-Type':'text/css'});
        res.write(homeStyle);
        res.end();
    
    } else if(url === '/script.js') {
        console.log(`user hit the server in ${url}`);
        res.writeHead(200, { 'Content-Type':'text/javascript'});
        res.write(homeScript);
        res.end();


    /** this code above is to routing the image for web apps */
    } else if(url === '/img/cloud.png') {
        res.writeHead(200, { 'Content-Type':'image/x-png'});
        res.write(fs.readFileSync('./weather-app/img/cloud.png'));
        res.end();

    } else if(url === '/img/clear.png') {
        res.writeHead(200, { 'Content-Type':'image/x-png'});
        res.write(fs.readFileSync('./weather-app/img/clear.png'));
        res.end();

    } else if(url === '/img/rain.png') {
        res.writeHead(200, { 'Content-Type':'image/x-png'});
        res.write(fs.readFileSync('./weather-app/img/rain.png'));
        res.end();

    } else if(url === '/img/snow.png') {
        res.writeHead(200, { 'Content-Type':'image/x-png'});
        res.write(fs.readFileSync('./weather-app/img/snow.png'));
        res.end();

    } else if(url === '/img/haze.png') {
        res.writeHead(200, { 'Content-Type':'image/x-png'});
        res.write(fs.readFileSync('./weather-app/img/haze.png'));
        res.end();

    } else if(url === '/img/404.png') {
        res.writeHead(200, { 'Content-Type':'image/x-png'});
        res.write(fs.readFileSync('./weather-app/img/404.png'));
        res.end();


    /** this for else url not found */ 
    } else {
        console.log(`user hit the server in ${url}`);
        res.writeHead(404, { 'Content-Type':'text/html'});
        res.write('<h1>Page not found</h1>');
        res.end();
    }

})
.listen(3000, () => console.log('server running in port 3000'));