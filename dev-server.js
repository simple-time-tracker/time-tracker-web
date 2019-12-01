const { createServer } = require('http');
const { createProxyServer } = require('http-proxy');
const Path = require('path');
const Bundler = require('parcel-bundler');

const backendUrl = 'http://localhost:8180';
const frontendUrl = 'http://localhost:1234';

const options = {};

const entryFiles = Path.join(__dirname, 'src', 'index.html');

const bundler = new Bundler(entryFiles, options);

bundler.serve();

const proxy = createProxyServer();

const server = createServer((req, res) => {
  if (req.url.includes('/api/')) {
    proxy.web(req, res, {
      target: backendUrl,
      changeOrigin: true,
      autoRewrite: true,
    });
  } else {
    proxy.web(req, res, {
      target: frontendUrl,
      ws: true,
    });
  }
});

console.log('Dev proxy listening at: http://localhost:5050/');
server.listen(5050);
