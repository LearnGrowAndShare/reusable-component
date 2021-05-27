import { newE2EPage } from '@stencil/core/testing';

describe('page-coming-soon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-coming-soon></page-coming-soon>');

    const element = await page.find('page-coming-soon');
    expect(element).toHaveClass('hydrated');
  });
});
