const proxy = require("http-proxy-middleware");
console.log(proxy);
de
module.exports = function(app) {
  app.use(
    proxy("/api/**", {
      target: "http://localhost:8080/",
      changeOrigin: true
    })
  );

};