import React from "react";
import ReactDOM from "react-dom";
import App from "../pages/_app";
import Home from "../pages/home";

const {pageProps} = window.initalProps;
const appComponent = (<App component={Home} pageProps={pageProps} />)
const app = document.getElementById( "app" );
ReactDOM.hydrate( appComponent, app );