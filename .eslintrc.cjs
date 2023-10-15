module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  },
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module'
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': [
      'warn',
      {
        parser: 'typescript'
      }
    ]
  }
};
