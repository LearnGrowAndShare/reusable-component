import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-maintenance',
  styleUrl: 'page-maintenance.css',
  shadow: true,
})
export class PageMaintenance {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
