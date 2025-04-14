"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/archives/language/:language",
      handler: "archive.filterByLanguage",
      config: {
        auth: false,
      },
    },
  ],
};
