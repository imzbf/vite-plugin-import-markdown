export default () => {
  return {
    name: 'vite-plugin-import-markdown',
    enforce: 'pre',
    transform(code, id) {
      if (/\.md$/.test(id)) {
        return {
          code: `export default ${JSON.stringify(code)};`,
        };
      } else {
        return null;
      }
    },
  };
};
