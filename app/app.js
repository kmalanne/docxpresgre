const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('App running...'));

app.listen(3000, () => console.log('Express server running in port 3000'));

module.exports = app;
