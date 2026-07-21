import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Label } from "./Label";

describe("Label", () => {
  it("renders children", () => {
    render(<Label>Email</Label>);

    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders required indicator", () => {
    render(<Label required>Email</Label>);

    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("does not render required indicator by default", () => {
    render(<Label>Email</Label>);

    expect(screen.queryByText("*")).toBeNull();
  });

  it("sets aria-disabled", () => {
    render(<Label disabled>Email</Label>);

    expect(screen.getByText("Email").closest("label"))
      .toHaveAttribute("aria-disabled", "true");
  });
});