import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'text-box',
  styleUrl: 'text-box.css',
  shadow: true,
})
export class TextBox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
