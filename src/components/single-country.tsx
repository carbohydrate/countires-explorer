import { type FC } from 'react';
import { useParams } from 'react-router-dom';
import { useCountry } from '../api/useCountry';
import { LoadingComponent } from './loading-component';

export const SingleCountry: FC = () => {
    const { name } = useParams();

    if (!name) {
        throw new Error('name is undefined!');
    }

    const countryQuery = useCountry(name);

    if (!countryQuery.isSuccess) {
        return <LoadingComponent />;
    }

    const country = countryQuery.data[0];

    return (
        <div>
            <div>{country.flag}</div>
            <div>{country.name.common}</div>
            <div>{country.name.official}</div>
            <div>{country.population}</div>
            <div>{country.region}</div>
            <div>{country.capital.map(x => x)}</div>

            <div>------</div>
            <div></div>
        </div>
    );
};
