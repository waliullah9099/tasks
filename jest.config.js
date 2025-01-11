module.exports = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  modulePathIgnorePatterns: ["<rootDir>/build/"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
