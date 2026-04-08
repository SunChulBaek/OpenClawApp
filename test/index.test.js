const { hello } = require('../src/index');
test('hello returns string', () => {
  expect(hello()).toBe('Hello from Franky');
});
