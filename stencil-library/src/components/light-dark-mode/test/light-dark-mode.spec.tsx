import { newSpecPage } from '@stencil/core/testing';
import { LightDarkMode } from '../light-dark-mode';

describe('light-dark-mode', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LightDarkMode],
      html: `<light-dark-mode></light-dark-mode>`,
    });
    expect(page.root).toEqualHtml(`
      <light-dark-mode>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </light-dark-mode>
    `);
  });
});
