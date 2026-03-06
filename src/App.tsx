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
            {countriesQuery.data.map((country, i) => {
                return (
                    <div key={i}>
                        <div>{country.flag}</div>
                        <div>{country.name.common}</div>
                    </div>
                );
            })}
        </div>
    );
}
