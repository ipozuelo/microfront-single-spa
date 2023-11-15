import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'separate-bar',
  styleUrl: 'separate-bar.css',
  shadow: true,
})
export class SeparateBar {

  render() {
    return (
      <Host>
        <hr />
      </Host>
    );
  }

}
