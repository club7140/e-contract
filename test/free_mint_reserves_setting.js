const TurfPlot = artifacts.require("TurfPlot");
const truffleAssert = require('truffle-assertions');

contract("TurfPlot", async (accounts) => {
  it("freeMintReserves can't add by normal user", async () => {
    let turfPlot = await TurfPlot.deployed();
    await truffleAssert.reverts(turfPlot.addFreeMintReserves(1, {from: accounts[1]}), "Ownable: caller is not the owner");
  });

  it("freeMintReserves can be added by owner", async () => {
    let turfPlot = await TurfPlot.deployed();
    let totalReservesBefore = await turfPlot.totalReserves.call();
    let freeMintReservesBefore = await turfPlot.freeMintReserves.call();
    let num = 1
    await turfPlot.addFreeMintReserves(num);
    let freeMintReservesAfter = await turfPlot.freeMintReserves.call();
    let totalReservesAfter = await turfPlot.totalReserves.call();
    assert.equal(freeMintReservesAfter, parseInt(freeMintReservesBefore) + num, "freeMintReserves has a wrong num");
    assert.equal(totalReservesAfter, parseInt(totalReservesBefore) - num, "totalReserves has a wrong num");
  });

  it("freeMintReserves can't exceed totalReserves", async () => {
    let turfPlot = await TurfPlot.deployed();
    let totalReserves = await turfPlot.totalReserves.call();
    await truffleAssert.reverts(turfPlot.addFreeMintReserves(parseInt(totalReserves) + 1), "The number of shelves exceeds the number of stocks");
  });

  it("freeMintReserves can't sub by normal user", async () => {
    let turfPlot = await TurfPlot.deployed();
    await truffleAssert.reverts(turfPlot.subFreeMintReserves(1, {from: accounts[1]}), "Ownable: caller is not the owner");
  });

  it("freeMintReserves can sub by owner", async () => {
    let turfPlot = await TurfPlot.deployed();
    let freeMintReservesBefore = await turfPlot.freeMintReserves.call();
    let totalReservesBefore = await turfPlot.totalReserves.call();
    let num = parseInt(freeMintReservesBefore);
    await turfPlot.subFreeMintReserves(num);
    let freeMintReservesAfter = await turfPlot.freeMintReserves.call();
    let totalReservesAfter = await turfPlot.totalReserves.call();
    assert.equal(freeMintReservesAfter, parseInt(freeMintReservesBefore) - num, "freeMintReserves has a wrong num");
    assert.equal(totalReservesAfter, parseInt(totalReservesBefore) + num, "totalReserves has a wrong num");
  });

  it("freeMintReserves can't sub exceed itself", async () => {
    let turfPlot = await TurfPlot.deployed();
    let num = 1
    await truffleAssert.reverts(turfPlot.subFreeMintReserves(num), "The number of removals exceeds the total");
  });
})