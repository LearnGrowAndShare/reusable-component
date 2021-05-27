import { newSpecPage } from '@stencil/core/testing';
import { LoadingPlaceholder } from '../loading-placeholder';

describe('loading-placeholder', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LoadingPlaceholder],
      html: `<loading-placeholder></loading-placeholder>`,
    });
    expect(page.root).toEqualHtml(`
      <loading-placeholder>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </loading-placeholder>
    `);
  });
});
