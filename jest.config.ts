import type { Config } from "jest";
const config: Config = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "node",
};
export default config;
