import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductFromProductId } from '../services/api';
import CartBtn from '../components/CartBtn';

export default class ProductDetails extends Component {
  state = {
    product: '',
    localStorageList: [],
  };

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductFromProductId(id);
    this.setState({ product });
  };

  addingToCart = (product) => {
    product.quantity = 1;
    const local = localStorage.getItem('cart');
    const ifTrue = local ? JSON.parse(local) : [];
    const verify = ifTrue.some((item) => item.id === product.id);

    if (verify === true) {
      const testing = ifTrue
        .reduce((accumulator, current) => {
          if (current.id === product.id) {
            current.quantity += 1;
            console.log(current.quantity);
            accumulator = ([...accumulator, current]);
            return accumulator;
          }
          accumulator = ([...accumulator, current]);
          return accumulator;
        }, []);
      console.log(testing);
      return localStorage.setItem('cart', JSON.stringify(testing));
    }

    const returnedList = [...ifTrue, product];
    localStorage.setItem('cart', JSON.stringify(returnedList));
    this.setState((previousState) => (
      { localStorageList: [...previousState.localStorageList,
        product] }
    ));
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ product.title }</h2>
        <img
          data-testid="product-detail-image"
          src={ product.thumbnail }
          alt={ product.title }
        />
        <h4 data-testid="product-detail-price">{ `R$ ${product.price}` }</h4>
        <div>
          <CartBtn data-testid="shopping-cart-button" />
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addingToCart(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
