
import React from 'react';
import PropTypes from 'prop-types';

const Img = ({className,src,altText}) => (<img className={className} src={src} alt={altText} />)

Img.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    altText: PropTypes.string,
};

Img.defaultProps = {
    className: '',
    altText: 'some image',
  };

  export default Img;