import { defineConfig } from "pontx";
import { createGracefulClientPlugin } from "@pontx/sdk/plugin";

export default defineConfig({
  outDir: "src/apis",
  origins: [{
    name: "massive",
    localPath: "./openapi.json",
  }],
  plugins: [createGracefulClientPlugin()]
});
