const TurfPlot = artifacts.require("TurfPlot");
const truffleAssert = require('truffle-assertions');

contract("TurfPlot", async (accounts) => {
  it("can't claimNFT if freeMintReserves not available", async () => {
    let turfPlot = await TurfPlot.deployed();
    await truffleAssert.reverts(turfPlot.claimNFT(), "Currently no turf plot available");
  });

  it("can claimNFT if freeMintReserves available", async () => {
    let turfPlot = await TurfPlot.deployed();
    let num = 20;
    await turfPlot.addFreeMintReserves(num);
    await turfPlot.claimNFT({value: 1e17, from: accounts[1]})
    let balance = await turfPlot.balanceOf(accounts[1]);
    assert.equal(balance, 1, "claimNFT failed");
  });

  it("can't claimNFT if value not enough", async () => {
    let turfPlot = await TurfPlot.deployed();
    await truffleAssert.reverts(turfPlot.claimNFT({value: 1e10, from: accounts[1]}), "Your deposit value is less than price");
  });

  it("can't claimNFT exceed limit", async () => {
    let turfPlot = await TurfPlot.deployed();
    let limit = await turfPlot.claimLimit.call();
    for(let i = 0; i < parseInt(limit); i++){
      await turfPlot.claimNFT({value: 1e17, from: accounts[2]});
    }
    let balance = await turfPlot.balanceOf(accounts[2]);
    assert.equal(balance, 5, "claimNFT failed");
    await truffleAssert.reverts(turfPlot.claimNFT({value: 1e17, from: accounts[2]}), "Your claim have exceeded the limit");
  });

  it("can claimNFT with discount price if in whitelist", async () => {
    let turfPlot = await TurfPlot.deployed();
    await turfPlot.addWhitelist([accounts[3]]);
    await turfPlot.claimNFT({value: 5e16, from: accounts[3]})
    let balance = await turfPlot.balanceOf(accounts[3]);
    assert.equal(balance, 1, "whitelist claimNFT failed");
  });
})