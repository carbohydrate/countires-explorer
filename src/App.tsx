import { useCountries } from './api/useCountries';
import { LoadingComponent } from './components/loading-component';

export default function App() {
    const countriesQuery = useCountries();

    if (!countriesQuery.isSuccess) {
        return <LoadingComponent />;
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>List of Countries</h1>
            <div>
                {countriesQuery.data.map((country, i) => {
                    return (
                        <div key={i} className='pointer' style={{ display: 'grid', gridTemplateColumns: '2rem 1fr 1fr 1fr 1fr' }}>
                            <div>{country.flag}</div>
                            <div>{country.name.common}</div>
                            <div>{country.population}</div>
                            <div>{country.region}</div>
                            <div>{country.capital.map(x => x)}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
