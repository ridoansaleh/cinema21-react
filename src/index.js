import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Theater from './pages/theater';
import UpComing from './pages/upcoming';
import MyMTix from './pages/my-mtix';
import client from './apollo';
import './css/App.css';
import PATH from './app.url';

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route exact path={PATH.HOME} component={Home} />
      <Route path={PATH.THEATER} component={Theater} />
      <Route path={PATH.UP_COMING} component={UpComing} />
      <Route path={PATH.MY_MTIX} component={MyMTix} />
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
