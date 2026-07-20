import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Save</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Save");
  });

  it("renders loading state", () => {
    render(<Button loading>Save</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Loading...");
  });

  it("is disabled while loading", () => {
    render(<Button loading>Save</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Save</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("fires click event", () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Click</Button>);

    fireEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
