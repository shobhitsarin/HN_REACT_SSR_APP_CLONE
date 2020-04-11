import express from "express";
import path from "path";
import { renderToString } from "react-dom/server";
import React from 'react';
import htmlTemplate from "../pages/_document";
import App from "../pages/_app";
import {ROUTES_LIST} from "./route.config";
import serialize from "serialize-javascript";

const app = express();

app.use( express.static( path.resolve( __dirname, "../../dist" ) ) );

ROUTES_LIST.forEach(({path, component,pageId}) => {
      app.get(path, ( req, res ) => {
          const {getInitialProps} = component;
          let pageProps=null;
          if(getInitialProps) {
            pageProps = getInitialProps();
          }
          const initialProps = serialize({pageId,pageProps}, { isJSON: true });
       // Promise.all().then((pageProps) => {
            const appComponent= (<App component={component} pageProps={pageProps} />);
            const appComponentString = renderToString(appComponent);
            res.writeHead( 200, { "Content-Type": "text/html" } );
            res.end( htmlTemplate( appComponentString,initialProps) );
       // });
    })
  });

app.listen( 3001 );
console.log("App Running on localhost:3001")


