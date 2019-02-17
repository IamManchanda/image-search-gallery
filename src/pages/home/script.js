import React, { Fragment, Component } from 'react';
import SearchBar from '../../components/search-bar/script';
import { topBarSpacing, menuTextFont } from './scoped.module.css';

const Home = class extends Component {
  handleSearchSubmit = (searchTerm) => {
    console.log({ searchTerm });
  }

  render() {
    return <Fragment>
      <div className={ `top-bar ${topBarSpacing}`}>
        <div className="top-bar-left">
          <ul className="menu">
            <li className={ `menu-text ${menuTextFont}` }>Image Search</li>
            <li><SearchBar onFormSubmit={ this.handleSearchSubmit } /></li>
          </ul>
        </div>
      </div>
    </Fragment>;
  }
};

export default Home;
