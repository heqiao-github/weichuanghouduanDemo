const proxy = require("http-proxy-middleware");
console.log(proxy);

module.exports = function(app) {
  app.use(
    proxy("0", {
      target: "http://localhost:8080/",
      changeOrigin: true
    })
  );

};