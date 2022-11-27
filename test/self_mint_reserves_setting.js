const TurfPlot = artifacts.require("TurfPlot");
const truffleAssert = require('truffle-assertions');

contract("TurfPlot", async (accounts) => {
  it("selfMintReserves can't add by normal user", async () => {
    let turfPlot = await TurfPlot.deployed();
    await truffleAssert.reverts(turfPlot.addSelfMintReserves(1, {from: accounts[1]}), "Ownable: caller is not the owner");
  });

  it("selfMintReserves can be added by owner", async () => {
    let turfPlot = await TurfPlot.deployed();
    let totalReservesBefore = await turfPlot.totalReserves.call();
    let selfMintReservesBefore = await turfPlot.selfMintReserves.call();
    let num = 1
    await turfPlot.addSelfMintReserves(num);
    let selfMintReservesAfter = await turfPlot.selfMintReserves.call();
    let totalReservesAfter = await turfPlot.totalReserves.call();
    assert.equal(selfMintReservesAfter, parseInt(selfMintReservesBefore) + num, "selfMintReserves has a wrong num");
    assert.equal(totalReservesAfter, parseInt(totalReservesBefore) - num, "totalReserves has a wrong num");
  });

  it("selfMintReserves can't exceed totalReserves", async () => {
    let turfPlot = await TurfPlot.deployed();
    let totalReserves = await turfPlot.totalReserves.call();
    await truffleAssert.reverts(turfPlot.addSelfMintReserves(parseInt(totalReserves) + 1), "The number of shelves exceeds the number of stocks");
  });

  it("selfMintReserves can't sub by normal user", async () => {
    let turfPlot = await TurfPlot.deployed();
    await truffleAssert.reverts(turfPlot.subSelfMintReserves(1, {from: accounts[1]}), "Ownable: caller is not the owner");
  });

  it("selfMintReserves can sub by owner", async () => {
    let turfPlot = await TurfPlot.deployed();
    let selfMintReservesBefore = await turfPlot.selfMintReserves.call();
    let totalReservesBefore = await turfPlot.totalReserves.call();
    let num = parseInt(selfMintReservesBefore);
    await turfPlot.subSelfMintReserves(num);
    let selfMintReservesAfter = await turfPlot.selfMintReserves.call();
    let totalReservesAfter = await turfPlot.totalReserves.call();
    assert.equal(selfMintReservesAfter, parseInt(selfMintReservesBefore) - num, "selfMintReserves has a wrong num");
    assert.equal(totalReservesAfter, parseInt(totalReservesBefore) + num, "totalReserves has a wrong num");
  });

  it("selfMintReserves can't sub exceed itself", async () => {
    let turfPlot = await TurfPlot.deployed();
    let num = 1
    await truffleAssert.reverts(turfPlot.subSelfMintReserves(num), "The number of removals exceeds the total");
  });
})