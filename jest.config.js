module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/config/test/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/test/__mocks__/fileMock.js',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
  },
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/config/test/loadershim.js'],
  setupTestFrameworkScriptFile: '<rootDir>/config/test/test-setup.js',
}
