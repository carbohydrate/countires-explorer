import { type FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Country } from '../types';

interface SingleCountryProps {

}

export const SingleCountry: FC<SingleCountryProps> = (props) => {
    const {  } = props;
    const { id } = useParams();
    console.log('id:', id);
    // const location = useLocation();

    // console.log('location.state:', location.state);

    return (
        <></>
    );
};
