import React, { Component } from 'react';
// import { addingToCart } from './Home';

export default class extends Component {
  state = {
    localStorageList: [],
  };

  componentDidMount() {
    const returnCache = localStorage.getItem('cart');
    const returned = JSON.parse(returnCache);
    // console.log(returned);
    this.setState({ localStorageList: returned });
  }

  increaseQnty = (product) => {
    const { localStorageList } = this.state;
    localStorageList
      .reduce((accumulator, current) => {
        if (current.id === product.id) {
          current.quantity += 1;
          accumulator = ([...accumulator, current]);
          return accumulator;
        }
        accumulator = ([...accumulator, current]);
        // product.quantity = [accumulator];
        return product.quantity;
      }, []);
    console.log(product.quantity); // undefined
    return product.quantity;
    // console.log(testing);
    // localStorage.setItem('cart', JSON.stringify(testing));
    // this.setState({ localStorageList: testing });
  };

  removeItem = (id) => {
    const { localStorageList } = this.state;
    let newListing = [...localStorageList];
    newListing = localStorageList.filter((item) => id !== item.id);
    console.log(newListing);
    localStorage.setItem('cart', JSON.stringify(newListing));
    this.setState({ localStorageList: newListing });
  };

  // let itemCart = [...cartItems];
  // itemCart = itemCart.filter((item) => item.id !== id);
  // localStorage.setItem('produtos', JSON.stringify(itemCart));
  // this.setState({ cartItems: itemCart });

  render() {
    const { localStorageList } = this.state;
    return (
      <div>
        {localStorageList.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          localStorageList.map((product) => (
            <div key={ product.id }>
              <h2 data-testid="shopping-cart-product-name">{ product.title}</h2>
              <h4>{`R$ ${product.price}`}</h4>
              <p data-testid="shopping-cart-product-quantity">
                { product.quantity }
                {console.log(product.quantity)}
              </p>
              <button
                type="button"
                value="aumenta"
                data-testid="product-increase-quantity"
                onClick={ () => this.increaseQnty(product.id) }
              >
                Adicionar quantidade
              </button>
              <button
                type="button"
                value="diminui"
                data-testid="product-decrease-quantity"
                onClick={ this.btnClick }
              >
                Remover quantidade
              </button>
              <button
                type="button"
                data-testid="remove-product"
                onClick={ () => this.removeItem(product.id) }
              >
                Excluir item
              </button>
            </div>
          ))
        )}
      </div>
    );
  }
}
