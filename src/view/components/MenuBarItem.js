import { LitElement, html, css } from 'lit';
import { MENU_BAR_ITEM_SELECTED } from '../event_types';

export default class MenuBarItem extends LitElement {
  static get styles() {
    return css`
      :host {
        background-color: yellow;
        padding: 0.3rem;
        border-left: 1px solid black;
        border-right: 1px solid black;
      }
      :host(:hover) {
        background-color: red;
      }
      :host([selected]) {
        background-color: green;
        color: white;
      }
    `;
  }

  static get properties() {
    return {
      selected: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.selected = false;
  }

  clickHandler() {
    // set the selected attribute to true
    this.selected = true;

    // dispatch an event that a menu bar item was selected
    // add the target attribute to the event detail
    dispatchEvent(
      new CustomEvent(MENU_BAR_ITEM_SELECTED, {
        bubbles: true,
        composed: true,
        detail: {
          target: this,
        },
      })
    );
  }

  render() {
    return html`
      <slot @click=${this.clickHandler}>
      </slot>
    `;
  }
}

customElements.define('menu-bar-item', MenuBarItem);
