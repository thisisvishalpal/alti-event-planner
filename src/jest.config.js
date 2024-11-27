module.exports = {
  transformIgnorePatterns: [
    "/node_modules/(?!axios)/" // Allow Jest to transform 'axios' or other ESM dependencies
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Use babel-jest to transform your code
  },
};
