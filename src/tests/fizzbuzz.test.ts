import {fizzBuzz} from './../core/fizzbuzz'

describe('FizzBuzz', () => {
    it('returns number one as a string for number one', () => {
      expect( fizzBuzz(1) ).toBe('1');
    });
});