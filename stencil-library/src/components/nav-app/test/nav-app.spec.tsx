import { newSpecPage } from '@stencil/core/testing';
import { NavApp } from '../nav-app';

describe('nav-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NavApp],
      html: `<nav-app></nav-app>`,
    });
    expect(page.root).toEqualHtml(`
      <nav-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nav-app>
    `);
  });
});
