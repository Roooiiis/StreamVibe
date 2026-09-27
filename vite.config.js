import { defineConfig, pluginSsg, pluginImage, pluginSvg, pluginSprite, pluginBundle } from "minista";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ command, isSsrBuild }) => {
  const isDev = command === "serve"
  const isSsr = command === "build" && (isSsrBuild ?? false)
  const isBuild = command === "build" && !(isSsrBuild ?? false)
  return {
    plugins: [
      pluginSsg(),
      pluginSsg({
        layout: "/src/layouts/index.{tsx,jsx}",
        src: ["/src/pages/**/*.{tsx,jsx,mdx,md}"],
        srcBases: ["/src/pages"],
      }),
      pluginImage({
        optimize: {
          remoteName: "remote-[index]",
          outName: "[name]-[width]x[height]",
          layout: "constrained"
        }
      }),
      pluginSvg({ config: { plugins: [] } }),
      pluginSprite({
        config: {
          plugins: [
            {
              name: "removeAttrs",
              params: {
                attrs: ["fill", "stroke"],
              },
            },
          ],
        },
      }),
      pluginBundle({ outName: "bundle" })
    ],
    build: { outDir: isBuild ? "dist" : undefined },
    publicDir: "public",
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    }
  }
})
