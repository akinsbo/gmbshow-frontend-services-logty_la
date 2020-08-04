module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "<rootDir>/jest-preprocess.js"
    },
    testRegex: "(/__tests__/.*\\.([tj]sx?)|(\\.|/)(test|spec))\\.([tj]sx?)$",
    moduleDirectories: [
        'node_modules',
        // add the directory with the test-utils.js file
        __dirname, // the root directory
    ],
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.ts"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testPathIgnorePatterns: ["node_modules", ".cache", "cypress", ".dustbin"],
    globals: {
        __PATH_PREFIX__: ""
    },
    // Setup Enzyme
    testURL: "http://localhost",
    preset: 'ts-jest',
    testMatch: null,
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.tsx"],
}