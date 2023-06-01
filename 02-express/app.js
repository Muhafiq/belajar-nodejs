const express = require('express');
const app = express();

const people = require('./routes/people');
const logger = require('./routes/auth');

// static assets
app.use(express.static('./method-public'));
// parse from data
app.use(express.urlencoded({extended: false})); 
// parse json
app.use(express.json());
// using router from ./routes/people.js
app.use('/api/people', people);
// using router from './routes/auth.js
app.use('/login', logger);

app.listen(3000, () => console.log(`Server running in port 3000`));