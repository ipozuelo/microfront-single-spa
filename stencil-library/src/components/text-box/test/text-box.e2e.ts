import { newE2EPage } from '@stencil/core/testing';

describe('text-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-box></text-box>');

    const element = await page.find('text-box');
    expect(element).toHaveClass('hydrated');
  });
});
