import { Component, Host, h, Prop, Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';


@Component({
  tag: 'my-link',
  styleUrl: 'my-link.css',
  shadow: true,
})
export class MyLink {

  @Prop() link:string = ""
  @Prop() text:string = ""
  @Prop() lg: string = 'es';
  @Element() element: HTMLElement;
  strings: { [key: string]: string } = {};
  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.element, this.lg);
  }

  render() {
    return (
      <Host>
        <a href={this.link} target='blanck'>{this.strings[this.text]}</a>
      </Host>
    );
  }

}
