import { describe, expect, it } from "vitest";

import { createCollection } from "./createCollection";

describe("createCollection", () => {
  it("registers an item", () => {
    const collection = createCollection<string>();

    collection.register("1", "Button");

    expect(collection.size).toBe(1);
    expect(collection.get("1")).toBe("Button");
  });

  it("unregisters an item", () => {
    const collection = createCollection<string>();

    collection.register("1", "Button");
    collection.unregister("1");

    expect(collection.size).toBe(0);
    expect(collection.get("1")).toBeUndefined();
  });

  it("returns all registered items", () => {
    const collection = createCollection<string>();

    collection.register("1", "Button");
    collection.register("2", "Input");

    expect(collection.getAll()).toEqual([
      {
        id: "1",
        data: "Button",
      },
      {
        id: "2",
        data: "Input",
      },
    ]);
  });

  it("clears the collection", () => {
    const collection = createCollection<string>();

    collection.register("1", "Button");
    collection.register("2", "Input");

    collection.clear();

    expect(collection.size).toBe(0);
  });

  it("checks item existence", () => {
    const collection = createCollection<string>();

    collection.register("1", "Button");

    expect(collection.has("1")).toBe(true);
    expect(collection.has("2")).toBe(false);
  });
});
