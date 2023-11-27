import { LitElement, html, css } from 'lit';

export default class ContactContent extends LitElement {
  static get styles() {
    return css`
      :host {
        color: blue;
      }
    `;
  }
  
  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <h1>Contact</h1>
    `;
  }
}

customElements.define('contact-content', ContactContent);