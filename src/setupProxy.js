const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/cardactivation',
    createProxyMiddleware({
      target: 'https://us-west2-connexinterview.cloudfunctions.net',
      changeOrigin: true,
    })
  );
}