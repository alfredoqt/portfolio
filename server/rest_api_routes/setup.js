const Github = require('../rest_api_routes/github');
const Contact = require('../rest_api_routes/contact');

function setup(app) {
  app.use('/github', Github);
  app.use('/contact-me', Contact);
}

module.exports = setup;
