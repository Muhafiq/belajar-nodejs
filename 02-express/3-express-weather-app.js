const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./weather-app')); // this folder usually use name "public"

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './weather-app/index.html'));
// });

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