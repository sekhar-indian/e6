const path = require('path');

const express = require('express');

const rootDir = require('../conrolers/products');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',rootDir.getdata1);

// /admin/add-product => POST
router.post('/add-product',rootDir.getdata2);

exports.routes = router;

