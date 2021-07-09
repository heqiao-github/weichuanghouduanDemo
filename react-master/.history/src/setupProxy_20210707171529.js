const proxy = require("http-proxy-middleware");
console.log(proxy);

module.exports = function(app) {
  // app.use(
  //   proxy("http://localhost:3000", {
  //     target: "http://baidu.com/",
  //     changeOrigin: true
  //   })
  // );
  // app.use(
  //   proxy.createProxyMiddleware("/fans/**", {
  //     target: "https://easy-mock.com/mock/5c0f31837214cf627b8d43f0/",
  //     changeOrigin: true
  //   })
  // );
};