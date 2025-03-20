module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/send-email',
        handler: 'email.send',
        config: {
          auth: false, // Change this if authentication is needed
        },
      },
    ],
  };
  