import { Component, Host, Prop, h } from '@stencil/core';


@Component({
  tag: 'my-btn',
  styleUrl: 'my-btn.css',
  shadow: true,
})
export class MyBtn {

  @Prop() text:string="click"



  render() {
    return (
      <Host>
        <button>{this.text}</button>
      </Host>
    );
  }

}
