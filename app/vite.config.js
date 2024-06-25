import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages expects an index.html in the root directory
  // so just run npm build before pushing to GitHub and this will rebuild our assets to the root
  build: {
    outDir: '..', //making it root folder instead of dist so that gh pages can access assets + index.html file to render build
    emptyOutDir: false, //ensuring that root folder is not cleared when rebuilding
  },
  base: '/random-users-app/', //needed for github pages just put the repo name here
});