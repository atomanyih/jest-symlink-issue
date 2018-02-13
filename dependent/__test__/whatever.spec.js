jest.mock('cowsay', () => ({
  say: jest.fn(({text}) => `moo ${text}`)
}));

const cowsay = require('cowsay');
const dependency = require('dependency');

describe('something', () => {
  it('mocks direct usage', () => {
    expect(cowsay.say({text: 'hello'})).toEqual('moo hello');
  });

  it('mocks dependency usage', () => {
    expect(dependency('hello')).toEqual('moo hello');
  });
});