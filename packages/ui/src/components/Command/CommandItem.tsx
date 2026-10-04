import { forwardRef, useEffect, useState } from "react";

import { useCommandContext } from "./Command.context";

import type { CommandItemProps } from "./Command.types";

export const CommandItem = forwardRef<HTMLDivElement, CommandItemProps>(
  (
    {
      children,
      value,
      disabled = false,
      onClick,
      onSelect,
      onMouseEnter,
      onKeyDown,
      ...props
    },
    ref,
  ) => {
    const {
      activeIndex,
      setActiveIndex,
      registerItem,
      unregisterItem,
      isItemVisible,
      selectItem,
    } = useCommandContext();

    const [itemIndex, setItemIndex] = useState(-1);

    useEffect(() => {
      const index = registerItem(value, onSelect);

      setItemIndex(index);

      return () => {
        unregisterItem(value);
      };
    }, [registerItem, unregisterItem, value]);

    const visible = isItemVisible(value);

    if (!visible) {
      return null;
    }

    const isActive = itemIndex !== -1 && activeIndex === itemIndex;

    const handleSelect = () => {
      if (disabled) {
        return;
      }

      selectItem(value);
    };

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={isActive}
        aria-disabled={disabled}
        data-state={isActive ? "active" : "inactive"}
        tabIndex={isActive && !disabled ? 0 : -1}
        {...props}
        onMouseEnter={(event) => {
          onMouseEnter?.(event);

          if (!disabled && itemIndex !== -1) {
            setActiveIndex(itemIndex);
          }
        }}
        onKeyDown={(event) => {
          onKeyDown?.(event);

          if (event.defaultPrevented) {
            return;
          }

          if (!disabled && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            handleSelect();
          }
        }}
        onClick={(event) => {
          onClick?.(event);

          if (event.defaultPrevented) {
            return;
          }

          handleSelect();
        }}
      >
        {children}
      </div>
    );
  },
);

CommandItem.displayName = "CommandItem";
