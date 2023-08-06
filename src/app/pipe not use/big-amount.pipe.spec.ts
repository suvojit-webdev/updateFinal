import { BigAmountPipe } from './big-amount.pipe';

describe('BigAmountPipe', () => {
  it('create an instance', () => {
    const pipe = new BigAmountPipe();
    expect(pipe).toBeTruthy();
  });
});
