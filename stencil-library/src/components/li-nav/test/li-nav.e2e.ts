import { newE2EPage } from '@stencil/core/testing';

describe('li-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<li-nav></li-nav>');

    const element = await page.find('li-nav');
    expect(element).toHaveClass('hydrated');
  });
});
