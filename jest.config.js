module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!src/env-config.js'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './coverage',
      },
    ],
  ],
  setupFilesAfterEnv: ['./setupTests.js'],
};
