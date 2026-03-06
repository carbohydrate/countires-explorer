import { type FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCountry } from '../api/useCountry';
import { LoadingComponent } from './loading-component';

export const SingleCountry: FC = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    if (!name) {
        throw new Error('name is undefined!');
    }

    const countryQuery = useCountry(name);

    if (!countryQuery.isSuccess) {
        return <LoadingComponent />;
    }

    const goBack = () => {
        navigate(-1);
    }

    const country = countryQuery.data[0];

    return (
        <div>
            <button onClick={goBack}>Go Back</button>
            <div>{country.flag}</div>
            <div>{country.name.common}</div>
            <div>{country.name.official}</div>
            <div>{country.population}</div>
            <div>{country.region}</div>
            <div>{country.capital.map(x => x)}</div>

            <div>------</div>
            <div>{country.subregion}</div>
            <div>{country.timezones.map(x => x)}</div>
            <div style={{ fontWeight: 800 }}>Currencies</div>
            {Object.values(country.currencies).map((currency, i) => {
                return (
                    <div key={i}>{currency.symbol} - {currency.name}</div>
                )
            })}
            <div style={{ fontWeight: 800 }}>Languages</div>
            {Object.values(country.languages).map((language, i) => {
                return (
                    <div key={i}>{language}</div>
                )
            })}
            <div style={{ fontWeight: 800 }}>Borders</div>
            {Object.values(country.borders).map((border, i) => {
                return (
                    <div key={i}>{border}</div>
                )
            })}
        </div>
    );
};
