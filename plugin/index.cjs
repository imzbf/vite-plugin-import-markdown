module.exports = () => {
  return {
    name: 'vite-plugin-import-markdown',
    enforce: 'pre',
    transform(code, id) {
      if (/\.md$/.test(id)) {
        return {
          code: `export default ${JSON.stringify(code)};`,
          map: null,
        };
      } else {
        return null;
      }
    },
  };
};
