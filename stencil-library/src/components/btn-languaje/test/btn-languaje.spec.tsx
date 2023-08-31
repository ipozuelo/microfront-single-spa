import { newSpecPage } from '@stencil/core/testing';
import { BtnLanguaje } from '../btn-languaje';

describe('btn-languaje', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BtnLanguaje],
      html: `<btn-languaje></btn-languaje>`,
    });
    expect(page.root).toEqualHtml(`
      <btn-languaje>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </btn-languaje>
    `);
  });
});
