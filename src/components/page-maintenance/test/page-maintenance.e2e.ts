import { newE2EPage } from '@stencil/core/testing';

describe('page-maintenance', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-maintenance></page-maintenance>');

    const element = await page.find('page-maintenance');
    expect(element).toHaveClass('hydrated');
  });
});
