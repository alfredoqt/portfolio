// Dependencies
const EmailSender = require('../../utils/email_sender');

exports.post = async (req, res, next) => {
    try {
      const { name, email, message } = req.body;

      const render = await EmailSender.renderEJS('lib/templates/contact.ejs', {
        name,
        email,
        message,
      });

      await EmailSender.sendHTML('alfredoq98@hotmail.com', 'Portfolio Contact', render);
      res.send({
        statusCode: 200,
        message: 'Email Sent',
      });
    } catch (e) {
      next(e);
    }
};
