const Block = artifacts.require("Block");
const truffleAssert = require('truffle-assertions');

contract("block", async (accounts) => {
  it("reservesClaimNFT with correct number", async () => {
    let block = await Block.deployed();
    let reserves = 121;
    await block.setReserves(reserves, {from: accounts[0]});
    await block.reservesClaimNFT({from: accounts[0]});
    await block.reservesClaimNFT({from: accounts[0]});
    await block.reservesClaimNFT({from: accounts[0]});
    
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, reserves, "reservesClaimNFT not work");

    let balance = await block.balanceOf.call(accounts[0]);
    assert.equal(balance, reserves, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT can't exceeds limit", async () => {
    let block = await Block.deployed();
    await truffleAssert.reverts(block.reservesClaimNFT({from: accounts[0]}), "The claimed reservation block exceeds the total");
  });
})