import { newE2EPage } from '@stencil/core/testing';

describe('loading-placeholder', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<loading-placeholder></loading-placeholder>');

    const element = await page.find('loading-placeholder');
    expect(element).toHaveClass('hydrated');
  });
});
