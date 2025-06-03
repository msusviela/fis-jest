import { Country } from '../country.js';

describe('Country Tests', () => {
    test('dos países con mismo nombre y continente son iguales', () => {
        const country1 = new Country('Uruguay', 'South America');
        const country2 = new Country('Uruguay', 'South America');

        expect(country1).toEqual(country2);
    });

    test('dos países con diferente nombre o continente no son iguales', () => {
        const country1 = new Country('Uruguay', 'South America');
        const country2 = new Country('Argentina', 'South America');
        const country3 = new Country('Uruguay', 'North America');

        expect(country1).not.toEqual(country2);
        expect(country1).not.toEqual(country3);
    });
});
