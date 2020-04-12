// Not using webpack for only a file, instead utilizing babel for es6 conversion
require( "babel-register" )( {
    presets: [ "env" ],
    plugins: [
        "dynamic-import-node",
        [
            "css-modules-transform",
            {
                camelCase: true,
                extensions: [ ".css", ".scss" ],
            }
        ],
    ],
} );
require( "./server" );
