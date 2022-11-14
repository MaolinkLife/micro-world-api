module.exports = function (app) {
    /*
     * Routes
     */
    app.use("/items", require("./routes/items.route"));
    app.use("/orders", require("./routes/orders.route"));
    app.use("/login", require("./routes/auth.route"));

    // app.route('/api/v1/users')
    // app.route('/api/users')
    // app.route('/api/v2/users')
};
