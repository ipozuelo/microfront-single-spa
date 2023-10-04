import { newSpecPage } from '@stencil/core/testing';
import { MyCode } from '../my-code';

describe('my-code', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyCode],
      html: `<my-code></my-code>`,
    });
    expect(page.root).toEqualHtml(`
      <my-code>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-code>
    `);
  });
});
