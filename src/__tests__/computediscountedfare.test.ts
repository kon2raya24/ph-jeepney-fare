import { describe, it, expect } from "vitest";
import { computeDiscountedFare } from "../computediscountedfare";

describe("computeDiscountedFare", () => {
  it("should be a function", () => {
    expect(typeof computeDiscountedFare).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => computeDiscountedFare(null as any)).toThrow();
  });
});
