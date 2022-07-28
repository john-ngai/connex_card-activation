const { createProxyMiddleware } = require('http-proxy-middleware');

// Enable cross-origin resource sharing (CORS) for the listed targets & paths.
module.exports = function(app) {
  app.use(
    '/cardactivation',
    createProxyMiddleware({
      target: 'https://us-west2-connexinterview.cloudfunctions.net',
      changeOrigin: true,
    })
  );
}