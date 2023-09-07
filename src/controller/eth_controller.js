var ethers = require("ethers");
var crypto = require("crypto");

const createAddress = async (req, res, next) => {
  // Generate a new random Ethereum wallet
  var id = crypto.randomBytes(32).toString("hex");
  var privateKey = "0x" + id;
  var wallet = new ethers.Wallet(privateKey);
  res.status(200).json({
    address: wallet.address,
    privateKey: privateKey,
  });
};

module.exports = {
  createAddress,
};
