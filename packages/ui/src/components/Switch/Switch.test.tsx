import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders correctly", () => {
    render(<Switch />);

    expect(
      screen.getByRole("switch"),
    ).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Switch label="Enable notifications" />);

    expect(
      screen.getByText("Enable notifications"),
    ).toBeInTheDocument();
  });

  it("renders helper text", () => {
    render(<Switch helperText="Helper text" />);

    expect(
      screen.getByText("Helper text"),
    ).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(
      <Switch
        error
        errorMessage="Required"
      />,
    );

    expect(
      screen.getByText("Required"),
    ).toBeInTheDocument();
  });

  it("supports disabled state", () => {
    render(<Switch disabled />);

    expect(
      screen.getByRole("switch"),
    ).toBeDisabled();
  });

  it("calls onCheckedChange", async () => {
    const user = userEvent.setup();

    const onCheckedChange = vi.fn();

    render(
      <Switch
        onCheckedChange={onCheckedChange}
      />,
    );

    await user.click(
      screen.getByRole("switch"),
    );

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });
});