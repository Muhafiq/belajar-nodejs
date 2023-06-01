const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Home page');
});

app.get('/about', (req, res) => {
    res.status(200).send('About page');
});

app.all('*', (req, res) => {
    res.status(404).send('resource not found');
});

app.listen(3000, () => {
    console.log('server running on port 3000...');
});

/**
 * app.get
 * app.post
 * app.post
 * app.delete
 * app.all
 * app.use
 * app.listen
*/