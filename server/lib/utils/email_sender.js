/**
 * @author: Alfredo Quintero Tlacuilo
 * @description: A bunch of helpers to send an email
 */

// Dependencies
const mailgun = require('mailgun-js')(
  {
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
  },
);
const ejs = require('ejs');

class EmailSender {
  static sendHTML(to, subject, html, attachment, inline) {
      return new Promise((resolve, reject) => {
          mailgun.messages().send({
              from: 'Vaquejada Live <contato@vaquejadalive.com>',
              to,
              subject,
              html,
              attachment,
              inline,
          }, (err, info) => {
              if (err) {
                  reject(err);
              } else {
                  resolve(info);
              }
          });
      });
  }

  static renderEJS(path, options) {
      return new Promise((resolve, reject) => {
          ejs.renderFile(path, options, (err, data) => {
              if (err) {
                  reject(err);
              } else {
                  resolve(data);
              }
          });
      });
  }
}

module.exports = EmailSender;
