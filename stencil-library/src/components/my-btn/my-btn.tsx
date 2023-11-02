import { Component, Host, Prop, h } from '@stencil/core';


@Component({
  tag: 'my-btn',
  styleUrl: 'my-btn.css',
  shadow: true,
})
export class MyBtn {

  @Prop() text:string="click"

  @Prop() onClick: () => void;


  render() {
    return (
      <Host>
        <button onClick={this.onClick}>{this.text}</button>
      </Host>
    );
  }

}
