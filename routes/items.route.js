const express = require("express");
const items = require("../services/items");
const router = new express.Router();

router.get("/", async (req, res, next) => {
    let options = {
        list: req.query.list,
    };

    try {
        const result = await items.getItems(options);
        res.status(result.status || 200).send(result.data);
    } catch (err) {
        return res.status(500).send({
            error: err || "Something went wrong.",
        });
    }
});

router.get("/:itemId", async (req, res, next) => {
    let options = {
        itemId: req.params.itemId,
    };

    try {
        const result = await items.getItemsItemId(options);
        res.status(result.status || 200).send(result.data);
    } catch (err) {
        return res.status(500).send({
            error: err || "Something went wrong.",
        });
    }
});

module.exports = router;
