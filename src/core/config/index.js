const defaultConfig = require("./default");
const localConfig = require("./local");

const config = {
  local: {
    ...defaultConfig,
    ...localConfig,
  },
};

const appEnv = process.env.REACT_APP_ENV;

module.exports = config[appEnv];
