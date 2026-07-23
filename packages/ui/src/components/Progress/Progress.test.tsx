import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Progress } from "./Progress";

describe("Progress", () => {
  it("renders progress", () => {
    render(<Progress value={50} />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders percentage", () => {
    render(<Progress value={75} showValue />);

    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("renders primary variant", () => {
    render(<Progress value={25} variant="primary" />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders success variant", () => {
    render(<Progress value={25} variant="success" />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders warning variant", () => {
    render(<Progress value={25} variant="warning" />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders danger variant", () => {
    render(<Progress value={25} variant="danger" />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
