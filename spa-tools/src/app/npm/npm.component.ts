import { Component } from '@angular/core';

@Component({
  selector: 'app-npm',
  templateUrl: './npm.component.html',
  styleUrls: ['./npm.component.scss', '../app.component.scss']
})
export class NpmComponent {

  code_cdn = `<script 
  type="module"  
  src='https://cdn.jsdelivr.net/npm/stencil-library-web@0.0.32/dist/stencil-library/stencil-library.esm.js'>
</script>

<link rel="stylesheet" 
  type="text/css""  
  href='https://cdn.jsdelivr.net/npm/stencil-library-web@1.0.0/dist/stencil-library/stencil-library.css'>
</link>`

}
