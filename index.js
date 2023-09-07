const express = require("express");
const app = express();
const ethRouter = require("./src/router/eth_router");
const web3eth = require("./src/router/we3_eth_router");

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/eth", ethRouter);
app.use("/web3-eth", web3eth);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
