const TurfPlot = artifacts.require("TurfPlot");
const PFP = artifacts.require("PFP");

module.exports = function(deployer) {
  deployer.deploy(TurfPlot);
  deployer.deploy(PFP);
};
