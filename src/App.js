import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

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
            <Route path="/cart" component={ ShoppingCart } />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
