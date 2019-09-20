import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Book from './pages/Book';
import client from './apollo';
import './css/App.css';

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/book/:id" component={Book} />
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
