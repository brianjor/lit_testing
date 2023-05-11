import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class MyComponent extends LitElement {
  @property({ type: String })
  text = "";

  render() {
    return html`<div>${this.text}</div>`;
  }
}

window.customElements.define("my-component", MyComponent);
