module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "<rootDir>/jest-preprocess.js"
  },
  testRegex: "(/__tests__/.*\\.([tj]sx?)|(\\.|/)(test|spec))\\.([tj]sx?)$",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["node_modules", ".cache", "cypress"],
  globals: {
    __PATH_PREFIX__: ""
  },
    // Setup Enzyme
  testURL: "http://localhost",
  // setupFiles: ["<rootDir>/src/setupTests.tsx"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["./node_modules/jest-enzyme/lib/index.js", "<rootDir>/src/setupTests.tsx"]
}
