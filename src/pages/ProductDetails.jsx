import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductFromProductId } from '../services/api';
import CartBtn from '../components/CartBtn';

export default class ProductDetails extends Component {
  state = {
    product: '',
  };

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductFromProductId(id);
    this.setState({ product });
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
