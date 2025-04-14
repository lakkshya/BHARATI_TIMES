"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  // Default `find` method for retrieving all articles
  async find(ctx) {
    const entities = await strapi.entityService.findMany(
      "api::article.article",
      {
        populate: ["coverImage"], // Add any relations you need to populate
      }
    );

    return (ctx.body = entities);
  },

  // Custom method to filter articles by language
  async filterByLanguage(ctx) {
    const { language } = ctx.params; // Get language from the URL parameters

    const entities = await strapi.entityService.findMany(
      "api::article.article",
      {
        filters: { language }, // Filter by the provided language
        populate: ["coverImage"], // Add relations as necessary
      }
    );

    return (ctx.body = entities);
  },

  // Custom method to filter articles by category and language
  async filterByCategoryAndLanguage(ctx) {
    const { category, language } = ctx.params; // Get category and language from the URL parameters

    const entities = await strapi.entityService.findMany(
      "api::article.article",
      {
        filters: { category, language }, // Filter by the provided category and language
        populate: ["coverImage"], // Add relations as necessary
      }
    );

    return (ctx.body = entities);
  },

  // `findOne` method for retrieving a single article by ID
  async findOne(ctx) {
    const { id } = ctx.params;

    if (isNaN(parseInt(id, 10))) {
      return ctx.badRequest("Invalid article ID");
    }

    const entity = await strapi.entityService.findOne(
      "api::article.article",
      id,
      {
        populate: ["coverImage"],
      }
    );

    if (!entity) {
      return ctx.notFound();
    }

    return (ctx.body = entity);
  },
}));
