import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("renders children", () => {
    render(
      <Tooltip content="Tooltip Content">
        <button>Hover me</button>
      </Tooltip>,
    );

    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("shows tooltip on mouse enter", () => {
    render(
      <Tooltip content="Tooltip Content">
        <button>Hover me</button>
      </Tooltip>,
    );

    const button = screen.getByText("Hover me");

    fireEvent.mouseEnter(button);

    expect(screen.getByRole("tooltip")).toHaveStyle({
      opacity: "1",
    });
  });

  it("hides tooltip on mouse leave", () => {
    render(
      <Tooltip content="Tooltip Content">
        <button>Hover me</button>
      </Tooltip>,
    );

    const button = screen.getByText("Hover me");

    fireEvent.mouseEnter(button);
    fireEvent.mouseLeave(button);

    expect(screen.getByRole("tooltip")).toHaveStyle({
      opacity: "0",
    });
  });

  it("supports bottom placement", () => {
    render(
      <Tooltip placement="bottom" content="Bottom Tooltip">
        <button>Hover</button>
      </Tooltip>,
    );

    expect(screen.getByText("Hover")).toBeInTheDocument();
  });

  it("supports left placement", () => {
    render(
      <Tooltip placement="left" content="Left Tooltip">
        <button>Hover</button>
      </Tooltip>,
    );

    expect(screen.getByText("Hover")).toBeInTheDocument();
  });

  it("does not render tooltip when disabled", () => {
    render(
      <Tooltip disabled content="Hidden">
        <button>Hover</button>
      </Tooltip>,
    );

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});
