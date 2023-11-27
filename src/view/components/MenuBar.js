import { LitElement, html, css } from 'lit';
import { MENU_BAR_ITEM_SELECTED } from '../event_types';

export default class MenuBar extends LitElement {
  static get styles() {
    return css`
      :host {
        font-size: 1.3rem;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener(MENU_BAR_ITEM_SELECTED, this.menuBarItemClicked.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener(MENU_BAR_ITEM_SELECTED, this.menuBarItemClicked.bind(this));
    
    // Note that for the disconnectedCallback the super call must be last !!!
    // Otherwise, the parent class will not be able to remove its event listeners.
    super.disconnectedCallback();
  }

  menuBarItemClicked(event) {
    this.querySelectorAll('menu-bar-item').forEach((item) => {
      if (item !== event.detail.target) {
        // eslint-disable-next-line no-param-reassign
        item.selected = false;
      }
    });
  }

  clickHandler(event) {
    console.log(event.target);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('menu-bar', MenuBar);
