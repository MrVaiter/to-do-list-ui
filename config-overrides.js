module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: false,
    os: false,
    crypto: false,
    stream: false,
    buffer: false,
    vm: false
  };
  return config;
};
