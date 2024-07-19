# Lab Drizzle

## Resources

- https://orm.drizzle.team/kit-docs/quick

- https://orm.drizzle.team/learn/tutorials/drizzle-with-vercel

- https://www.youtube.com/watch?v=7-NZ0MlPpJA

## Setup

- Copy the content of `.env.local.example` into `.env.local`.

- Run `docker compose up`.

- Run the generate script.

- Run the migrate script.

## Testing

- Delete the `/data` folder.

- Run `docker compose up`.

- Run `npm test`.

The test runner uses the same database as development.

My personal workflow depends mostly on unit testing and manual testing, so I would mostly run integration tests in CI/CD for regression checking, and the DB would then be clean each time.

### Seeding data

To seed new data locally, write code in `src/sandbox.ts` and run `npm run sandbox.ts`. It's recommended to use the services provided by the features as it gives you typescript support, while still going through the same validation checks as HTTP calls.
