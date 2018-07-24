let CubToken = artifacts.require("./CubToken.sol");

module.exports = function(deployer) {
  deployer.deploy(CubToken);
};