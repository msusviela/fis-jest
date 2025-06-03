import { Calculator } from '../calculator.js';

describe('Calculator', () => {
    test('suma 2 + 3 da 5', () => {
        // Arrange
        const calc = new Calculator();
        // Act & Assert
        expect(calc.sum(2, 3)).toBe(5);
    });
});
