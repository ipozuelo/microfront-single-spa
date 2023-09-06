import { Component, Host, h, Prop } from '@stencil/core';


@Component({
  tag: 'li-nav',
  styleUrl: 'li-nav.css',
  shadow: true,
})
export class LiNav {
  @Prop() text: string = '';
  @Prop() link: string = '';
  @Prop() icon: string = '';

  render() {
    return (
      <Host>
        <li>
          <a href={this.link} class="nav-item">
            <i class={this.icon}></i>
            <p>{this.text}</p>
          </a>
        </li>
      </Host>
    );
  }
}
