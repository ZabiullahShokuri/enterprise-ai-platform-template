import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders spinner", () => {
    render(<Spinner />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("renders custom label", () => {
    render(<Spinner label="Loading data..." />);

    expect(screen.getByRole("status")).toHaveAttribute(
      "aria-label",
      "Loading data...",
    );
  });

  it("renders small size", () => {
    render(<Spinner size="sm" />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("renders medium size", () => {
    render(<Spinner size="md" />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("renders large size", () => {
    render(<Spinner size="lg" />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("accepts className", () => {
    render(<Spinner className="custom-spinner" />);

    expect(screen.getByRole("status")).toHaveClass("custom-spinner");
  });
});
