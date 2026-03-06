import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { getSingleCountryUrl } from './config';
import { Country } from '../types';

export const useCountry = (name: string) => {
    const query = useQuery<Country[]>({
        queryKey: ['country', name],
        queryFn: async () => {
            const res = await axios.get(getSingleCountryUrl(name));

            return res.data;
        },
        staleTime: Infinity,
        gcTime: Infinity,
    });

    return query;
}
