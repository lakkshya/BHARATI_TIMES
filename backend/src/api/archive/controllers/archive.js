"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::archive.archive", ({ strapi }) => ({
  async filterByLanguage(ctx) {
    const { language } = ctx.params;

    const entities = await strapi.entityService.findMany("api::archive.archive", {
      filters: {
        language: language, 
      },
      populate: "*",
    });

    ctx.body = { data: entities }; 
  },
}));
