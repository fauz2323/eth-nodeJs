const { Web3 } = require("web3");

const createAddress = async (req, res, next) => {
  const web3 = new Web3(new Web3.providers.HttpProvider("YOUR_NODE_HTTP_URL"));

  let dataAccount = await web3.eth.accounts.create();
  res.status(200).json({
    status: "success",
    data: dataAccount,
  });
};

module.exports = {
  createAddress,
};
