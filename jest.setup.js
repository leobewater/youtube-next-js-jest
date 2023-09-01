// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom

//import '@testing-library/jest-dom/extend-expect' // use this when @testing-library/jest-dom is before v6.0.0
import '@testing-library/jest-dom'; // use this when @testing-library/jest-dom is v6.0
import { server } from './mocks/server'
;

// before running all tests
beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen();
});

// reset each handlers after each test
afterEach(() => {
    server.resetHandlers();
})

afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});
