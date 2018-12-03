const Github = require('../rest_api_routes/github');

function setup(app) {
  app.use('/github', Github);
}

module.exports = setup;
