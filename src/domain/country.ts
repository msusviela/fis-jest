export class Country {
  constructor(
    private name: string,
    private continent: string,
  ) {}

  getName(): string {
    return this.name;
  }

  getContinent(): string {
    return this.continent;
  }

  setName(name: string): void {
    this.name = name;
  }

  setContinent(continent: string): void {
    this.continent = continent;
  }
}