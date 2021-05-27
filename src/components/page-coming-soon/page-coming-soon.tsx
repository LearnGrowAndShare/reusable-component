import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-coming-soon',
  styleUrl: 'page-coming-soon.scss',
  shadow: true,
})
export class PageComingSoon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
