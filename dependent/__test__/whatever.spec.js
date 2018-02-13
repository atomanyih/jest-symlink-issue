jest.mock('cowsay', () => ({
  say: jest.fn(({text}) => `moo ${text}`)
}));

const cowsay = require('cowsay');
const dependency = require('dependency');

describe('something', () => {
  it('does it', () => {
    expect(cowsay.say({text: 'hello'})).toEqual('moo hello');
  });

  it('does it too', () => {
    expect(dependency('hello')).toEqual('moo hello');
  });
});