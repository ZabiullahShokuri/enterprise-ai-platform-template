import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders initials from name", () => {
    render(<Avatar name="John Doe" />);

    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders image when src is provided", () => {
    render(<Avatar src="avatar.png" alt="John" />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders fallback when no name exists", () => {
    render(<Avatar />);

    expect(screen.getByText("?")).toBeInTheDocument();
  });

  it("renders custom alt text", () => {
    render(<Avatar src="avatar.png" alt="Profile image" />);

    expect(screen.getByAltText("Profile image")).toBeInTheDocument();
  });

  it("supports different sizes", () => {
    render(<Avatar size="lg" name="Enterprise UI" />);

    expect(screen.getByText("EU")).toBeInTheDocument();
  });

  it("renders single initial", () => {
    render(<Avatar name="Enterprise" />);

    expect(screen.getByText("E")).toBeInTheDocument();
  });
});
