import React, { Fragment, Component } from 'react';
import unsplashApi from '../../api/unsplash';
import SearchBar from '../../components/search-bar/script';
import ImageList from '../../components/image-list/script';
import { topBarSpacing, menuTextFont } from './scoped.module.css';

const Home = class extends Component {
  state = {
    images: [],
  };

  handleSearchSubmit = async (searchTerm) => {
    const query = searchTerm;
    const response = await unsplashApi.get('/search/photos', { params: { query } });
    const { results: images } = response.data;
    this.setState({ images });
  }

  render() {
    const { images } = this.state;
    return <Fragment>
      <div className={ `top-bar ${topBarSpacing}`}>
        <div className="top-bar-left">
          <ul className="menu">
            <li className={ `menu-text ${menuTextFont}` }>Search for Images</li>
            <li><SearchBar onFormSubmit={ this.handleSearchSubmit } /></li>
          </ul>
        </div>
      </div>
      <div className="grid-container fluid">
        <div className="grid-x grid-padding-x grid-padding-y">
          <div className="cell">
            <ImageList images={ images } />
          </div>
        </div>
      </div>
    </Fragment>;
  }
};

export default Home;
