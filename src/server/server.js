import express from "express";
import path from "path";
import qs from 'qs';
import { renderToString } from "react-dom/server";
import React from 'react';
import htmlTemplate from "../pages/_document";
import App from "../pages/_app";
import {ROUTES_LIST} from "./route.config";
import serialize from "serialize-javascript";

const app = express();

app.use( express.static( path.resolve( __dirname, "../../dist" ) ) );
app.use( express.static( path.resolve( __dirname, "../../static" ) ) );

ROUTES_LIST.forEach(({path, component,pageId}) => {
      app.get(path, ( req, res ) => {
          const {getInitialProps} = component;
          let getInitialPropsPromise=null;
          if(getInitialProps) {
            const reqParams = qs.parse(req.query)
            getInitialPropsPromise =  getInitialProps(reqParams);
          }
          Promise.all([getInitialPropsPromise]).then(([pageProps]) => {
            const initialProps = serialize({pageId,pageProps}, { isJSON: true });
            const appComponent= (<App component={component} pageProps={pageProps} />);
            const appComponentString = renderToString(appComponent);
            res.send(htmlTemplate(appComponentString,initialProps) );
        });
    })
  });

app.listen( process.env.PORT || 3001 );
console.log("App Running on heoroku port or localhost:3001")


