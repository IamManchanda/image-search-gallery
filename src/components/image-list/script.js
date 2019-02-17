import React, { Fragment } from 'react';

const ImageList = ({ images }) => {
  const renderedImages = images.map(({ urls, id, description }) => {
    return <img src={ urls.regular } key={ id } alt={ description } title={ description } />
  });
  return <Fragment>{ renderedImages }</Fragment>;
}

ImageList.defaultProps = {
  images: [],
};

export default ImageList;
