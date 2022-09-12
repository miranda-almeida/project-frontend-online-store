import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';

class Home extends React.Component {
  state = {
    products: '',
    searchValue: '',
    localStorageList: [],
  };

  // async componentDidMount() {
  //   const { match: { params: { id } } } = this.props;
  //   // const returns = await getProductFromProductId(id);
  //   // const { title, thumbnail, price } = returns;
  //   // this.setState((previousState) => (
  //   //   { localStorageList: [...previousState.localStorageList,
  //   //     { title, thumbnail, price }] }
  //   // ));
  // }

  componentWillUnmount() {
    const { localStorageList } = this.state;
    localStorage.setItem('cart', JSON.stringify(localStorageList));
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

  fetchCategory = async (categoryId) => {
    const returnsData = await getProductsFromCategoryAndQuery(categoryId);
    this.setState({ products: returnsData.results });
  };

  addingToCart = (product) => {
    const local = localStorage.getItem('cart');
    const ifTrue = local ? JSON.parse(local) : [];
    console.log(local);
    const returnedList = [...ifTrue, product];
    localStorage.setItem('cart', JSON.stringify(returnedList));
    this.setState((previousState) => (
      { localStorageList: [...previousState.localStorageList,
        product] }
    ));
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
            <div data-testid="product" key={ product.id }>
              <h2>{ product.title }</h2>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{ `R$ ${product.price}` }</p>
              <Link
                data-testid="product-detail-link"
                to={ `/productdetails/${product.id}` }
              >
                <button type="button">Ver detalhes do produto</button>
              </Link>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => this.addingToCart(product) }
              >
                Adicionar ao carrinho
              </button>
            </div>
          )) : <h3>Nenhum produto foi encontrado</h3>}
        </div>
        <Categories fetchCategory={ this.fetchCategory } />
      </>
    );
  }
}

Home.propTypes = {
  title: PropTypes.string,
  thumbanil: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default Home;
