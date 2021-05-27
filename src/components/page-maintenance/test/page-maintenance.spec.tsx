import { newSpecPage } from '@stencil/core/testing';
import { PageMaintenance } from '../page-maintenance';

describe('page-maintenance', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageMaintenance],
      html: `<page-maintenance></page-maintenance>`,
    });
    expect(page.root).toEqualHtml(`
      <page-maintenance>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-maintenance>
    `);
  });
});
