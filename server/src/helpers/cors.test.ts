import { corsOptions } from '../helpers/cors';

describe('corsOptions', () => {
  it('should allow origins from the allowed list', () => {
    const callback = jest.fn();
    corsOptions.origin('https://ws.com:4000', callback);
    expect(callback).toHaveBeenCalledWith(null, true);
  });

  it('should not allow origins not in the allowed list', () => {
    const callback = jest.fn();
    corsOptions.origin('http://not-allowed-origin.com', callback);
    expect(callback).toHaveBeenCalledWith(new Error('Not allowed by CORS'));
  });
});
