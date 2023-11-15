import { newSpecPage } from '@stencil/core/testing';
import { SeparateBar } from '../separate-bar';

describe('separate-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SeparateBar],
      html: `<separate-bar></separate-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <separate-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </separate-bar>
    `);
  });
});
