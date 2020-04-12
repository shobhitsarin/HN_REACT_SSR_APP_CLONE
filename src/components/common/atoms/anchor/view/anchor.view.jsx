
import React from 'react';
import PropTypes from 'prop-types';

const Anchor = ({className,href,hrefText,rel}) => (<a className={className} href={href} rel={rel}>{hrefText}</a>)

Anchor.propTypes = {
    className: PropTypes.string,
    rel: PropTypes.string,
    href: PropTypes.string.isRequired,
    hrefText: PropTypes.string.isRequired,
};

Anchor.defaultProps = {
    className: '',
    rel: '',
  };

  export default Anchor;