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
    return (
      <ul>
        { filter.map((selected) => (
          <div key={ selected.id }>
            <input
              type="radio"
              data-testid="category"
              name={ selected.id }
            />
            { selected.name }
          </div>
        ))}
      </ul>
    );
  }
}
