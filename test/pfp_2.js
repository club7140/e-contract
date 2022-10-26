const PFP = artifacts.require("PFP");
const truffleAssert = require('truffle-assertions');

contract("PFP", async (accounts) => {
  it("total can be minted", async () => {
    let pfp = await PFP.deployed();
    let total = 79;
    await pfp.setTotal(total, {from: accounts[0]})
    await pfp.claimNFT({from: accounts[0]});
    await pfp.claimNFT({from: accounts[0]});

    let nextTokenID = await pfp.next_tokenID.call()
    assert.equal(nextTokenID, total, "claimNFT not work");

    let balance = await pfp.balanceOf.call(accounts[0]);
    assert.equal(balance, total, "claimNFT not work");
  });

  it("can't mint exceeds total", async () => {
    let pfp = await PFP.deployed();
    await truffleAssert.reverts(pfp.claimNFT({from: accounts[0]}), "All block has been minted.");
  });
})