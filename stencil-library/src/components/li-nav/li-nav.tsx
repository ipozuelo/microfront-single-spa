import { Component, Host, h, Prop } from '@stencil/core';


@Component({
  tag: 'li-nav',
  styleUrl: 'li-nav.css',
  shadow: true,
})
export class LiNav {
  
  @Prop() text: string = '';
  @Prop() link: string = '';
  @Prop() icon: string = ''

  


  render() {

    const iconClassName = getComputedStyle(document.documentElement).getPropertyValue(this.icon).trim();

    return (
      <Host>
        <li>
          <a href={this.link} class="nav-item">
            <i class={iconClassName}></i>
            <p>{this.text}</p>
          </a>
        </li>
      </Host>
    );
  }
}
