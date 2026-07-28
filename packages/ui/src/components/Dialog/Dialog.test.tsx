import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Dialog,
  DialogTrigger,
} from ".";

describe("Dialog", () => {
  it("renders trigger", () => {
    render(
      <Dialog>
        <DialogTrigger>
          Open Dialog
        </DialogTrigger>
      </Dialog>,
    );

    expect(
      screen.getByRole("button"),
    ).toBeInTheDocument();
  });
});


