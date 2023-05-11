import { expect } from "chai";
import { sum } from "../../src/sum.js";

describe("sum", () => {
  it("1 + 1 = 2", () => {
    expect(sum(1, 1)).to.equal(2);
  });
});
