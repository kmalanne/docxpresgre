const express = require('express');

const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;

router.get('/', (req, res) => res.send('App running...'));
app.use('/', router);

app.listen(port, () => console.log('Express server running in port 3000'));

module.exports = app;
