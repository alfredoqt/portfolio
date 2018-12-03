const express = require('express');

const Github = require('../../lib/request_handlers/github');

const router = express.Router();

router.post('/push', Github.push);

module.exports = router;
