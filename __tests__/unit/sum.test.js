const expectExport = require('expect');

describe('Math', () => {
  it('should sum two numbers', () => {
    const x = 2;
    const y = 2;

    const sum = x + y;

    expect(sum).toBe(4);
  });
});
