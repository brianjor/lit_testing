import { expect } from "@esm-bundle/chai";
import { html } from "lit";
import { fixture } from "@open-wc/testing";
import { MyComponent } from "../../src/my-component.js";
import "../../src/my-component.js";

describe("MyComponent", () => {
  it("displays the text", async () => {
    const text = "Hello Tests";
    const el = await fixture<MyComponent>(
      html`<my-component text=${text}></my-component>`
    );
    expect(el.text).to.equal(text);
  });
});
