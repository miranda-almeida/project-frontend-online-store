import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartBtn extends Component {
  render() {
    return (
      <div>
        <Link to="/cart">
          <button type="button">
            Carrinho
          </button>
        </Link>
      </div>
    );
  }
}
