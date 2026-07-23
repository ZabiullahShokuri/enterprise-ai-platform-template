import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Card } from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Card Content</Card>);

    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  it("renders default variant", () => {
    render(<Card variant="default">Default Card</Card>);

    expect(screen.getByText("Default Card")).toBeInTheDocument();
  });

  it("renders outlined variant", () => {
    render(<Card variant="outlined">Outlined Card</Card>);

    expect(screen.getByText("Outlined Card")).toBeInTheDocument();
  });

  it("renders elevated variant", () => {
    render(<Card variant="elevated">Elevated Card</Card>);

    expect(screen.getByText("Elevated Card")).toBeInTheDocument();
  });

  it("supports full width", () => {
    render(<Card fullWidth>Full Width Card</Card>);

    expect(screen.getByText("Full Width Card")).toBeInTheDocument();
  });

  it("supports large padding", () => {
    render(<Card padding="lg">Large Padding</Card>);

    expect(screen.getByText("Large Padding")).toBeInTheDocument();
  });
});
