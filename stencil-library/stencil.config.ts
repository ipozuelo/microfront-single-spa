import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-library',
  
  
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
            src: './assets/i18n/*.json',
            dest: 'assets/i18n'
        }
    ],// disable service workers
    },
    
    
  ],
  
  testing: {
    browserHeadless: "new",
  },
};
