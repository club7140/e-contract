const PFP = artifacts.require("PFP");
const truffleAssert = require('truffle-assertions');

contract("PFP", async (accounts) => {
  it("can't be minted by normal account", async () => {
    let pfp = await PFP.deployed();
    await truffleAssert.reverts(pfp.claimNFT({from: accounts[1]}), "Ownable: caller is not the owner");
  });

  it("can be minted by owner account", async () => {
    let pfp = await PFP.deployed();
    await pfp.claimNFT({from: accounts[0]});
    let nextTokenID = await pfp.next_tokenID.call()
    assert.equal(nextTokenID, 50, "claimNFT not work");
  });
})