const proxy = require("http-proxy-middleware");

debugger
module.exports = function(app) {
  app.use(
    proxy.createProxyMiddleware ("/api/**", {
      target: "http://localhost:8090/",
      changeOrigin: true
    })
  );

};