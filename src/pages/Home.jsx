import React from 'react';
import Categories from './Categories';

class Home extends React.Component {
  render() {
    return (
      <>
        <Categories />
        <input type="text" />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.

        </p>
        <input
          data-testid="query-input"
        />
        <button
          data-testid="query-button"
          type="submit"
        >
          Pesquisar

        </button>
      </>
    );
  }
}
export default Home;
