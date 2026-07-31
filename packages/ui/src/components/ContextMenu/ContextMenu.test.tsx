import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from ".";

describe("ContextMenu", () => {
  it("renders trigger content", () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>Target</ContextMenuTrigger>
      </ContextMenu>,
    );

    expect(screen.getByText("Target")).toBeInTheDocument();
  });

  it("opens on context menu event", () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>Target</ContextMenuTrigger>

        <ContextMenuContent>
          <ContextMenuItem>Rename</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByText("Target"));

    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("closes on escape", () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>Target</ContextMenuTrigger>

        <ContextMenuContent>
          <ContextMenuItem>Rename</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByText("Target"));

    fireEvent.keyDown(document, {
      key: "Escape",
    });

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("selects an item and closes the menu", () => {
    const onSelect = vi.fn();

    render(
      <ContextMenu>
        <ContextMenuTrigger>Target</ContextMenuTrigger>

        <ContextMenuContent>
          <ContextMenuItem onSelect={onSelect}>Rename</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByText("Target"));

    fireEvent.click(
      screen.getByRole("menuitem", {
        name: "Rename",
      }),
    );

    expect(onSelect).toHaveBeenCalledTimes(1);

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("renders label and separator", () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>Target</ContextMenuTrigger>

        <ContextMenuContent>
          <ContextMenuLabel>Actions</ContextMenuLabel>

          <ContextMenuSeparator />

          <ContextMenuItem>Rename</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );

    fireEvent.contextMenu(screen.getByText("Target"));

    expect(screen.getByText("Actions")).toBeInTheDocument();

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});
