import React from "react";
import ReactDOM from "react-dom";
import App from "../pages/_app";
import Home from "../pages/home";

// import(`../pages/${pageId}`).then(({ default: component }) => {
//   return (<App component={component} pageProps={pageProps} />);
// })

const {pageProps,pageId} = window.initalProps;


const appComponent = (<App component={Home} pageProps={pageProps} />)
const app = document.getElementById( "app" );
ReactDOM.hydrate( appComponent, app );