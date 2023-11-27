import { LitElement, html, css } from 'lit';

export default class HomeContent extends LitElement {
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
      <h1>Home</h1>
    `
  }
}

customElements.define('home-content', HomeContent);