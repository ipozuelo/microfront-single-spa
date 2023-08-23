import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule,{
    providers: [
      {
        provide: HIGHLIGHT_OPTIONS,
        useValue: <HighlightOptions>{
          lineNumbers: true,
          coreLibraryLoader: () => import('highlight.js/lib/core'),
          languages: {
            bash: () => import('highlight.js/lib/languages/bash'),
            html: () => import('highlight.js/lib/languages/html')
          },
        },
      },
    ],
  })
  .catch((err) => console.error(err));
