import express from 'express';
import path from 'path';

const app = express();

// require Webpack and its config
const webpack = require('webpack');
const config = require('../../config/webpack.dev.js');

// call webpack with its configrations
const compiler = webpack(config);

// making middleware for development
const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);

// making middleware for hot reload
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

// use the middlewares
app.use(webpackDevMiddleware);
// use HotMiddleware after DevMiddleware and before staticMiddleware [TRICK]
app.use(webpackHotMiddleware);

const staticMiddleware = express.static('dist');

app.use(staticMiddleware);

app.listen(8000, () => console.log('Server is Listening on port 8000'));
