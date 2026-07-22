import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders textarea", () => {
    render(<Textarea />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Textarea label="Description" />);

    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("renders helper text", () => {
    render(<Textarea helperText="Helper text" />);

    expect(screen.getByText("Helper text")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<Textarea error errorMessage="Required field" />);

    expect(screen.getByText("Required field")).toBeInTheDocument();
  });

  it("supports disabled state", () => {
    render(<Textarea disabled />);

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("supports placeholder", () => {
    render(<Textarea placeholder="Type here..." />);

    expect(screen.getByPlaceholderText("Type here...")).toBeInTheDocument();
  });
});
