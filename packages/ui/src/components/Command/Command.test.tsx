import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
  CommandSeparator,
} from ".";

describe("Command", () => {
  it("renders command input and items", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />

        <CommandList>
          <CommandItem value="Open">Open</CommandItem>

          <CommandItem value="Save">Save</CommandItem>
        </CommandList>
      </Command>,
    );

    expect(screen.getByRole("searchbox")).toBeInTheDocument();

    expect(
      screen.getByRole("option", {
        name: "Open",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("option", {
        name: "Save",
      }),
    ).toBeInTheDocument();
  });

  it("filters items by query", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />

        <CommandList>
          <CommandItem value="Open">Open</CommandItem>

          <CommandItem value="Save">Save</CommandItem>
        </CommandList>
      </Command>,
    );

    fireEvent.change(screen.getByRole("searchbox"), {
      target: {
        value: "op",
      },
    });

    expect(
      screen.getByRole("option", {
        name: "Open",
      }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("option", {
        name: "Save",
      }),
    ).not.toBeInTheDocument();
  });

  it("shows empty state when no item matches", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />

        <CommandList>
          <CommandEmpty>No results</CommandEmpty>

          <CommandItem value="Open">Open</CommandItem>
        </CommandList>
      </Command>,
    );

    fireEvent.change(screen.getByRole("searchbox"), {
      target: {
        value: "xyz",
      },
    });

    expect(screen.getByRole("status")).toHaveTextContent("No results");
  });

  it("supports keyboard navigation", () => {
    const onSelect = vi.fn();

    render(
      <Command>
        <CommandInput />

        <CommandList>
          <CommandItem value="Open" onSelect={onSelect}>
            Open
          </CommandItem>

          <CommandItem value="Save" onSelect={onSelect}>
            Save
          </CommandItem>

          <CommandItem value="Delete" onSelect={onSelect}>
            Delete
          </CommandItem>
        </CommandList>
      </Command>,
    );

    const input = screen.getByRole("searchbox");

    fireEvent.keyDown(input, {
      key: "ArrowDown",
    });

    expect(
      screen.getByRole("option", {
        name: "Open",
      }),
    ).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(input, {
      key: "ArrowDown",
    });

    expect(
      screen.getByRole("option", {
        name: "Save",
      }),
    ).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(input, {
      key: "Enter",
    });

    expect(onSelect).toHaveBeenCalledWith("Save");
  });
});
