import { Component, Host, h, Prop, Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';


@Component({
  tag: 'li-nav',
  styleUrl: 'li-nav.css',
  shadow: true,
})
export class LiNav  {
  @Prop() text: string = '';
  @Prop() link: string = '';
  @Prop() icon: string = '';
  @Prop() lg: string = 'es';

  @Element() element: HTMLElement;
  strings: { [key: string]: string } = {};
  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.element, this.lg);
  }

  render() {

   
    return (
      <Host>
        <li >
     
          <a href={this.link} class="nav-item">
          <i class={this.icon}></i>
            <p>{this.strings[this.text]}</p>
          </a>

        </li>
     
      </Host>
    );
  }
}
