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
    const images = [];
    for (const item of [ ...5 ]) {
      const response = await unsplashApi.get('/search/photos', { params: { query, page: item, per_page: 30 } });
      const { results } = response.data;
      images.push(...results);
      this.setState({ images });
      console.log('Current Fetched Images Length:', images.length);
    }
  }

  render() {
    const { images } = this.state;
    return <Fragment>
      <div className={ `top-bar shadow ${topBarSpacing}`}>
        <div className="top-bar-left">
          <ul className="menu">
            <li className={ `menu-text ${menuTextFont}` }>Search for Images</li>
            <li><SearchBar onFormSubmit={ this.handleSearchSubmit } imagesLength={ images.length } /></li>
          </ul>
        </div>
      </div>
      <div className="grid-container fluid ">
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
