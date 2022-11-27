const TurfPlot = artifacts.require("TurfPlot");
const truffleAssert = require('truffle-assertions');

contract("TurfPlot", async (accounts) => {
  it("can't selfClaimNFT by not owner", async () => {
    let turfPlot = await TurfPlot.deployed();
    await truffleAssert.reverts(turfPlot.selfClaimNFT({from: accounts[1]}), "Ownable: caller is not the owner");
  });

  it("can't selfClaimNFT while selfMintReserves not available", async () => {
    let turfPlot = await TurfPlot.deployed();
    await truffleAssert.reverts(turfPlot.selfClaimNFT(), "Currently no turf plot available");
  });

  it("can selfClaimNFT while selfMintReserves is ok", async () => {
    let turfPlot = await TurfPlot.deployed();
    let num = 80;
    await turfPlot.addSelfMintReserves(num);
    await turfPlot.selfClaimNFT();
    let balance = await turfPlot.balanceOf.call(accounts[0]);
    assert.equal(balance, 1, "selfClaimNFT failed");

    let selfMintReserves = await turfPlot.selfMintReserves.call();
    assert.equal(selfMintReserves, num - 1, "selfClaimNFT failed");
  });

  it("can batchSelfClaimNFT 50 ifselfMintReserves >= 50 ", async () => {
    let turfPlot = await TurfPlot.deployed();
    let selfMintReservesBefore = await turfPlot.selfMintReserves.call();
    let balanceBefore = await turfPlot.balanceOf.call(accounts[0]);
    await turfPlot.batchSelfClaimNFT();
    let balanceAfter = await turfPlot.balanceOf.call(accounts[0]);
    assert.equal(parseInt(balanceAfter), parseInt(balanceBefore) + 50, "batchSelfClaimNFT failed");

    let selfMintReservesAfter = await turfPlot.selfMintReserves.call();
    assert.equal(parseInt(selfMintReservesAfter), parseInt(selfMintReservesBefore) - 50, "batchSelfClaimNFT failed");
  });

  it("can batchSelfClaimNFT all ifselfMintReserves < 50 ", async () => {
    let turfPlot = await TurfPlot.deployed();
    let selfMintReservesBefore = await turfPlot.selfMintReserves.call();
    let balanceBefore = await turfPlot.balanceOf.call(accounts[0]);
    await turfPlot.batchSelfClaimNFT();
    let balanceAfter = await turfPlot.balanceOf.call(accounts[0]);
    assert.equal(parseInt(balanceAfter), parseInt(balanceBefore) + 29, "batchSelfClaimNFT failed");

    let selfMintReservesAfter = await turfPlot.selfMintReserves.call();
    assert.equal(parseInt(selfMintReservesAfter), parseInt(selfMintReservesBefore) - 29, "batchSelfClaimNFT failed");
  });
})