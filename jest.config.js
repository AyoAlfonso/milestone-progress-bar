module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/tests/**/*.(test|spec).(ts|tsx)"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
