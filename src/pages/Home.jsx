import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      products: '',
      searchValue: '',
    };
  }

  fetchProducts = (url) => {
    getProductsFromCategoryAndQuery(url).then((data) => this.setState({
      products: data.results,
      searchValue: '',
    }));
  };

  searchProduct = ({ target }) => {
    const { value } = target;
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${value}`;
    this.fetchProducts(url);
  };

  render() {
    const { products, searchValue } = this.state;
    return (
      <>
        <input type="text" />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.

        </p>
        <input
          data-testid="query-input"
          placeholder="Digite o nome do produto"
          value={ searchValue }
          onChange={ ({ target }) => this.setState({ searchValue: target.value }) }
        />
        <button
          data-testid="query-button"
          type="submit"
          value={ searchValue }
          onClick={ this.searchProduct }
        >
          Pesquisar

        </button>
        <div>
          { products ? products.map((product) => (
            <div data-testid="product" key={ product.id } />

          )) : <h3>Nenhum produto foi encontrado</h3>}
        </div>
        <Categories />
      </>
    );
  }
}
export default Home;
