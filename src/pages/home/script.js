import React, { Fragment, Component } from 'react';
import SearchBar from '../../components/search-bar/script';
import { menuTextFont } from './scoped.module.css';

const Home = class extends Component {
  handleSearchSubmit = (searchTerm) => {
    console.log({ searchTerm });
  }

  render() {
    return <Fragment>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className={ `menu-text ${menuTextFont}` }>Image Search</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <SearchBar onFormSubmit={ this.handleSearchSubmit } />
        </div>
      </div>
    </Fragment>;
  }
};

export default Home;
