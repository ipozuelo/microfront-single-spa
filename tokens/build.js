const StyleDictionary = require("style-dictionary").extend({
  source: ["../tokens/token.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "../spa-root/src/assets/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
    scss: {
      transformGroup: "scss",
      buildPath: "../spa-root/src/assets/",
      files: [
        {
          destination: "colors/variables-general-colors.scss",
          format: "deleteNameFormat",
          filter: ({ type, ...params }) => {
            return (
              !["dark mode"].includes(params.attributes.category) &&
              type.includes("color")
            );
          },
        },
        {
          destination: "colors/variables-dark-colors.scss",
          format: "deleteNameFormat",
          filter: ({ type, ...params }) => {
            return (
              !["general"].includes(params.attributes.category) &&
              type.includes("color")
            );
          },
        },
        {
          destination: "variables/variables.scss",
          format: "css/variables",
          filter: ({ type }) => {
            return !["color"].includes(type) && !["border"].includes(type);
          },
        },
        {
          destination: "fontSizes/variables-fontSizes.scss",
          format: "css/variables",
          filter: { type: "fontSizes" },
        },
        {
          destination: "fontFamilies/variables-fontFamilies.scss",
          format: "css/variables",
          filter: { type: "fontFamilies" },
        },
        {
          destination: "borderRadius/variables-borderRadius.scss",
          format: "css/variables",
          filter: { type: "borderRadius" },
        },
        {
          destination: "icons/variables-icon.scss",
          format: "css/variables",
          filter: { type: "icon" },
        },
        {
          destination: "borders/variables-border-dark-mode.scss",
          format: "customFormat",
          filter: ({ type, ...params }) => {
            return (
              !["general"].includes(params.attributes.category) &&
              type.includes("border")
            );
          },
        },
        {
          destination: "borders/variables-border.scss",
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
