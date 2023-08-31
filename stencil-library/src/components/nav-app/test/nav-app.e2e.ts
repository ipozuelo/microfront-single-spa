import { newE2EPage } from '@stencil/core/testing';

describe('nav-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nav-app></nav-app>');

    const element = await page.find('nav-app');
    expect(element).toHaveClass('hydrated');
  });
});
