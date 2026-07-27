import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Accordion } from "./Accordion";

describe("Accordion", () => {
  it("renders accordion", () => {
    render(
      <Accordion defaultValue={[]}>
        <div>Accordion Content</div>
      </Accordion>,
    );

    expect(screen.getByText("Accordion Content")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <Accordion defaultValue={[]}>
        <span>Child Element</span>
      </Accordion>,
    );

    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });

  it("has accordion data attribute", () => {
    const { container } = render(
      <Accordion defaultValue={[]}>
        <div>Content</div>
      </Accordion>,
    );

    expect(container.firstChild).toHaveAttribute("data-accordion");
  });
});
