module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs,ts,tsx}"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs,ts,tsx}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs,ts,tsx}",
  ],
  transform: {
    "^.+\\.(js|jsx|mjs,ts,tsx)$": "<rootDir>/jest-transformer.js",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!crypto-random-string/)"],
};
