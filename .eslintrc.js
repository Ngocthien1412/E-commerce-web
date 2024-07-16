module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    "prettier/perttier": ['error',{"engOfLine" : 'auto'}
    ],
    'no-console' : 'off',
  },
}
