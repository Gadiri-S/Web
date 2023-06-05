 
 /* module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: "strapi-provider-email-mailjet",
          providerOptions: {
            publicApiKey: env("MAILJET_PUBLIC_KEY"),
            secretApiKey: env("MAILJET_SECRET_KEY"),
          },
          settings: {
            defaultFrom: "businessprowebsolutions@gmail.com",
            defaultFromName: "BPWS",
            defaultTo: "businessprowebsolutions@gmail.com",
            defaultToName: "BPWS",
          },
        },
        // ...
      }
  });*/

 // File: config/plugins.js

 module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('EMAIL_SMTP_HOST'),
        port: env('EMAIL_SMTP_PORT'),
        auth: {
          user: env('EMAIL_SMTP_USER'),
          pass: env('EMAIL_SMTP_PASS'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'hello@businessprowebsolutions.com',
        defaulTo: 'hello@businessprowebsolutions.com',
        defaultReplyTo: 'hello@businessprowebsolutions.com',
      },
    },
  },

  
});

    

module.exports = {
  // ...
  'set-title': {
    enabled: true,
    resolve: './src/plugins/set-title'
  },
  // ...
}