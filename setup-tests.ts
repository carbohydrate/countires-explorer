import 'vitest-browser-react';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { REST_COUNTRIES_URL } from './src/api/config';
import { faker } from '@faker-js/faker';

const allCountriesHandler = http.get(REST_COUNTRIES_URL, () => HttpResponse.json([
    {
        name: {
            common: faker.string.alpha(),
        },
        flag: 'not sure',
        population: 123,

    },
]));

const server = setupServer(allCountriesHandler);

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});
