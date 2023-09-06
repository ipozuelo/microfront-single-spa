import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'text-box',
  styleUrl: 'text-box.css',
  shadow: true,
})
export class TextBox {
  @Prop() text: string = '';

  render() {
    return (
      <Host>
        <div class="caja">
          <p class="texto">{this.text}</p>
        </div>
      </Host>
    );
  }
}
