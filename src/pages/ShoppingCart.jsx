import React, { Component } from 'react';

export default class
  extends Component {
  state = {
    localStorageList: [],
  };

  componentDidMount() {
    const returnCache = localStorage.getItem('cart');
    const returned = JSON.parse(returnCache);
    // console.log(returned);
    this.setState({ localStorageList: returned });
  }

  render() {
    const { localStorageList } = this.state;
    return (
      <div>
        { localStorageList.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        ) : (
          localStorageList.map((product) => (
            <div key={ product.id }>
              <h2 data-testid="shopping-cart-product-name">{ product.title }</h2>
              <h4>{ `R$ ${product.price}` }</h4>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          ))
        )}
      </div>
    );
  }
}
