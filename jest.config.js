module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './coverage',
      },
    ],
  ],
};
