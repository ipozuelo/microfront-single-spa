import { Component } from '@angular/core';

@Component({
  selector: 'root-app',
  templateUrl: './spa-root-info.html',
  styleUrls: ['../app.component.scss', "./root-app-info.component.scss"],
})
export class RootAppInfo {

  code_webpack_config_importmap = `  new CopyWebpackPlugin({
    patterns: [
      {
        from: 'src/importmap'  + '.json',
        to: 'importmap.json',
      },
    ],
  })`

  code_importmap_index = ` <% if (isLocal) { %>
    <script type="systemjs-importmap" src="/importmap.json"></script> 
    <% } %>`

  code_ejecute_root_app = `$ npm start`
}
