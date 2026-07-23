import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>Active</Badge>);

    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders primary variant", () => {
    render(<Badge variant="primary">Primary</Badge>);

    expect(screen.getByText("Primary")).toBeInTheDocument();
  });

  it("renders success variant", () => {
    render(<Badge variant="success">Success</Badge>);

    expect(screen.getByText("Success")).toBeInTheDocument();
  });

  it("renders warning variant", () => {
    render(<Badge variant="warning">Warning</Badge>);

    expect(screen.getByText("Warning")).toBeInTheDocument();
  });

  it("renders danger variant", () => {
    render(<Badge variant="danger">Danger</Badge>);

    expect(screen.getByText("Danger")).toBeInTheDocument();
  });

  it("renders secondary variant", () => {
    render(<Badge variant="secondary">Secondary</Badge>);

    expect(screen.getByText("Secondary")).toBeInTheDocument();
  });
});
