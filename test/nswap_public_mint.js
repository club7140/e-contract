const TurfPlot = artifacts.require("TurfPlot");
const truffleAssert = require('truffle-assertions');

contract("TurfPlot", async (accounts) => {
  it("can't nswapPublicMint if nswapMintReserves not available", async () => {
    let turfPlot = await TurfPlot.deployed();
    await truffleAssert.reverts(turfPlot.nswapPublicMint(1), "Currently no enough turf plot available");
  });

  it("can nswapPublicMint if nswapMintReserves available", async () => {
    let turfPlot = await TurfPlot.deployed();
    let num = 20;
    await turfPlot.addNswapMintReserves(num);
    let total_mint = 2;
    await turfPlot.nswapPublicMint(total_mint, {value: total_mint * 1e17, from: accounts[1]})
    let balance = await turfPlot.balanceOf(accounts[1]);
    assert.equal(balance, total_mint, "nswapPublicMint failed");
  });
})