import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders divider", () => {
    render(<Divider />);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("renders horizontal divider", () => {
    render(<Divider orientation="horizontal" />);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("renders vertical divider", () => {
    render(<Divider orientation="vertical" />);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("accepts custom thickness", () => {
    render(<Divider thickness={4} />);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("accepts custom color", () => {
    render(<Divider color="#ff0000" />);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("accepts custom length", () => {
    render(<Divider length={200} />);

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});
