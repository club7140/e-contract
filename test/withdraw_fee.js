const TurfPlot = artifacts.require("TurfPlot");
const truffleAssert = require('truffle-assertions');

contract("TurfPlot", async (accounts) => {
  it("mint will produce fee", async () => {
    let turfPlot = await TurfPlot.deployed();
    let num = 20;
    await turfPlot.addNswapMintReserves(num);
    let total_mint = 3;
    await turfPlot.nswapPublicMint(total_mint, {value: total_mint * 1e17, from: accounts[1]})
    await turfPlot.nswapPublicMint(total_mint, {value: total_mint * 1e17, from: accounts[2]})
    let balance = await web3.eth.getBalance(turfPlot.address);
    assert.equal(balance, 2 * total_mint * 1e17, "mint fee not work");
  });

  it("normal account can't withdraw fee", async () => {
    let turfPlot = await TurfPlot.deployed();
    await truffleAssert.reverts(turfPlot.withdrawFee({from: accounts[1]}), "Ownable: caller is not the owner");
  });

  it("only owner can withdraw fee", async () => {
    let turfPlot = await TurfPlot.deployed();
    await turfPlot.withdrawFee({from: accounts[0]});
    let balance = await web3.eth.getBalance(turfPlot.address);
    assert.equal(balance, 0, "withdraw fee not work");
  });
})