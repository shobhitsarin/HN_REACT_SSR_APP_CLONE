// Not using webpack for only a file, instead utilizing babel for es6 conversion
require( "babel-register" )( {
    presets: [ "env" ],
    plugins: [
        "dynamic-import-node",
    ],
} );
require( "./server" );
