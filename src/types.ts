export interface Country {
    flag: string;
    name: {
        common: string;
        official: string;
    };
    population: number;
    region: string;
    capital: string[];
}
