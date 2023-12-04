// vite.config.ts
import { defineConfig, loadEnv } from "file:///Users/william.chuang/Downloads/Company/III/Project/Vue3_template/202311_Vue3.3.4/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/william.chuang/Downloads/Company/III/Project/Vue3_template/202311_Vue3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import fs from "fs";
import AutoImport from "file:///Users/william.chuang/Downloads/Company/III/Project/Vue3_template/202311_Vue3.3.4/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/william.chuang/Downloads/Company/III/Project/Vue3_template/202311_Vue3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///Users/william.chuang/Downloads/Company/III/Project/Vue3_template/202311_Vue3.3.4/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_dirname = "/Users/william.chuang/Downloads/Company/III/Project/Vue3_template/202311_Vue3.3.4";
var vite_config_default = ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    base: `./`,
    //mkcert(),
    plugins: [
      vue(),
      stripDevCSS(env),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    server: {
      https: env.VITE_ENV === "HTTPS" ? true : false
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
    },
    build: {
      rollupOptions: {
        external: new RegExp("/mock/.*")
      }
      // ...etc.
    }
    // async configureServer(server) {
    //   const key = await fetch("/src/assets/key/localhost-key.pem").then((res) =>
    //     res.text()
    //   );
    //   const cert = await fetch("/src/assets/key/localhost.pem").then((res) =>
    //     res.text()
    //   );
    //   server.httpsOptions = { key, cert };
    // },
  });
};
function stripDevCSS(env) {
  return {
    name: "strip-dev-css",
    resolveId(source) {
      return source === "virtual-module" ? source : null;
    },
    renderStart(outputOptions, inputOptions) {
      const outDir = outputOptions.dir;
      const cssDir = path.resolve(outDir, "mock");
      console.log("????", outDir, cssDir);
      if (env.VITE_ENV !== "MOCK") {
        fs.rmdir(cssDir, { recursive: true }, () => console.log(`Deleted ${cssDir}`));
      }
    }
  };
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvd2lsbGlhbS5jaHVhbmcvRG93bmxvYWRzL0NvbXBhbnkvSUlJL1Byb2plY3QvVnVlM190ZW1wbGF0ZS8yMDIzMTFfVnVlMy4zLjRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy93aWxsaWFtLmNodWFuZy9Eb3dubG9hZHMvQ29tcGFueS9JSUkvUHJvamVjdC9WdWUzX3RlbXBsYXRlLzIwMjMxMV9WdWUzLjMuNC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvd2lsbGlhbS5jaHVhbmcvRG93bmxvYWRzL0NvbXBhbnkvSUlJL1Byb2plY3QvVnVlM190ZW1wbGF0ZS8yMDIzMTFfVnVlMy4zLjQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuLy8gaW1wb3J0IG1rY2VydCBmcm9tICd2aXRlLXBsdWdpbi1ta2NlcnQnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuLy8gZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbi8vICAgICBwbHVnaW5zOiBbdnVlKCldXG4vLyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9KSA9PiB7XG4gICAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKTsgLy8gXHU1MkEwXHU4RjdEXHU1RjUzXHU1MjREXHU3M0FGXHU1ODgzXHU3Njg0XHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXG4gICAgcmV0dXJuIGRlZmluZUNvbmZpZyh7XG4gICAgICAgIGJhc2U6IGAuL2AsXG4gICAgICAgIC8vbWtjZXJ0KCksXG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgIHZ1ZSgpLFxuICAgICAgICAgICAgc3RyaXBEZXZDU1MoZW52KSxcbiAgICAgICAgICAgIEF1dG9JbXBvcnQoe1xuICAgICAgICAgICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgQ29tcG9uZW50cyh7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgc2VydmVyOiB7XG4gICAgICAgICAgICBodHRwczogZW52LlZJVEVfRU5WID09PSAnSFRUUFMnID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGFsaWFzOiBbeyBmaW5kOiAnQCcsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJykgfV1cbiAgICAgICAgfSxcbiAgICAgICAgYnVpbGQ6IHtcbiAgICAgICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBleHRlcm5hbDogbmV3IFJlZ0V4cCgnL21vY2svLionKVxuICAgICAgICAgICAgfSAvLyAuLi5ldGMuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3luYyBjb25maWd1cmVTZXJ2ZXIoc2VydmVyKSB7XG4gICAgICAgIC8vICAgY29uc3Qga2V5ID0gYXdhaXQgZmV0Y2goXCIvc3JjL2Fzc2V0cy9rZXkvbG9jYWxob3N0LWtleS5wZW1cIikudGhlbigocmVzKSA9PlxuICAgICAgICAvLyAgICAgcmVzLnRleHQoKVxuICAgICAgICAvLyAgICk7XG4gICAgICAgIC8vICAgY29uc3QgY2VydCA9IGF3YWl0IGZldGNoKFwiL3NyYy9hc3NldHMva2V5L2xvY2FsaG9zdC5wZW1cIikudGhlbigocmVzKSA9PlxuICAgICAgICAvLyAgICAgcmVzLnRleHQoKVxuICAgICAgICAvLyAgICk7XG4gICAgICAgIC8vICAgc2VydmVyLmh0dHBzT3B0aW9ucyA9IHsga2V5LCBjZXJ0IH07XG4gICAgICAgIC8vIH0sXG4gICAgfSk7IC8vZW5kOiBkZWZpbmVDb25maWdcbn07IC8vZW5kOiBkZWZhdWx0XG5cbmZ1bmN0aW9uIHN0cmlwRGV2Q1NTKGVudikge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdzdHJpcC1kZXYtY3NzJyxcbiAgICAgICAgcmVzb2x2ZUlkKHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSA9PT0gJ3ZpcnR1YWwtbW9kdWxlJyA/IHNvdXJjZSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlclN0YXJ0KG91dHB1dE9wdGlvbnMsIGlucHV0T3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3Qgb3V0RGlyID0gb3V0cHV0T3B0aW9ucy5kaXI7XG4gICAgICAgICAgICBjb25zdCBjc3NEaXIgPSBwYXRoLnJlc29sdmUob3V0RGlyLCAnbW9jaycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJz8/Pz8nLCBvdXREaXIsIGNzc0Rpcik7XG4gICAgICAgICAgICBpZiAoZW52LlZJVEVfRU5WICE9PSAnTU9DSycpIHtcbiAgICAgICAgICAgICAgICBmcy5ybWRpcihjc3NEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0sICgpID0+IGNvbnNvbGUubG9nKGBEZWxldGVkICR7Y3NzRGlyfWApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFhLFNBQVMsY0FBYyxlQUFlO0FBQzNjLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFFakIsT0FBTyxRQUFRO0FBRWYsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFScEMsSUFBTSxtQ0FBbUM7QUFlekMsSUFBTyxzQkFBUSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3pCLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFDdkMsU0FBTyxhQUFhO0FBQUEsSUFDaEIsTUFBTTtBQUFBO0FBQUEsSUFFTixTQUFTO0FBQUEsTUFDTCxJQUFJO0FBQUEsTUFDSixZQUFZLEdBQUc7QUFBQSxNQUNmLFdBQVc7QUFBQSxRQUNQLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ3JDLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNQLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ3JDLENBQUM7QUFBQSxJQUNMO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDSixPQUFPLElBQUksYUFBYSxVQUFVLE9BQU87QUFBQSxJQUM3QztBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ0wsT0FBTyxDQUFDLEVBQUUsTUFBTSxLQUFLLGFBQWEsS0FBSyxRQUFRLGtDQUFXLEtBQUssRUFBRSxDQUFDO0FBQUEsSUFDdEU7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNILGVBQWU7QUFBQSxRQUNYLFVBQVUsSUFBSSxPQUFPLFVBQVU7QUFBQSxNQUNuQztBQUFBO0FBQUEsSUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBV0osQ0FBQztBQUNMO0FBRUEsU0FBUyxZQUFZLEtBQUs7QUFDdEIsU0FBTztBQUFBLElBQ0gsTUFBTTtBQUFBLElBQ04sVUFBVSxRQUFRO0FBQ2QsYUFBTyxXQUFXLG1CQUFtQixTQUFTO0FBQUEsSUFDbEQ7QUFBQSxJQUNBLFlBQVksZUFBZSxjQUFjO0FBQ3JDLFlBQU0sU0FBUyxjQUFjO0FBQzdCLFlBQU0sU0FBUyxLQUFLLFFBQVEsUUFBUSxNQUFNO0FBQzFDLGNBQVEsSUFBSSxRQUFRLFFBQVEsTUFBTTtBQUNsQyxVQUFJLElBQUksYUFBYSxRQUFRO0FBQ3pCLFdBQUcsTUFBTSxRQUFRLEVBQUUsV0FBVyxLQUFLLEdBQUcsTUFBTSxRQUFRLElBQUksV0FBVyxNQUFNLEVBQUUsQ0FBQztBQUFBLE1BQ2hGO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSjsiLAogICJuYW1lcyI6IFtdCn0K
