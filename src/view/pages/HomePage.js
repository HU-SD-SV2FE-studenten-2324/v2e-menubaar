import '../components/MenuBar';
import '../components/MenuBarItem';

export default class HomePage extends HTMLElement {
    
    connectedCallback() {
        this.innerHTML = `
          <nav>
            <menu-bar>
              <menu-bar-item name="Home"></menu-bar-item>
              <menu-bar-item name="About"></menu-bar-item>
              <menu-bar-item name="Contact"></menu-bar-item>
            </menu-bar>
          </nav>
        `;
    }
}

customElements.define('home-page', HomePage);