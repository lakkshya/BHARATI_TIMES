"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::archive.archive", ({ strapi }) => ({
  async find(ctx) {
    try {
      const entries = await strapi.entityService.findMany(
        "api::archive.archive",
        {
          populate: {
            englishPdfLink: true,
            hindiPdfLink: true,
          },
        }
      );

      return ctx.send(entries);
    } catch (error) {
      strapi.log.error("Error fetching archives:", error);
      return ctx.internalServerError(
        "An error occurred while fetching archives"
      );
    }
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    if (isNaN(Number(id))) {
      return ctx.badRequest("Invalid archive ID");
    }

    try {
      const entry = await strapi.entityService.findOne(
        "api::archive.archive",
        id,
        {
          populate: {
            englishPdfLink: true,
            hindiPdfLink: true,
          },
        }
      );

      if (!entry) {
        return ctx.notFound("Archive not found");
      }

      return ctx.send(entry);
    } catch (error) {
      strapi.log.error("Error fetching archive:", error);
      return ctx.internalServerError(
        "An error occurred while fetching the archive"
      );
    }
  },
}));
