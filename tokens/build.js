const StyleDictionary = require('style-dictionary').extend({
    source: ["../tokens/token.json"],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: '../tokens/',
        files: [{
          destination: 'variables.css',
          format: 'css/variables',
        }]
      },
      scss: {
        transformGroup: 'scss',
        buildPath: '../tokens/',
        files: [{
          destination: 'variables.scss',
          format: 'scss/variables',
        }]
      }
    }
  });
  
  
  StyleDictionary.buildAllPlatforms();
  
  console.log("done!");
  