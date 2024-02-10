module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Add for drawer
    plugins: [ 'react-native-reanimated/plugin' ]
  };
};
