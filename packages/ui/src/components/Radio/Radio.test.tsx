import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Radio } from "./Radio";

describe("Radio", () => {
  it("renders label", () => {
    render(<Radio label="Option A" />);

    expect(screen.getByText("Option A")).toBeInTheDocument();
  });

  it("renders helper text", () => {
    render(<Radio helperText="Choose one option" />);

    expect(screen.getByText("Choose one option")).toBeInTheDocument();
  });

  it("renders error message when error is true", () => {
    render(
      <Radio error helperText="Helper" errorMessage="Invalid selection" />,
    );

    expect(screen.getByText("Invalid selection")).toBeInTheDocument();
  });

  it("calls onCheckedChange", () => {
    const onCheckedChange = vi.fn();

    render(<Radio onCheckedChange={onCheckedChange} />);

    fireEvent.click(screen.getByRole("radio"));

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("supports disabled state", () => {
    render(<Radio disabled />);

    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("supports checked state", () => {
    render(<Radio checked readOnly />);

    expect(screen.getByRole("radio")).toBeChecked();
  });
});
