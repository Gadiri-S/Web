'use strict';

/**
 * confidentiality service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::confidentiality.confidentiality');
