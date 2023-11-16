const {override} = require('customize-cra');
const {aliasDangerous} = require("react-app-rewire-alias/src/aliasDangerous");
const {configPaths} = require("react-app-rewire-alias");

module.exports = {
    webpack: override(
      aliasDangerous(configPaths('./tsconfig.paths.json'))
    ),
}