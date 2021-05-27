import { newSpecPage } from '@stencil/core/testing';
import { PageComingSoon } from '../page-coming-soon';

describe('page-coming-soon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageComingSoon],
      html: `<page-coming-soon></page-coming-soon>`,
    });
    expect(page.root).toEqualHtml(`
      <page-coming-soon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-coming-soon>
    `);
  });
});
