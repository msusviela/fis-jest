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

    test('getName devuelve el nombre correcto', () => {
        const country = new Country('Uruguay', 'South America');
        expect(country.getName()).toBe('Uruguay');
    });

    test('getContinent devuelve el continente correcto', () => {
        const country = new Country('Uruguay', 'South America');
        expect(country.getContinent()).toBe('South America');
    });

    test('setName actualiza el nombre correctamente', () => {
        const country = new Country('Uruguay', 'South America');
        country.setName('Argentina');
        expect(country.getName()).toBe('Argentina');
    });

    test('setContinent actualiza el continente correctamente', () => {
        const country = new Country('Uruguay', 'South America');
        country.setContinent('North America');
        expect(country.getContinent()).toBe('North America');
    });
});
