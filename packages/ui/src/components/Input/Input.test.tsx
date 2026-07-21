import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { Input } from "./Input";

describe("Input", () => {
  it("renders placeholder", () => {
    render(<Input placeholder="Email" />);

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Input label="Email" />);

    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders helper text", () => {
    render(<Input helperText="Helper" />);

    expect(screen.getByText("Helper")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<Input error errorMessage="Required field" />);

    expect(screen.getByText("Required field")).toBeInTheDocument();
  });

  it("is disabled", () => {
    render(<Input disabled />);

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("calls onChange", () => {
    const handleChange = vi.fn();

    render(<Input onChange={handleChange} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: {
        value: "hello",
      },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders left icon", () => {
    render(
      <Input
        leftIcon={<span data-testid="left-icon">L</span>}
      />
    );

    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("renders right icon", () => {
    render(
      <Input
        rightIcon={<span data-testid="right-icon">R</span>}
      />
    );

    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("receives focus", () => {
    render(<Input />);

    const input = screen.getByRole("textbox");

    input.focus();

    expect(input).toHaveFocus();
  });

  it("accepts typed value", () => {
    render(<Input />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: {
        value: "Enterprise",
      },
    });

    expect(input).toHaveValue("Enterprise");
  });
});