import type { FC } from "react";

import { getDividerStyles } from "./Divider.styles";
import type { DividerProps } from "./Divider.types";

export const Divider: FC<DividerProps> = ({
  orientation = "horizontal",
  thickness = 1,
  color,
  length,
  ...props
}) => {
  const { style } = getDividerStyles({
    orientation,
    thickness,
    color,
    length,
  });

  return <hr role="separator" style={style} {...props} />;
};
