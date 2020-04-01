
import { LitElement, html } from 'lit-element';
import './components/first-component';
import './components/bs-component';


class MyApp extends LitElement {
  static get properties() {
    return {
    };
  }
  constructor() {
    super();
 
  }
  render() {
    return html`
      <first-component></first-component>

      <bs-component></bs-component>
    `;
  }
}

customElements.define('my-app', MyApp);