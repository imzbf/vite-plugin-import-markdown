# @vavt/vite-plugin-import-markdown

Import markdown as a module.

## Usage

- Install

  ```shell
  yarn add @vavt/vite-plugin-import-markdown
  ```

- Config

  `vite.config.ts`

  ```ts
  import { defineConfig } from 'vite';
  import markdown from '@vavt/vite-plugin-import-markdown';

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [markdown()],
  });
  ```

  `vite-env.d.ts`

  ```ts
  declare module '*.md';
  ```

  `file.ts`

  ```ts
  import mdText from './text.md';

  console.log('Source Text: ', mdText);
  ```
