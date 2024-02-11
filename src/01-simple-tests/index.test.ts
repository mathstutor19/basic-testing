// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 2,
      b: 3,
      action: Action.Add,
    });
    expect(result).toBe(5);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 5, b: 3, action: Action.Subtract });
    expect(result).toEqual(2);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 4, b: 3, action: Action.Multiply });
    expect(result).toEqual(12);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 8, b: 2, action: Action.Divide });
    expect(result).toEqual(4);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 2,
      b: 3,
      action: Action.Exponentiate,
    });
    expect(result).toEqual(8);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const result = simpleCalculator({ a: 1, b: 2, action: 'InvalidAction' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 'not a number',
      b: 2,
      action: Action.Add,
    });
    expect(result).toBeNull();
  });
});
