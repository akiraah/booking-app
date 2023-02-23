import type { Config } from 'jest'
import sharedConfig from './jest.config'
export default async (): Promise<Config> => {
  return {
    ...sharedConfig,
    testMatch: ["*/**/*.int.test.ts"],
    setupFilesAfterEnv: ['./src/setup/testSetup.ts'],
  }
}
