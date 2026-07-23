import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders children", () => {
    render(<Alert>Alert Message</Alert>);

    expect(screen.getByText("Alert Message")).toBeInTheDocument();
  });

  it("renders title", () => {
    render(<Alert title="Notice">Content</Alert>);

    expect(screen.getByText("Notice")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders success variant", () => {
    render(<Alert variant="success">Success</Alert>);

    expect(screen.getByText("Success")).toBeInTheDocument();
  });

  it("renders warning variant", () => {
    render(<Alert variant="warning">Warning</Alert>);

    expect(screen.getByText("Warning")).toBeInTheDocument();
  });

  it("renders danger variant", () => {
    render(<Alert variant="danger">Danger</Alert>);

    expect(screen.getByText("Danger")).toBeInTheDocument();
  });

  it("renders info variant", () => {
    render(<Alert variant="info">Info</Alert>);

    expect(screen.getByText("Info")).toBeInTheDocument();
  });
});
