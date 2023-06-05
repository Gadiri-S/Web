'use strict'
  
module.exports = {
    index: async (ctx) => {
    console.log("ctx:", ctx);

    
await strapi.plugins['email'].services.email.send({
    to: 'BusinessProWebSolutions@gmail.com',
    from: 'BusinessProWebSolutions@gmail.com',
    replyTo: 'BusinessProWebSolutions@gmail.com',
    subject: 'My message',
    text: 'Text',
    html: '<h1>Text</h1>'
  }, config);
}}