import { expect } from "@esm-bundle/chai";
import { html } from "lit";
import { fixture } from "@open-wc/testing";
import { MyComponent } from "../../src/my-component";
import "../../src/my-component";

describe("MyComponent", () => {
  it("displays the text", async () => {
    const text = "Hello Tests";
    const expected = `<div>${text}</div>`;
    const el = await fixture<MyComponent>(
      html`<my-component text=${text}></my-component>`
    );
    expect(el.text).to.equal(text);
    expect(el).shadowDom.to.equal(expected);
  });
});
