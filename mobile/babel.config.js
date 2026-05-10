module.exports = (api) => {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "react" }]],
    plugins: [["react-native-unistyles/plugin", { root: "src" }]],
  };
};
