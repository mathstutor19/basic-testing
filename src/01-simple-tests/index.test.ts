// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 2, b: 1, action: Action.Add });
    expect(result).toBe(3);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 2, b: 1, action: Action.Subtract });
    expect(result).toBe(1);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 2, b: 5, action: Action.Multiply });
    expect(result).toBe(10);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 6, b: 2, action: Action.Divide });
    expect(result).toBe(3);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 3, b: 3, action: Action.Exponentiate });
    expect(result).toBe(27);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const result = simpleCalculator({ a: 3, b: 4, action: 'invalid action' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const result = simpleCalculator({ a: 2, b: 'invalid argument', action: Action.Subtract });
    expect(result).toBeNull();
    expect(
      simpleCalculator({ a: 'invalid argument', b: 1, action: Action.Divide }),
    ).toBeNull();
  });
});
