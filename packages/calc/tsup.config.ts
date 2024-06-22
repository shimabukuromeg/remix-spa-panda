import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  target: "es2020",
  format: ["cjs", "esm"],
  clean: true,
  dts: true,
  splitting: true,
  treeshake: true,
});
