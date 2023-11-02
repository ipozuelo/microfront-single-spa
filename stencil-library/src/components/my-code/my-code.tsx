import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-code',
  styleUrl: 'my-code.css',
  shadow: true,
})
export class MyCode {
  @Prop() text_code: string = '';

  render() {
    return (
      <pre>
        <code>{this.text_code}</code>
      </pre>
    );
  }
}
