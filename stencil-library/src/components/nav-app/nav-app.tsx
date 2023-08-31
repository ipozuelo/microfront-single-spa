import { Component, Host, Prop, h, Element } from '@stencil/core';
import { NavItems } from './models/navItem.model';
import { getLocaleComponentStrings } from '../../utils/locale';

@Component({
  tag: 'nav-app',
  styleUrl: 'nav-app.css',
  shadow: true,
})
export class NavApp {
  @Prop() itemList: NavItems[] = [
    { text: 'home', icon: 'fa-solid fa-house', link: '/' },
    { text: 'about', icon: 'fa-solid fa-circle-info', link: '/about' },
    { text: 'stencil', icon: 'fa-solid fa-house', link: '/stencil' },
  ];
  @Prop() tittle: string = '';
  @Prop() lg: string = 'es';

  @Element() element: HTMLElement;
  strings: { [key: string]: string } = {};
  async componentWillLoad() {
    this.strings = await getLocaleComponentStrings(this.element, this.lg);
  }

  render() {
    return (
      <Host>
          <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"></link>
        <nav class="sidebar">
          <div class="logo_content">
            <div class="logo">
              <i class="bx bxl-deezer"></i>
              <span class="logo_name">{this.tittle}</span>
            </div>
          </div>

          <ul class="nav-list">
            {this.itemList.map((item, index) => (
              <li-nav key={index} text={item.text} link={item.link} icon={item.icon}></li-nav>
            ))}
          </ul>

          <div class="container-btn">
            <btn-languaje text='es'></btn-languaje>
            <btn-languaje text='en' lg='en'></btn-languaje>
          </div>
        </nav>
      </Host>
    );
  }
}
