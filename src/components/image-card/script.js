import React, { Fragment, Component } from 'react';
import { imageListCellCard } from './scoped.module.css';

const ImageCard = class extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  setSpans = () => {
    const { clientHeight: height } = this.imageRef.current;
    const spans = Math.ceil(height / 8) + 4;
    this.setState({ spans });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  render() {
    const { image } = this.props;
    const { urls, description } = image;
    return <Fragment>
      <div 
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        className={ `radius bordered shadow card ${imageListCellCard}` }>
        <img 
          ref={ this.imageRef } 
          src={ urls.regular } 
          alt={ description } 
          title={ description } 
        />
      </div>
    </Fragment>;
  }
};

ImageCard.defaultProps = {
  image: null,
};

export default ImageCard;
