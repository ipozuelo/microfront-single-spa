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
          destination: 'colors/variables-general-colors.scss',
          format: 'css/variables',
          filter: ({type, ...params}) =>{
            console.log(params)
            return (!['dark mode'].includes(params.attributes.category) && type.includes('color'))
          }
        },
        {
          destination: 'colors/variables-dark-colors.scss',
          format: 'css/variables',
          filter: ({type, ...params}) =>{
            return (!['general'].includes(params.attributes.category) && type.includes('color'))
          }
        },
        {
          destination: 'variables/variables.scss',
          format: 'css/variables',
          filter: ({ type, ...params }) => { 
            console.log(params.attributes.category)
            return (!['color'].includes(type) && !['border'].includes(type))},
        },
        {
          destination: 'fontSizes/variables-fontSizes.scss',
          format: 'css/variables',
          filter: {type:'fontSizes'}
        },
        {
          destination: 'fontFamilies/variables-fontFamilies.scss',
          format: 'css/variables',
          filter: {type:'fontFamilies'}
        },
        {
          destination: 'borderRadius/variables-borderRadius.scss',
          format: 'css/variables',
          filter: {type:'borderRadius'}
        },
        {
          destination: 'icons/variables-icon.scss',
          format: 'css/variables',
          filter: {type:'icon'}
        },
        {
          destination: 'borders/variables-border.scss',
          format: 'customFormat',
          filter: {type:'border'}
        }]
      }
    }
  });

  StyleDictionary.registerFormat({
    name: "customFormat",
    formatter: (
      diccionary
    ) =>{
     const customProperty = diccionary.allProperties.map((item)=>{
          console.log(item.name, item.value.color, item.value.width, item.value. style)
          return `--${item.name}:${item.value.color} ${item.value.width} ${item.value.style};`
      }).join('\n')

  
      return  `:root{\n${customProperty}}`
    }

  })
  
  
  StyleDictionary.buildAllPlatforms();
  
  console.log("done!");
  