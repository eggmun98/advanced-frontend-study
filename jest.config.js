// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "<rootDir>/"], // 모듈의 위치를 알려주기 위해 작성 - 내 소스코드들은 rootDir에 있다고 알려주기 위해 작성
  setupFilesAfterEnv: ["./jest.setup.js"], // 셋업 파일이 있는지 모든 jest 실행하기 전에 실행 시킬 파일들 // 즉 모든 jest 파일에서 자동으로 서버가 켜진다. // 그러므로 각 파일마다 서버를 실행시키는 코드를 작성안해도 됨
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
