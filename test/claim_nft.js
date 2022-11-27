const TurfPlot = artifacts.require("TurfPlot");
const truffleAssert = require('truffle-assertions');

contract("TurfPlot", async (accounts) => {
  it("can't claimNFT if freeMintReserves not available", async () => {
    let turfPlot = await TurfPlot.deployed();
    await truffleAssert.reverts(turfPlot.claimNFT(), "Currently no turf plot available");
  });

  it("can claimNFT if freeMintReserves available", async () => {
    let turfPlot = await TurfPlot.deployed();
    let num = 10;
    await turfPlot.addFreeMintReserves(num);
    await turfPlot.claimNFT({value: 1e17, from: accounts[1]})
    let balance = await turfPlot.balanceOf(accounts[1]);
    assert.equal(balance, 1, "claimNFT failed");
  });

  it("can't claimNFT if value not enough", async () => {
    let turfPlot = await TurfPlot.deployed();
    await truffleAssert.reverts(turfPlot.claimNFT({value: 1e10, from: accounts[1]}), "Your deposit value is less than price");
  });
})