import { Calculator } from '../calculator.js';

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    afterEach(() => {
        calc = null;
    });
    
    test('suma 2 + 3 da 5', () => {
        // Act & Assert
        expect(calc.sum(2, 3)).toBe(5);
    });

    test('resta 5 - 3 da 2', () => {
        // Act & Assert
        expect(calc.subtract(5, 3)).toBe(2);
    });
});
