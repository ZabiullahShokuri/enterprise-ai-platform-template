import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ApplicationShell } from "@/layouts/ApplicationShell";

describe("ApplicationShell", () => {
  it("renders the integrated UI shell", () => {
    render(<ApplicationShell />);

    expect(
      screen.getByRole("navigation", { name: "Main navigation" }),
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();

    expect(
      screen.getByRole("searchbox", { name: "Command palette" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "UI integration works" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Enterprise AI Platform" }),
    ).toBeInTheDocument();
  });
});
