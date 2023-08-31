import { Component, Host, h, Prop, Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';

@Component({
  tag: 'text-box',
  styleUrl: 'text-box.css',
  shadow: true,
})
export class TextBox {

  @Prop() text:string=""
  @Prop() lg: string = 'es';
  @Element() element: HTMLElement;
  strings: { [key: string]: string } = {};
  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.element, this.lg);
  }

  render() {
    return (
      <Host>
        <div class="caja">
          <p class="texto">{this.strings[this.text]}</p>
        </div>
      </Host>
    );
  }

}
