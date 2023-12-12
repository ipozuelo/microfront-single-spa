import { Component, Host, Prop, h, State } from '@stencil/core';

import 'https://kit.fontawesome.com/94e65f6987.js';

@Component({
  tag: 'nav-app',
  styleUrl: 'nav-app.css',
  shadow: true,
})
export class NavApp {
  @Prop() itemList: string = '';
  @Prop()
  list: string = `[{ "text": "home", "icon": "--icon-house", "link": "/"},{ "text": "About", "icon": "--icon-info", "link": "/"},{ "text": "About", "icon": "--icon-info", "link": "/"},{ "text": "About", "icon": "--icon-info", "link": "/"},{ "text": "About", "icon": "--icon-info", "link": "/"}]`;
  @Prop() logo_img: string = '';
  @Prop() tittle: string = '';

  @Prop() theme: boolean = false;
  @Prop() languaje: boolean = false;

  @State() obj: any;

  componentWillRender() {
    this.obj = JSON.parse(this.list);
  }

  render() {
    return (
      <Host>
        <nav class="content-nav">
          <div class="logo_content">
            <div class="logo">
              <a href="/">
                <img class="img_logo" src={this.logo_img} alt=""></img>
              </a>
              {this.theme ? (
                <div class="theme-button">
                  <light-dark-mode></light-dark-mode>
                </div>
              ) : null}
            </div>
          </div>

          <ul>
            {this.obj?.map((item, index) => (
              <li-nav key={index} text={item.text} link={item.link} icon={item.icon}></li-nav>
            ))}
          </ul>
          {this.languaje ? (
            <div class="container-btn">
              <btn-languaje text="es"></btn-languaje>
              <btn-languaje text="en" lg="en"></btn-languaje>
            </div>
          ) : null}
        </nav>
      </Host>
    );
  }
}
