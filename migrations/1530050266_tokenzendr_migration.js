let TokenZendR = artifacts.require("./TokenZendR.sol");

module.exports = function(deployer) {
    deployer.deploy(TokenZendR);
};