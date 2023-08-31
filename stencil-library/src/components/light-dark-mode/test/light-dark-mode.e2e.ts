import { newE2EPage } from '@stencil/core/testing';

describe('light-dark-mode', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<light-dark-mode></light-dark-mode>');

    const element = await page.find('light-dark-mode');
    expect(element).toHaveClass('hydrated');
  });
});
