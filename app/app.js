const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use('/api/v1', router);
require('./routes/index')(router);

app.listen(port, () => console.log('Express server running in port 3000'));

module.exports = app;
