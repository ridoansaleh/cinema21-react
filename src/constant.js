export const GRAPHQL_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/graphql'
    : 'https://www.example.com/graphql';
