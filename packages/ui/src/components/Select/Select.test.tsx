import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Select } from "./Select";

const options = [
  {
    value: "1",
    label: "Option 1",
  },
  {
    value: "2",
    label: "Option 2",
  },
];

describe("Select", () => {
  it("renders select", () => {
    render(<Select options={options} />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Select label="Country" options={options} />);

    expect(screen.getByText("Country")).toBeInTheDocument();
  });

  it("renders helper text", () => {
    render(<Select helperText="Choose one" options={options} />);

    expect(screen.getByText("Choose one")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<Select error errorMessage="Required field" options={options} />);

    expect(screen.getByText("Required field")).toBeInTheDocument();
  });

  it("supports disabled state", () => {
    render(<Select disabled options={options} />);

    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("renders options", () => {
    render(<Select options={options} />);

    expect(screen.getByText("Option 1")).toBeInTheDocument();

    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });
});
