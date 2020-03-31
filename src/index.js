
import { LitElement, html } from 'lit-element';
import './components/first-component';

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
      <h3>First component:</h3>
      <first-component></first-component>
    `;
  }
}

customElements.define('my-app', MyApp);