import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link
            data-testid="shopping-cart-button"
            to="/cart"
          >
            Carrinho
          </Link>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/cart" component={ ShoppingCart } />
            <Route path="/productdetails/:id" component={ ProductDetails } />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
