// Thanks to https://medium.com/@netczuk/your-last-eslint-config-9e35bace2f99

module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  env: {
    es6: true
  },

  rules: {
    'prettier/prettier': [
      // customizing prettier rules (unfortunately not many of them are customizable)
      'error',
      {
        singleQuote: true,
        trailingComma: 'none'
      }
    ],

    eqeqeq: ['error', 'always'],

    semi: ['error', 'always']
  }
};
