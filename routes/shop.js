const path = require('path');

const express = require('express');

const rootDir = require('../conrolers/products');
const adminData = require('./admin');

const router = express.Router();

router.get('/', rootDir.getdata3);

module.exports = router;
