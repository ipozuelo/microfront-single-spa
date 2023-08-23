import { Component, Host, h, Prop, Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';


@Component({
  tag: 'li-nav',
  styleUrl: 'li-nav.css',
  shadow: true,
})
export class LiNav {
  @Prop() text: string = '';
  @Prop() link: string = '';
  @Prop() icon: string = '';

  @Element() element: HTMLElement;
  strings: { [key: string]: string } = {};
  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.element);
  }

  render() {
    return (
      <Host>
        <li>
          <a href={this.link}>
            <p>{this.strings[this.text]}</p>
          </a>
        </li>
      </Host>
    );
  }
}
