import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'loading-placeholder',
  styleUrl: 'loading-placeholder.css',
  shadow: true,
})
export class LoadingPlaceholder {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
