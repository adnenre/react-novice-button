// vite.config.js
import reactRefresh from "@vitejs/plugin-react-refresh";

import dts from "vite-plugin-dts";

export default {
  plugins: [
    reactRefresh(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: `index`,
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use when accessing the exports
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
};
