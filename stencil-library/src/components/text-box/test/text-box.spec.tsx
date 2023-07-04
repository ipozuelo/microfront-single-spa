import { newSpecPage } from '@stencil/core/testing';
import { TextBox } from '../text-box';

describe('text-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TextBox],
      html: `<text-box></text-box>`,
    });
    expect(page.root).toEqualHtml(`
      <text-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-box>
    `);
  });
});
