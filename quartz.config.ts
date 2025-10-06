import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Lucent Docs",
    pageTitleSuffix: " | Lucent Docs",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
      host: 'https://plausible.mia.cx'
    },
    locale: "en-US",
    baseUrl: "lucent.mia.cx",
    ignorePatterns: ["private", "Templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: "Archivo Black",
        header: "Archivo",
        body: "Funnel Sans",
        code: "Google Sans Code",
      },
      colors: {
        lightMode: {
          light: "#eff1f5", // catppuccin base
          lightgray: "#e6e9ef", // catppuccin mantle
          gray: "#ccd0da", // catppuccin surface0
          darkgray: "#4c4f69", // catppuccin text
          dark: "#4c4f69", // catppuccin text
          secondary: "#1e66f5", // catppuccin blue
          tertiary: "#04a5e5", // catppuccin sky
          highlight: "rgba(124, 127, 147, 0.2)", // catppuccin overlay2
          textHighlight: "rgba(30, 102, 245, 0.2)", // catppuccin blue
        },
        darkMode: {
          light: "#1e1e2e", // catppuccin base
          lightgray: "#181825", // catppuccin mantle
          gray: "#313244", // catppuccin surface0
          darkgray: "#cdd6f4", // catppuccin text
          dark: "#cdd6f4", // catppuccin text
          secondary: "#89b4fa", // catppuccin blue
          tertiary: "#89dceb", // catppuccin sky
          highlight: "rgba(147, 153, 178, 0.2)", // catppuccin overlay2
          textHighlight: "rgba(137, 180, 250, 0.2)", // catppuccin blue
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
