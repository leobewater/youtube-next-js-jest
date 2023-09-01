// mocks all of the endpoints
import { rest } from 'msw';

export const handlers = [
  // mock endpoint and return json object
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        username: 'anson',
      })
    );
  }),
];
