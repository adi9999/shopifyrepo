/**
 * Created by Admin on 7/25/2016.
 */

var mongoose = require('mongoose');

    // we're connected!

    var shopSchema = new mongoose.Schema({},{
        strict:false
    });
    

    var clcShopDetail = mongoose.model('clcShopDetails', shopSchema);

// make this available to our users in our Node applications
    module.exports = clcShopDetail;











