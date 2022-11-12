const express = require('express');
const orders = require('../services/orders');
const router = new express.Router();
 
router.get('/', async (req, res, next) => {
  let options = { 
    "list": req.query.list,
  };


  try {
    const result = await orders.getOrders(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.post('/', async (req, res, next) => {
  let options = { 
  };

  options.postOrdersInlineReqJson = req.body;

  try {
    const result = await orders.postOrders(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:orderId', async (req, res, next) => {
  let options = { 
    "orderId": req.params.orderId,
  };


  try {
    const result = await orders.getOrdersOrderId(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;