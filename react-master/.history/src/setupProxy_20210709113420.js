const proxy = require("http-proxy-middleware");

debugger
module.exports = function(app) {
  app.use(
    proxy.proxy is not a function("/api/**", {
      target: "http://localhost:8080/",
      changeOrigin: true
    })
  );

};