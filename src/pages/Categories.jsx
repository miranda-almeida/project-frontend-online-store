import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  state = {
    filter: [],
  };

  componentDidMount() {
    this.callToFilter();
  }

  callToFilter = async () => {
    const categories = await getCategories();
    this.setState({ filter: categories });
  };

  render() {
    const { filter } = this.state;
    const { fetchCategory } = this.props;
    return (
      <ul>
        { filter.map((selected) => (
          <div key={ selected.id }>
            <input
              type="radio"
              data-testid="category"
              name={ selected.id }
              onClick={ () => fetchCategory(selected.id) }
            />
            { selected.name }
          </div>
        ))}
      </ul>
    );
  }
}
Categories.propTypes = {
  fetchCategory: PropTypes.func,
}.isRequired;
