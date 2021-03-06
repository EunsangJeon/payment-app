/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

describe('keys should be return string value', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // it clears the cache
    process.env = { ...OLD_ENV }; // make a copy
  });

  afterAll(() => {
    process.env = OLD_ENV; // restore old env
  });

  it('test values in normal case', () => {
    const keys = require('../../src/config/keys');

    expect(typeof keys.GOOGLE_CLIENT_ID).toBe('string');
    expect(typeof keys.GOOGLE_CLIENT_SECRET).toBe('string');
    expect(typeof keys.MONGODB_URL).toBe('string');
    expect(typeof keys.TEST_MONGODB_URL).toBe('string');
    expect(typeof keys.JWT_SECRET).toBe('string');
    expect(typeof keys.FRONTEND_URL).toBe('string');
    expect(typeof keys.STRIPE_PUBLIC_KEY).toBe('string');
    expect(typeof keys.STRIPE_SECRET_KEY).toBe('string');
  });

  it('test the case of invalid process.env', () => {
    process.env.GOOGLE_CLIENT_ID = undefined;
    process.env.GOOGLE_CLIENT_SECRET = undefined;
    process.env.MONGODB_URL = undefined;
    process.env.TEST_MONGODB_URL = undefined;
    process.env.JWT_SECRET = undefined;
    process.env.FRONTEND_URL = undefined;
    process.env.STRIPE_PUBLIC_KEY = undefined;
    process.env.STRIPE_SECRET_KEY = undefined;

    const keys = require('../../src/config/keys');

    expect(keys.GOOGLE_CLIENT_ID).toBe('');
    expect(keys.GOOGLE_CLIENT_SECRET).toBe('');
    expect(keys.MONGODB_URL).toBe('');
    expect(keys.TEST_MONGODB_URL).toBe('');
    expect(keys.JWT_SECRET).toBe('');
    expect(keys.FRONTEND_URL).toBe('');
    expect(typeof keys.STRIPE_PUBLIC_KEY).toBe('');
    expect(typeof keys.STRIPE_SECRET_KEY).toBe('');
  });
});
