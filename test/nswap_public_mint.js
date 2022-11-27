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
    let balance = await turfPlot.balanceOf.call(accounts[1]);
    assert.equal(balance, total_mint, "nswapPublicMint failed");
    let nswapTotalMintedData = await turfPlot.nswapTotalMinted.call();
    assert.equal(total_mint, nswapTotalMintedData[0], "nswapTotalMinted has a wrong num");

    let nswapUserCanMintNumData = await turfPlot.nswapUserCanMintNum.call(accounts[1]);
    assert.equal(3, nswapUserCanMintNumData[0], "nswapUserCanMintNum has a wrong num");
  });

  it("can't nswapPublicMint if deposit value not enough", async () => {
    let turfPlot = await TurfPlot.deployed();
    let total_mint = 1
    await truffleAssert.reverts(turfPlot.nswapPublicMint(total_mint, {from: accounts[1]}), "Your deposit value is less than count * price");
  });

  it("can't nswapPublicMint if exceed the limit", async () => {
    let turfPlot = await TurfPlot.deployed();
    let total_mint = 6
    await truffleAssert.reverts(turfPlot.nswapPublicMint(total_mint, {value: total_mint * 1e17, from: accounts[2]}), "Your claim have exceeded the limit");
  });

  it("can nswapPublicMint with discount price if in whitelist", async () => {
    let turfPlot = await TurfPlot.deployed();
    await turfPlot.addWhitelist([accounts[3]]);
    let total_mint = 1;
    await turfPlot.nswapPublicMint(total_mint, {value: total_mint * 5e16, from: accounts[3]})
    let balance = await turfPlot.balanceOf.call(accounts[3])
    assert.equal(balance, total_mint, "nswapPublicMint failed");
  });
})