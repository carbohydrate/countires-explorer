import 'vitest-browser-react';
import axios from 'axios';
import { assert, test } from 'vitest';
import { REST_COUNTRIES_URL } from '../src/api/config';
import { render } from 'vitest-browser-react';
import { LoadingComponent } from '../src/components/loading-component';

test('countries list to be an array', async () => {
    const response = await axios.get(REST_COUNTRIES_URL);

    assert.isArray(response.data);
});

test('it should show loading component at page load', async () => {
    const screen = await render(<LoadingComponent />)
    // const screen = await render(<App />)
});
