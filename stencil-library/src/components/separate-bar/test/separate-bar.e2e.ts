import { newE2EPage } from '@stencil/core/testing';

describe('separate-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<separate-bar></separate-bar>');

    const element = await page.find('separate-bar');
    expect(element).toHaveClass('hydrated');
  });
});
