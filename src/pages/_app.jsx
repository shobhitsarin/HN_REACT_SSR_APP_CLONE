import React from 'react';
import PropTypes from 'prop-types'
import Header from '../components/common/organisms/header'
import "../style/style.css";

const App = ({component:Component, pageProps}) => (
  <div className='main'>
    <Header />
    <Component pageProps={pageProps} />
  </div>
)
App.propTypes = {
    pageProps: PropTypes.shape({}),
    component: PropTypes.elementType.isRequired,
};
  
App.defaultProps = {
    pageProps: {}
  };
export default App;