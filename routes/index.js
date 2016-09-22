var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  ////Check if App installed ///////
  /// if req.query.shop exist in db than res.redirect('https://'+shopifyRouter.shop+'/admin/apps'); 
  /// else res.redirect('https://'+shopifyRouter.shop+'/shopify');
  /// and comment below line res.render('index', { title: 'Express' });
  //////////////////////////////////
  res.render('index', { title: 'Express' });
});

module.exports = router;
