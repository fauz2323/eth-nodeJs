const express = require("express");
const { createAddress } = require("../controller/web3_eth_controller");
const route = express.Router();

route.get("/new", createAddress);

module.exports = route;
