import { Component, Host, Prop, h, Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';

@Component({
  tag: 'my-btn',
  styleUrl: 'my-btn.css',
  shadow: true,
})
export class MyBtn {

  @Prop() text:string="click"

  @Prop() lg: string = 'es';
  @Element() element: HTMLElement;
  strings: { [key: string]: string } = {};
  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.element, this.lg);
  }

  render() {
    return (
      <Host>
        <button>{this.strings[this.text]}</button>
      </Host>
    );
  }

}
