import type { ComponentType } from "react";

type CompoundComponents = Record<string, ComponentType<any>>;

export function createCompoundComponent<
  T extends ComponentType<any>,
  C extends CompoundComponents,
>(Root: T, components: C): T & C {
  Object.entries(components).forEach(([key, component]) => {
    Object.defineProperty(Root, key, {
      value: component,
      enumerable: true,
      configurable: false,
      writable: false,
    });
  });

  return Root as T & C;
}
