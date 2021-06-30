import { Component, Prop, h, getMode, Host } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrls: {
    ios: 'my-component-ios.css',
    md: 'my-component-md.css',
  },
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <Host computed-mode={getMode(this)}><div>Hello, World! I'm {this.getText()}. Applied mode: {getMode(this)}</div></Host>;
  }
}
