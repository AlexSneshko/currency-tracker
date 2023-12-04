/** @type {import('jest').Config} */
const config = {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: 'coverage',

  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['<rootDir>/__tests__/**/*(*.)@(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
  },
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  paths: {
    '@/*': ['*'],
  },
  jestWebpackResolver: {
    webpackConfig: './webpack/webpack.config.js',
  },
}

module.exports = config
