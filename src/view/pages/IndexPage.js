import { LitElement, html, css } from 'lit';
import { MENU_BAR_ITEM_SELECTED } from '../event_types';
import '../components/MenuBar';
import '../components/MenuBarItem';
import '../components/HomeContent';
import '../components/AboutContent';
import '../components/ContactContent';
import '../components/PageNotFound';

export default class IndexPage extends LitElement {
  static get styles() {
    return css`
      host {
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      output: { type: String },
    };
  }

  constructor() {
    super();
    this.output = '';
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener(
      MENU_BAR_ITEM_SELECTED,
      this.menuBarItemClicked.bind(this)
    );
  }

  disconnectedCallback() {
    window.removeEventListener(
      MENU_BAR_ITEM_SELECTED,
      this.menuBarItemClicked.bind(this)
    );

    // Note that for the disconnectedCallback the super call must be last !!!
    // Otherwise, the parent class will not be able to remove its event listeners.
    super.disconnectedCallback();
  }

  menuBarItemClicked(event) {
    this.output = event.detail.target.getAttribute('src');
    // because the output property changed, the render function will be called again
  }

  // Note that this function will be called by the render function. It should not be called directly anywhere else.
  // Tip: To remember this, let the name of the function start with 'render'.
  renderMainContent() {
    switch (this.output) {
      case 'home':
        return html`<home-content></home-content>`;
      case 'about':
        return html`<about-content></about-content>`;
      case 'contact':
        return html`<contact-content></contact-content>`;
      default:
        return html`<page-not-found></page-not-found>`;
    }
  }

  render() {
    return html`
      <menu-bar role="navigation" aria-label="menu bar">
        <menu-bar-item src="home">Home</menu-bar-item>
        <menu-bar-item src="about">About</menu-bar-item>
        <menu-bar-item src="contact">Contact</menu-bar-item>
      </menu-bar>

      <main>${this.renderMainContent()}</main>
    `;
  }
}

customElements.define('index-page', IndexPage);
