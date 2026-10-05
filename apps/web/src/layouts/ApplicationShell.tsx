"use client";

import {
  Button,
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@enterprise/ui";

export function ApplicationShell() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" active>
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <main>
        <h1>Enterprise AI Platform</h1>
        <p>Application Shell is active.</p>

        <Command>
          <CommandInput
            aria-label="Command palette"
            placeholder="Search commands..."
          />

          <CommandList>
            <CommandItem value="home">Home</CommandItem>
          </CommandList>
        </Command>

        <Button>UI integration works</Button>
      </main>
    </div>
  );
}
