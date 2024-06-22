import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: "v8",
      all: true,
      reporter: ["text", "json", "html"],
    },
  },
  plugins: [tsconfigPaths()],
});
