import { forwardRef } from "react";

import { useCommandContext } from "./Command.context";

import type { CommandInputProps } from "./Command.types";

export const CommandInput = forwardRef<HTMLInputElement, CommandInputProps>(
  ({ onChange, onKeyDown, ...props }, ref) => {
    const {
      query,
      setQuery,
      items,
      activeIndex,
      setActiveIndex,
      selectItem,
      isItemVisible,
    } = useCommandContext();

    const getVisibleIndexes = () => {
      return items.reduce<number[]>((indexes, itemValue, index) => {
        if (isItemVisible(itemValue)) {
          indexes.push(index);
        }

        return indexes;
      }, []);
    };

    const moveActiveItem = (direction: 1 | -1) => {
      const visibleIndexes = getVisibleIndexes();

      if (visibleIndexes.length === 0) {
        setActiveIndex(-1);
        return;
      }

      const currentPosition = visibleIndexes.indexOf(activeIndex);

      let nextPosition: number;

      if (currentPosition === -1) {
        nextPosition = direction === 1 ? 0 : visibleIndexes.length - 1;
      } else {
        nextPosition = currentPosition + direction;

        if (nextPosition < 0) {
          nextPosition = visibleIndexes.length - 1;
        }

        if (nextPosition >= visibleIndexes.length) {
          nextPosition = 0;
        }
      }

      setActiveIndex(visibleIndexes[nextPosition]);
    };

    return (
      <input
        {...props}
        ref={ref}
        value={query}
        role="searchbox"
        onChange={(event) => {
          onChange?.(event);
          setQuery(event.target.value);
        }}
        onKeyDown={(event) => {
          onKeyDown?.(event);

          if (event.defaultPrevented) {
            return;
          }

          switch (event.key) {
            case "ArrowDown":
              event.preventDefault();
              moveActiveItem(1);
              break;

            case "ArrowUp":
              event.preventDefault();
              moveActiveItem(-1);
              break;

            case "Home": {
              const visibleIndexes = getVisibleIndexes();

              if (visibleIndexes.length > 0) {
                event.preventDefault();
                setActiveIndex(visibleIndexes[0]);
              }

              break;
            }

            case "End": {
              const visibleIndexes = getVisibleIndexes();

              if (visibleIndexes.length > 0) {
                event.preventDefault();
                setActiveIndex(visibleIndexes[visibleIndexes.length - 1]);
              }

              break;
            }

            case "Enter": {
              const activeItem = items[activeIndex];

              if (activeItem && isItemVisible(activeItem)) {
                event.preventDefault();
                selectItem(activeItem);
              }

              break;
            }

            default:
              break;
          }
        }}
      />
    );
  },
);

CommandInput.displayName = "CommandInput";
