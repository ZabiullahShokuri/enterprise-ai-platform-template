import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Modal } from "./Modal";

describe("Modal", () => {
  const onClose = vi.fn();

  it("renders when open", () => {
    render(
      <Modal open title="Test Modal" onClose={onClose}>
        Hello World
      </Modal>,
    );

    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(
      <Modal open={false} title="Hidden" onClose={onClose}>
        Hidden Content
      </Modal>,
    );

    expect(screen.queryByText("Hidden Content")).not.toBeInTheDocument();
  });

  it("calls onClose when clicking close button", () => {
    onClose.mockClear();

    render(
      <Modal open title="Modal" onClose={onClose}>
        Content
      </Modal>,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose on overlay click", () => {
    onClose.mockClear();

    render(
      <Modal open title="Modal" onClose={onClose}>
        Content
      </Modal>,
    );

    fireEvent.click(screen.getByRole("dialog").parentElement!);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("does not close when clicking inside modal", () => {
    onClose.mockClear();

    render(
      <Modal open title="Modal" onClose={onClose}>
        Content
      </Modal>,
    );

    fireEvent.click(screen.getByRole("dialog"));

    expect(onClose).not.toHaveBeenCalled();
  });

  it("renders footer", () => {
    render(
      <Modal
        open
        title="Modal"
        onClose={onClose}
        footer={<button>Save</button>}
      >
        Content
      </Modal>,
    );

    expect(screen.getByText("Save")).toBeInTheDocument();
  });
});
