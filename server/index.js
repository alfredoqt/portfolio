const express = require('express');
const bodyParser = require('body-parser');
const setup = require('./rest_api_routes/setup');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

setup(app);

app.listen(4001, () => console.log(`Listening on port ${4001}`));
