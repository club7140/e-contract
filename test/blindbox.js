const BlindBox = artifacts.require("BlindBox");
const truffleAssert = require('truffle-assertions');

contract("blindbox", async (accounts) => {
  it("add whitelist", async () => {
    let blindbox = await BlindBox.deployed();
    await blindbox.addWhitelist([accounts[1]]);
     
    let ok = await blindbox.isInWhitelist.call(accounts[1])
    assert.equal(ok, true, "add whitelist failed");
  });

  it("mint success when user in whitelist", async () => {
    let blindbox = await BlindBox.deployed();
    await blindbox.claimNFT({ from: accounts[1] });
    let ok = await blindbox.claimStatus.call(accounts[1]);
    assert.equal(ok, true, "account[1] mint failed");
  });
})