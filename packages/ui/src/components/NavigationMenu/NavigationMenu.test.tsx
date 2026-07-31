import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from ".";

describe("NavigationMenu", () => {
  it("renders navigation links", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem value="home">
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    expect(
      screen.getByRole("link", {
        name: "Home",
      }),
    ).toBeInTheDocument();
  });

  it("opens content when its trigger is clicked", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem value="products">
            <NavigationMenuTrigger value="products">
              Products
            </NavigationMenuTrigger>

            <NavigationMenuContent value="products">
              <NavigationMenuLink href="/products">
                Products Overview
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    expect(screen.queryByRole("region")).not.toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Products",
      }),
    );

    expect(screen.getByRole("region")).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Products Overview",
      }),
    ).toBeInTheDocument();
  });

  it("closes active content when Escape is pressed", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem value="products">
            <NavigationMenuTrigger value="products">
              Products
            </NavigationMenuTrigger>

            <NavigationMenuContent value="products">
              <NavigationMenuLink href="/products">
                Products Overview
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Products",
      }),
    );

    expect(screen.getByRole("region")).toBeInTheDocument();

    fireEvent.keyDown(document, {
      key: "Escape",
    });

    expect(screen.queryByRole("region")).not.toBeInTheDocument();
  });

  it("supports controlled value changes", () => {
    const onValueChange = vi.fn();

    render(
      <NavigationMenu onValueChange={onValueChange}>
        <NavigationMenuList>
          <NavigationMenuItem value="products">
            <NavigationMenuTrigger value="products">
              Products
            </NavigationMenuTrigger>

            <NavigationMenuContent value="products">
              Products Overview
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Products",
      }),
    );

    expect(onValueChange).toHaveBeenCalledWith("products");
  });

  it("supports active navigation links", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem value="home">
            <NavigationMenuLink href="/" active>
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    const link = screen.getByRole("link", {
      name: "Home",
    });

    expect(link).toHaveAttribute("aria-current", "page");
    expect(link).toHaveAttribute("data-active", "true");
  });

  it("switches between navigation items", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem value="products">
            <NavigationMenuTrigger value="products">
              Products
            </NavigationMenuTrigger>

            <NavigationMenuContent value="products">
              <NavigationMenuLink href="/products">
                Products Overview
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem value="solutions">
            <NavigationMenuTrigger value="solutions">
              Solutions
            </NavigationMenuTrigger>

            <NavigationMenuContent value="solutions">
              <NavigationMenuLink href="/solutions">
                Solutions Overview
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Products",
      }),
    );

    expect(
      screen.getByRole("link", {
        name: "Products Overview",
      }),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Solutions",
      }),
    );

    expect(
      screen.queryByRole("link", {
        name: "Products Overview",
      }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Solutions Overview",
      }),
    ).toBeInTheDocument();
  });
});
