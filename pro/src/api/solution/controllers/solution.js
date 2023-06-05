'use strict';

/**
 * employee controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::solution.solution',
({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
  
      const entity = await strapi.db.query("api::solution.solution").findOne({
        populate:true,
        where: {slug},
      
      });
      const sanitizedEntity = await this.sanitizeOutput(entity);

      return this.transformResponse(sanitizedEntity);
    }}))
;


  