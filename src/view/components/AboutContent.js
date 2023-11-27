import { LitElement, html, css } from 'lit';

export default class AboutContent extends LitElement {
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
      <h1>About</h1>
    `;
  }
}

customElements.define('about-content', AboutContent);