route = require("./routes");
//Default function that will bootstrap the routes and link it with controllers
module.exports = (index, router) => {
    //Initialize Routes
    route.appRoute(router);
};