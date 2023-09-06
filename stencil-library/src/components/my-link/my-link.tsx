import { Component, Host, h, Prop } from '@stencil/core';



@Component({
  tag: 'my-link',
  styleUrl: 'my-link.css',
  shadow: true,
})
export class MyLink {

  @Prop() link:string = ""
  @Prop() text:string = ""
 

  render() {
    return (
      <Host>
        <a href={this.link} target='blanck'>{this.text}</a>
      </Host>
    );
  }

}
