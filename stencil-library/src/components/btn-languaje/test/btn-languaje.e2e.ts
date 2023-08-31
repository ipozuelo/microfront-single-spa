import { newE2EPage } from '@stencil/core/testing';

describe('btn-languaje', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<btn-languaje></btn-languaje>');

    const element = await page.find('btn-languaje');
    expect(element).toHaveClass('hydrated');
  });
});
