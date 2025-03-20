const { sendEmail } = require('../services/email');

module.exports = {
  async send(ctx) {
    const { to, subject, text } = ctx.request.body;

    if (!to || !subject || !text) {
      return ctx.badRequest('Missing required fields');
    }

    const result = await sendEmail(to, subject, text);
    return ctx.send(result);
  },
};
