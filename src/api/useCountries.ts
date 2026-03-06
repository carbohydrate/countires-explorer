import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { REST_COUNTRIES_URL } from './config';
import { Country } from '../types';

export const useCountries = () => {
    const query = useQuery<Country[]>({
        queryKey: ['country-list'],
        queryFn: async () => {
            const res = await axios.get(REST_COUNTRIES_URL);

            return res.data;
        }
    });

    return query;
}
