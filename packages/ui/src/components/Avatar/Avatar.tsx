import { forwardRef } from "react";

import { getAvatarStyles } from "./Avatar.styles";
import type { AvatarProps } from "./Avatar.types";

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, name, size = "md", ...props }, ref) => {
    const styles = getAvatarStyles({
      size,
    });

    const initials = name
      ?.trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join("");

    return (
      <div ref={ref} style={styles.avatarStyle} {...props}>
        {src ? (
          <img
            src={src}
            alt={alt ?? name ?? "Avatar"}
            style={styles.imageStyle}
          />
        ) : (
          (initials ?? "?")
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";
