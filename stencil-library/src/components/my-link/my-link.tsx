import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-link',
  styleUrl: 'my-link.css',
  shadow: true,
})
export class MyLink {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
