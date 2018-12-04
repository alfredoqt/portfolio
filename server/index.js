const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const setup = require('./rest_api_routes/setup');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

setup(app);

app.use((err, req, res, next) => {
  if (err instanceof Error) {
      return res.status(err.status || 500).send({ message: err.message });
  }
  next(err);
});

app.listen(4001, () => console.log(`Listening on port ${4001}`));
