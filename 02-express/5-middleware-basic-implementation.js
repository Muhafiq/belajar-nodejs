const express = require('express');
const morgan = require('morgan');
const logger = require('./logger');
const authorize = require('./authorize');
const app = express();

// req => middleware => res

/** use middleware for all */ 
// app.use([authorize, logger]);

/**
 * we can use our own middleware
 * from express (built in)
 * and from npm
 * */

// middleware from npm example
app.use(morgan('tiny'));


app.get('/', (req, res) => {
    res.send('Home');
});
app.get('/about', (req, res) => {
    res.send('About');
});
app.get('/api/products', (req, res) => {
    res.send('Products');
});
app.get('/api/items', (req, res) => {
    res.send('Items');
});


app.listen(3000, () => console.log(`Server running in port 3000`));