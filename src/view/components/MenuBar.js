export default class MenuBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <p>MenuBar</p>      
    `;
  }
}

customElements.define('menu-bar', MenuBar);