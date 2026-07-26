import { useState } from "react";

import { getTabsStyles } from "./Tabs.styles";
import type { TabsProps } from "./Tabs.types";

export function Tabs({ items, defaultTab, onChange }: TabsProps) {
  const styles = getTabsStyles();

  const initialTab =
    defaultTab ?? items.find((item) => !item.disabled)?.id ?? "";

  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (id: string, disabled?: boolean) => {
    if (disabled) return;

    setActiveTab(id);

    onChange?.(id);
  };

  const currentTab = items.find((item) => item.id === activeTab);

  return (
    <div style={styles.containerStyle}>
      <div role="tablist" style={styles.listStyle}>
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            type="button"
            aria-selected={activeTab === item.id}
            disabled={item.disabled}
            onClick={() => handleTabChange(item.id, item.disabled)}
            style={{
              ...styles.tabStyle,
              ...(activeTab === item.id ? styles.activeTabStyle : {}),
              ...(item.disabled ? styles.disabledTabStyle : {}),
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" style={styles.panelStyle}>
        {currentTab?.content}
      </div>
    </div>
  );
}
