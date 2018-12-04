const express = require('express');

const Contact = require('../../lib/request_handlers/contact');

const router = express.Router();

router.post('/', Contact.post);

module.exports = router;
