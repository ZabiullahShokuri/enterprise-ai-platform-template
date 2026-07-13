import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

import base from "./base.mjs";

export default [
  ...base,

  {
    plugins: {
      react,
      "react-hooks": reactHooks,
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
