import { describe, it, expect } from "vitest";
import { computeFare } from "../computefare";

describe("computeFare", () => {
  it("should be a function", () => {
    expect(typeof computeFare).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => computeFare(null as any)).toThrow();
  });
});
