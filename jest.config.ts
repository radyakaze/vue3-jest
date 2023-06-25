import type { Config } from "jest";
const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  transform: {
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
};

export default config;
