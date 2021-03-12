import { expect } from 'chai';
import { App } from './app';

describe('App', () => {
  it('test', () => {
    const app = new App;
    const result = app.run();
    expect(result).equal(true);
  });
});
