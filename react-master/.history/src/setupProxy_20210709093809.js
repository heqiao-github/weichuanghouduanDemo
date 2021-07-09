const proxy = require("http-proxy-middleware");
console.log(proxy);

module.exports = function(app) {
  app.use(
    proxy("http://localhost:3000", {
      target: "http://localhost:8080/",
      changeOrigin: true
    })
  );

};