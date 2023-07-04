import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {

  @Prop() name:string = ""
  @Prop() img:string = ""


  render() {
    return (
      <Host>
        <div class="card">
        <img src={this.img} alt="Imagen"/>
        <div class="name">{this.name}</div>
        </div>
      </Host>
    );
  }

}
