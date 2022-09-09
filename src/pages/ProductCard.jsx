import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    return (
      <>
        <div data-testid="product" />
        <Link
          data-testid="product-detail-link"
        >
          Informações
          {' '}

        </Link>
      </>
    );
  }
}
export default ProductCard;
