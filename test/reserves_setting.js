const TurfPlot = artifacts.require("TurfPlot");
const truffleAssert = require('truffle-assertions');

contract("TurfPlot", async (accounts) => {
  it("add Reserves will sub totalReserves", async () => {
    let turfPlot = await TurfPlot.deployed();
    let totalReservesBefore = await turfPlot.totalReserves.call();
    let addFreeMintReserves = 10;
    await turfPlot.addFreeMintReserves(addFreeMintReserves);
    let addNswapMintReserves = 15;
    await turfPlot.addNswapMintReserves(addNswapMintReserves);
    let addSelfMintReserves = 25;
    await turfPlot.addSelfMintReserves(addSelfMintReserves);
    let totalReservesAfter = await turfPlot.totalReserves.call();
    let totalAddReserves = addFreeMintReserves + addNswapMintReserves + addSelfMintReserves;
    assert.equal(totalReservesAfter, totalReservesBefore - totalAddReserves, "totalReserves has a wrong num");
  });
})