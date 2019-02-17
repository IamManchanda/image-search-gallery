import React, { Fragment } from 'react';

const ImageList = ({ images }) => <Fragment>
  { console.log(images) }
  {
    (images && images.length)
      ? <h3>Found: { images.length } images.</h3>
    : null
  }
</Fragment>;

ImageList.defaultProps = {
  images: [],
};

export default ImageList;
