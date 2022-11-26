const TurfPlot = artifacts.require("TurfPlot");
const truffleAssert = require('truffle-assertions');

contract("TurfPlot", async (accounts) => {
  it("nswapMintReserves can't add by normal user", async () => {
    let turfPlot = await TurfPlot.deployed();
    await truffleAssert.reverts(turfPlot.addNswapMintReserves(1, {from: accounts[1]}), "Ownable: caller is not the owner");
  });

  it("nswapMintReserves can add by owner", async () => {
    let turfPlot = await TurfPlot.deployed();
    let totalReservesBefore = await turfPlot.totalReserves.call();
    let nswapMintReservesBefore = await turfPlot.nswapMintReserves.call();
    let num = 1
    await turfPlot.addNswapMintReserves(num);
    let nswapMintReservesAfter = await turfPlot.nswapMintReserves.call();
    let totalReservesAfter = await turfPlot.totalReserves.call();
    assert.equal(nswapMintReservesAfter, parseInt(nswapMintReservesBefore) + num, "nswapMintReserves has a wrong num");
    assert.equal(totalReservesAfter, parseInt(totalReservesBefore) - num, "totalReserves has a wrong num");
  });

  it("nswapMintReserves can't exceed totalReserves", async () => {
    let turfPlot = await TurfPlot.deployed();
    let totalReserves = await turfPlot.totalReserves.call();
    await truffleAssert.reverts(turfPlot.addNswapMintReserves(parseInt(totalReserves) + 1), "The number of shelves exceeds the number of stocks");
  });
})