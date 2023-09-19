const StyleDictionary = require("style-dictionary").extend({
  source: ["../tokens/token.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "../server-assets/public/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables"
        },
        {
          destination: "colors/variables-general-colors.css",
          format: "deleteNameFormat",
          filter: ({ type, ...params }) => {
            return (
              !["dark mode"].includes(params.attributes.category) &&
              type.includes("color")
            );
          },
        },
        {
          destination: "colors/variables-dark-colors.css",
          format: "deleteNameFormat",
          filter: ({ type, ...params }) => {
            return (
              !["general"].includes(params.attributes.category) &&
              type.includes("color")
            );
          },
        },
        {
          destination: "variables/variables.css",
          format: "css/variables",
          filter: ({ type }) => {
            return !["color"].includes(type) && !["border"].includes(type);
          },
        },
        {
          destination: "fontSizes/variables-fontSizes.css",
          format: "css/variables",
          filter: { type: "fontSizes" },
        },
        {
          destination: "fontFamilies/variables-fontFamilies.css",
          format: "css/variables",
          filter: { type: "fontFamilies" },
        },
        {
          destination: "borderRadius/variables-borderRadius.css",
          format: "css/variables",
          filter: { type: "borderRadius" },
        },
        {
          destination: "icons/variables-icon.css",
          format: "css/variables",
          filter: { type: "icon" },
        },
        {
          destination: "borders/variables-border-dark-mode.css",
          format: "customFormat",
          filter: ({ type, ...params }) => {
            return (
              !["general"].includes(params.attributes.category) &&
              type.includes("border")
            );
          },
        },
        {
          destination: "borders/variables-border.css",
          format: "customFormat",
          filter: ({ type, ...params }) => {
            return (
              !["dark mode"].includes(params.attributes.category) &&
              type.includes("border")
            );
          },
        },
      ],
    },
  },
});

StyleDictionary.registerFormat({
  name: "customFormat",
  formatter: (diccionary) => {
    const customProperty = diccionary.allProperties
      .map((item) => {
        if (item.attributes.category == "general") {
          const variable = item.name.replace("general-", "");
          if (variable.includes("border-radius")) {
            return "";
          } else {
            return `--${variable}:${item.value.color} ${item.value.width} ${item.value.style};`;
          }
        } else {
          const variable = item.name.replace("dark-mode-", "");
          return `--${variable}:${item.value.color} ${item.value.width} ${item.value.style};`;
        }
      })
      .join("\n");

    return `:root{\n${customProperty}}`;
  },
});

StyleDictionary.registerFormat({
  name: "deleteNameFormat",
  formatter: (diccionary) => {
    const customProperty = diccionary.allProperties
      .map((item) => {
        if (item.attributes.category == "general") {
          const variable = item.name.replace("general-", "");
          return `--${variable}:${item.value};`;
        } else {
          const variable = item.name.replace("dark-mode-", "");
          return `--${variable}:${item.value};`;
        }
      })
      .join("\n");

    return `:root{\n${customProperty}}`;
  },
});

StyleDictionary.buildAllPlatforms();

console.log("done!");
