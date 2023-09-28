import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-library',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, 
      copy: [
        { 
          src: 'global' 
        }
      ]
    },
    
    
  ],
  
  testing: {
    browserHeadless: "new",
  },
};
