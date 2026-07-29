import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Menubar, MenubarTrigger } from ".";

describe("Menubar", () => {
  it("renders trigger", () => {
    render(
      <Menubar>
        <MenubarTrigger>File</MenubarTrigger>
      </Menubar>,
    );

    expect(screen.getByRole("menuitem")).toBeInTheDocument();
  });
});
