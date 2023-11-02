import { Component } from '@angular/core';

@Component({
  selector: 'app-server-express',
  templateUrl: './server-express.component.html',
  styleUrls: ['./server-express.component.scss', '../app.component.scss']
})
export class ServerExpressComponent {

  code_start_server =`$ npm init
$ npm i cors
$ npm i express`

server_code=`const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.static('public'));


app.listen(PORT, () => {
  console.log(\`Servidor en ejecución en el puerto \${PORT}\`);
});`

server_start=`"scripts": {
"start": "node ./build.js && node ./index.js  "
},`
}
