import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Tabs } from "./Tabs";

describe("Tabs", () => {
  const items = [
    {
      id: "general",
      label: "General",
      content: <div>General Content</div>,
    },
    {
      id: "security",
      label: "Security",
      content: <div>Security Content</div>,
    },
    {
      id: "disabled",
      label: "Disabled",
      content: <div>Disabled Content</div>,
      disabled: true,
    },
  ];

  it("renders default tab", () => {
    render(<Tabs items={items} />);

    expect(screen.getByText("General Content")).toBeInTheDocument();
  });

  it("changes active tab", () => {
    render(<Tabs items={items} />);

    fireEvent.click(screen.getByRole("tab", { name: "Security" }));

    expect(screen.getByText("Security Content")).toBeInTheDocument();
  });

  it("calls onChange", () => {
    const onChange = vi.fn();

    render(<Tabs items={items} onChange={onChange} />);

    fireEvent.click(screen.getByRole("tab", { name: "Security" }));

    expect(onChange).toHaveBeenCalledWith("security");
  });

  it("does not activate disabled tab", () => {
    render(<Tabs items={items} />);

    fireEvent.click(screen.getByRole("tab", { name: "Disabled" }));

    expect(screen.getByText("General Content")).toBeInTheDocument();
  });

  it("uses defaultTab", () => {
    render(<Tabs items={items} defaultTab="security" />);

    expect(screen.getByText("Security Content")).toBeInTheDocument();
  });

  it("renders all tabs", () => {
    render(<Tabs items={items} />);

    expect(screen.getByRole("tab", { name: "General" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Security" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Disabled" })).toBeInTheDocument();
  });
});
