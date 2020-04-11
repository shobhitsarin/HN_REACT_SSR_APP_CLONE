import React from 'react';
import PropTypes from 'prop-types'

const App = ({component:Component, pageProps}) => (
  <div>
    <div>This is where header will come</div>
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