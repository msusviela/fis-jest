import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { Calculator } from '../calculator';

describe('Calculator', () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  afterEach(() => {
    calc = undefined as unknown as Calculator;
  });

  test('suma 2 + 3 da 5', () => {
    expect(calc.sum(2, 3)).toBe(5);
  });

  test('resta 5 - 3 da 2', () => {
    expect(calc.subtract(5, 3)).toBe(2);
  });
});