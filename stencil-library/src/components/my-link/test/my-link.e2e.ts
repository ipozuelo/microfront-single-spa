import { newE2EPage } from '@stencil/core/testing';

describe('my-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-link></my-link>');

    const element = await page.find('my-link');
    expect(element).toHaveClass('hydrated');
  });
});
