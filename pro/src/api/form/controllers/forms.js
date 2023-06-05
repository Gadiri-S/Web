const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async test(ctx) {
    try {
      const po = { firstname, lastname, email, business, message, phone, subject, text  } = ctx.request.body;
    
      await strapi.plugins['email'].services.email.send({
        to: 'hello@businessprowebsolutions.com',
        from: 'hello@businessprowebsolutions.com', //e.g. single sender verification in SendGrid
        subject:subject,
        text:text
      })    
 
    
    
    
      const entity = await strapi.entityService.create("api::form.form", {
        data: {
            firstname : po.data.firstname,
            lastname : po.data.lastname,       
            email : po.data.email ,      
            message : po.data.message      ,
            phone : po.data.phone      ,
            business : po.data.business ,
//publishedAt: new Date().getTime(),

},


    });
      
      ctx.body = entity;

       return entity


    } catch (err) {
    }  

 
  },
};