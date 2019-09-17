export const GRAPHQL_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/graphql'
    : 'https://www.example.com/graphql';

export const API_BASE_URL = 'https://my-json-server.typicode.com/ridoansaleh/books-api';
