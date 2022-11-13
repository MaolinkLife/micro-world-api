module.exports = function (app) {
    /*
     * Routes
     */
    app.use("/items", require("./routes/items.route"));
    app.use("/orders", require("./routes/orders.route"));
};
