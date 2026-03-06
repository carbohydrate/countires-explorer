import axios from 'axios';
import { assert, test } from 'vitest';
import { REST_COUNTRIES_URL } from '../src/api/config';

test('countries list to be an array', async () => {
    const response = await axios.get(REST_COUNTRIES_URL);

    assert.isArray(response.data);
});
