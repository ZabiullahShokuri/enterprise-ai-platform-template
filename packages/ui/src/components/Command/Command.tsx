import { forwardRef, useCallback, useMemo, useRef, useState } from "react";

import { useControllableState } from "../../foundation";

import { CommandProvider } from "./Command.context";
import { getCommandStyles } from "./Command.styles";

import type { CommandContextValue, CommandProps } from "./Command.types";

export const Command = forwardRef<HTMLDivElement, CommandProps>(
  (
    {
      children,
      query,
      defaultQuery = "",
      onQueryChange,
      value,
      defaultValue,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const styles = getCommandStyles();

    const itemsRef = useRef<string[]>([]);
    const itemSelectHandlersRef = useRef<
      Record<string, ((value: string) => void) | undefined>
    >({});
    const [, forceRender] = useState(0);

    const { value: currentQuery, setValue: setQuery } =
      useControllableState<string>({
        value: query,
        defaultValue: defaultQuery,
        onChange: onQueryChange,
      });

    const { value: selectedValue, setValue: setSelectedValue } =
      useControllableState<string | undefined>({
        value,
        defaultValue,
        onChange: onValueChange,
      });

    const [activeIndex, setActiveIndex] = useState(-1);

    const registerItem = useCallback(
      (itemValue: string, onSelect?: (value: string) => void) => {
        const existingIndex = itemsRef.current.indexOf(itemValue);

        if (existingIndex !== -1) {
          itemSelectHandlersRef.current[itemValue] = onSelect;
          return existingIndex;
        }

        itemsRef.current.push(itemValue);
        itemSelectHandlersRef.current[itemValue] = onSelect;

        forceRender((current) => current + 1);

        return itemsRef.current.length - 1;
      },
      [],
    );

    const unregisterItem = useCallback((itemValue: string) => {
      const index = itemsRef.current.indexOf(itemValue);

      if (index === -1) {
        return;
      }

      delete itemSelectHandlersRef.current[itemValue];

      itemsRef.current.splice(index, 1);

      forceRender((current) => current + 1);
      setActiveIndex((current) =>
        Math.max(0, Math.min(current, itemsRef.current.length - 1)),
      );
    }, []);

    const normalizedQuery = currentQuery.trim().toLowerCase();

    const isItemVisible = useCallback(
      (itemValue: string) => {
        if (!normalizedQuery) {
          return true;
        }

        return itemValue.toLowerCase().includes(normalizedQuery);
      },
      [normalizedQuery],
    );

    const visibleItems = useMemo(
      () => itemsRef.current.filter(isItemVisible),
      [isItemVisible],
    );

    const selectItem = useCallback(
      (itemValue: string) => {
        setSelectedValue(itemValue);
        itemSelectHandlersRef.current[itemValue]?.(itemValue);
      },
      [setSelectedValue],
    );

    const contextValue: CommandContextValue = {
      query: currentQuery,

      setQuery,

      value: selectedValue ?? null,

      setValue: (nextValue) => {
        setSelectedValue(nextValue ?? undefined);
      },

      items: itemsRef.current,

      activeIndex,
      setActiveIndex,

      registerItem,

      unregisterItem,

      isItemVisible,

      selectItem,

      visibleItemCount: visibleItems.length,
    };

    return (
      <CommandProvider value={contextValue}>
        <div ref={ref} className={styles.root} {...props}>
          {children}
        </div>
      </CommandProvider>
    );
  },
);

Command.displayName = "Command";
