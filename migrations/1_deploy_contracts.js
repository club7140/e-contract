const Block = artifacts.require("Block");
const PFP = artifacts.require("PFP");

module.exports = function(deployer) {
  deployer.deploy(Block);
  deployer.deploy(PFP);
};
