module.exports = {
  "env": {
    "es6": true,
    "node": true,
  },
  "extends": "airbnb-base",
  "parserOptions": {
    "sourceType": "module"
  },
  "globals": {
    __: 0,
  },
  "rules": {
    "max-len": [
      "error",
      { "code": 160 }
    ],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-multi-assign": [0],
    "no-console": "off",
    "no-underscore-dangle": [
      "error",
      { "arrow": ["__"] }
    ],
  }
};