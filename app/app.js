const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use(require('./routes'));

app.listen(port, () => console.log('Express server running in port 3000'));

module.exports = app;
