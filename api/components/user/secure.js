const auth = require("../../../auth");

module.exports = function checkAuth(action) {
  function middleware(req, res, next) {
    let owner;
    switch (action) {
      case "isAdmin":
        auth.check.isAdmin(req);
        next();
        break;
      default:
        next();
    }
  }
  return middleware;
};
