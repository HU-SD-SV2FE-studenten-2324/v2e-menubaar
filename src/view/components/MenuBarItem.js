export default class MenuBarItem extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          <p>MenuBarItem</p>
        `;
    }
}

customElements.define('menu-bar-item', MenuBarItem);