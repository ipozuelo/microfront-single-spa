import { newSpecPage } from '@stencil/core/testing';
import { LiNav } from '../li-nav';

describe('li-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LiNav],
      html: `<li-nav></li-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <li-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </li-nav>
    `);
  });
});
