import { LitElement, html, css } from 'lit';

export default class PageNotFound extends LitElement {
  static get styles() {
    return css`
      :host {
        color: red;
      }
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <h1>404 - Page not found</h1>
    `;
  }
}

customElements.define('page-not-found', PageNotFound);