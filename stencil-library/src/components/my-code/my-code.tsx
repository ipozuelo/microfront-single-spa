import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-code',
  styleUrl: 'my-code.css',
  shadow: true,
})
export class MyCode {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
