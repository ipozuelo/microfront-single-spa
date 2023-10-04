import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'nav-app',
  styleUrl: 'nav-app.css',
  shadow: true,
})
export class NavApp {
  @Prop() itemList: any = [
    { text: 'home', icon: '--icon-house', link: '/home' },
    { text: 'about', icon: '--icon-info', link: '/about' },
    { text: 'web', icon: '--icon-code', link: '/web' },
    { text: 'library', icon: '--icon-library', link: '/library' },
    { text: 'tools', icon: '--general-icon-ui-tools', link: '/tools' },
  ];

  @Prop() tittle: string = '';

  @Prop() theme: boolean = false;
  @Prop() languaje: boolean = false;

  render() {
    return (
      <Host>
        <nav class="sidebar">
          <div class="logo_content">
            <div class="logo">
              <i class="bx bxl-deezer"></i>
              <span class="logo_name">{this.tittle}</span>
              {this.theme ? (
        <div class="theme-button">
          <light-dark-mode></light-dark-mode>
        </div>
      ) : null}
            </div>
          </div>

          <ul class="nav-list">
            {this.itemList?.map((item, index) => (
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
