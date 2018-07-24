let BearToken = artifacts.require("./BearToken.sol");

module.exports = function(deployer) {
  deployer.deploy(BearToken);
};