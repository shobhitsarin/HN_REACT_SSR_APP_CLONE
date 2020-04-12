const dev = process.env.NODE_ENV !== "production";
const path = require( "path" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );

const plugins = [
    new MiniCssExtractPlugin({
        filename: "styles.css",
    }),
];

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
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                ],
            },
        ],
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "client.bundle.js",
    },
    plugins
};
