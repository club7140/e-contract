const Block = artifacts.require("Block");

module.exports = function(deployer) {
  deployer.deploy(Block);
};
