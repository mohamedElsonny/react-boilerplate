require('babel-runtime/regenerator');

// this is for hot reloader react
require('react-hot-loader/patch');

// this liberary setup the websocket connection
require('webpack-hot-middleware/client?reload=true');

// make es6 working
require('babel-register');
require('./index.html');
require('./scss/main.scss');
require('./index');
