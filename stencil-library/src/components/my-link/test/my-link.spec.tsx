import { newSpecPage } from '@stencil/core/testing';
import { MyLink } from '../my-link';

describe('my-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyLink],
      html: `<my-link></my-link>`,
    });
    expect(page.root).toEqualHtml(`
      <my-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-link>
    `);
  });
});
