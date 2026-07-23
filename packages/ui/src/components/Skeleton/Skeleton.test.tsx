import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("renders skeleton", () => {
    render(<Skeleton data-testid="skeleton" />);

    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  it("renders text variant", () => {
    render(<Skeleton variant="text" data-testid="skeleton" />);

    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  it("renders rectangular variant", () => {
    render(<Skeleton variant="rectangular" data-testid="skeleton" />);

    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  it("renders circular variant", () => {
    render(<Skeleton variant="circular" data-testid="skeleton" />);

    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  it("renders custom width", () => {
    render(<Skeleton width={200} data-testid="skeleton" />);

    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  it("renders custom height", () => {
    render(<Skeleton height={40} data-testid="skeleton" />);

    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });
});
