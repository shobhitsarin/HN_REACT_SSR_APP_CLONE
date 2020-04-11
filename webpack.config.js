const dev = process.env.NODE_ENV !== "production";
const path = require( "path" );

module.exports = {
    mode: dev ? "development" : "production",
    context: path.join( __dirname, "src" ),
    devtool: dev ? "none" : "source-map",
    entry: {
        app: path.resolve( __dirname, "./src/client/client.jsx" ),
    },
    resolve: {
        modules: [
            path.resolve( "./src" ),
            "node_modules",
        ],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
            }
        ],
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "client.bundle.js",
    }
};
