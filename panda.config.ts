import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          paper: {
            value: "rgb(255, 252, 244)",
          },
        },
      },
    },
  },
  outdir: "src/styled-system",
});
