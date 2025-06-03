import { Calculator } from '../calculator.js';

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('suma 2 + 3 da 5', () => {
        expect(calc.sum(2, 3)).toBe(5);
    });
});
