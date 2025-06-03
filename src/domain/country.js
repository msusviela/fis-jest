export class Country {
    constructor(name, continent) {
        this.name = name;
        this.continent = continent;
    }

    getName() {
        return this.name;
    }

    getContinent() {
        return this.continent;
    }

    setName(name) {
        this.name = name;
    }

    setContinent(continent) {
        this.continent = continent;
    }
}