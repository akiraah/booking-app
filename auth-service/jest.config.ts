import type { Config } from 'jest'

export default async (): Promise<Config> => {
  return {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./src/setup/testSetup.ts'],
    testMatch: ["*/**/*.test.ts"],
    // testPathIgnorePatterns: ["*/**/*.int.test.ts"]
  }
}
