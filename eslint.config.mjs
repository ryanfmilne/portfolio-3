import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = [
  {
    ignores: [
      '.eslintrc.cjs',
      '.next/**',
      'dist/**',
      'node_modules/**',
      'next-env.d.ts',
      'tsconfig.json',
      'next.config.mjs'
    ]
  },
  ...nextVitals,
  {
    rules: {
      'react-hooks/incompatible-library': 'off'
    }
  }
]

export default eslintConfig
