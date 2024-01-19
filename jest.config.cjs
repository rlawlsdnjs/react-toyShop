// jest.config.js
module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/__tests__',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/@testing-library/jest-dom/dist/index.js',
  ],
  testMatch: ['<rootDir>/src/__tests__/**/*.test.{ts,tsx,js,jsx}'],
};
