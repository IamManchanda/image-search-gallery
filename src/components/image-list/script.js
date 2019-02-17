import React, { Fragment } from 'react';
import ImageCard from '../image-card/script';
import { imageListContainer } from './scoped.module.css';

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageCard image={ image } key={ image.id } />
  });
  return (images && images.length) ? <Fragment>
    <div className={ imageListContainer }>{ renderedImages }</div>
  </Fragment> : null;
}

ImageList.defaultProps = {
  images: [],
};

export default ImageList;
