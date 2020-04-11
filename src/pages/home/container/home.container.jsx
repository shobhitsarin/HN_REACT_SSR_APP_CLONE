import React from 'react';
import PropTypes from 'prop-types'
import HomeComponent from '../components'

export const HomeContainer = ({pageProps}) => (<HomeComponent {...pageProps} />)
HomeContainer.propTypes = {
    pageProps: PropTypes.shape({}),
};
  
  HomeContainer.defaultProps = {
    pageProps: {},
  };
export default HomeContainer;