import { defineConfig } from 'astro/config';

export default defineConfig({
  // Use 'static' output (which is usually the default for blogs)
  output: 'static',

  // This is the CRUCIAL part for GitHub Pages.
  // It should be the name of your repository.
  // If your repo is named 'username.github.io', this can be left blank or set to '/'.
  // If your repo is a project page (e.g., 'blog-repo'), set it to '/blog-repo/'
  base: '/', // Use '/' for the special 'username.github.io' repository.
  
  // If you used a Project Page repository (e.g., 'my-blog-project'):
  // base: '/my-blog-project/',
});

// @ts-check
//import { defineConfig } from "astro/config";
//import mdx from "@astrojs/mdx";
//import sitemap from "@astrojs/sitemap";

//import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
//export default defineConfig({
  //site: "https://example.com",
  //integrations: [mdx(), sitemap()],
  //adapter: cloudflare({
    //platformProxy: {
      //enabled: true,
    //},
  //}),
//});
