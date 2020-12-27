import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Cart from './components/Cart';
import BaseLayout from './components/BaseLayout';
import ShowProduct from './components/ShowProduct';
import registerServiceWorker from './registerServiceWorker';
import NewItem from './components/NewItem';
import NewAutor from './components/Autor/Autor';
import Autores from './components/Autor/ListarAutores';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/cart/:id" component={Cart} />
        <Route exact path="/products/:id" component={ShowProduct} />
        <Route path="/register" component={NewItem} />
        <Route path="/lautor" component={Autores} />
        <Route path="/autor" component={NewAutor} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
