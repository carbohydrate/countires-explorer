export interface Country {
    flag: string;
    name: {
        common: string;
        official: string;
    };
    population: number;
    region: string;
    capital: string[];
    subregion: string;
    timezones: string[];
    currencies: Currency[];
    languages: Record<string, string>;
    borders: string[];
}

interface Currency {
    name: string;
    symbol: string;
}
