import { newE2EPage } from '@stencil/core/testing';

describe('my-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-code></my-code>');

    const element = await page.find('my-code');
    expect(element).toHaveClass('hydrated');
  });
});
