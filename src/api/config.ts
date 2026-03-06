const fields = '?fields=name,flag,population,region,capital,subregion,timezones,currencies,languages,borders';

export const REST_COUNTRIES_URL = `https://restcountries.com/v3.1/all${fields}`;

export const getSingleCountryUrl = (name: string) => {
    return `https://restcountries.com/v3.1/name/${name}${fields}`;
}
