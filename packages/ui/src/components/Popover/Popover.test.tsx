import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Popover } from "./Popover";
import { PopoverTrigger } from "./PopoverTrigger";
import { PopoverContent } from "./PopoverContent";

describe("Popover", () => {
  it("renders trigger", () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("opens when trigger is clicked", () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );

    expect(screen.queryByText("Content")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("closes when clicking outside", () => {
    render(
      <>
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>

        <div data-testid="outside">Outside</div>
      </>,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByText("Content")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId("outside"));

    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });
});
