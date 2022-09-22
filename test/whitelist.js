const BlindBox = artifacts.require("BlindBox");
const truffleAssert = require('truffle-assertions');

contract("blindbox", async (accounts) => {
   it("mint failed when sender not in whitelist", async () => {
     let blindbox = await BlindBox.deployed();
     await truffleAssert.reverts(blindbox.claimNFT({ from: accounts[1] }), "The user is not in whitelist.");
  });
  
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

  it("mint failed when account[2] not in whitelist", async () => {
    let blindbox = await BlindBox.deployed();
    await truffleAssert.reverts(blindbox.claimNFT( { from: accounts[2] }), "The user is not in whitelist.");
  });

  it("add whitelist", async () => {
     let blindbox = await BlindBox.deployed();
     await blindbox.addWhitelist([accounts[3]]);
     
     let ok = await blindbox.isInWhitelist.call(accounts[3])
     assert.equal(ok, true, "add whitelist failed");
  });

  it("remove whitelist", async () => {
     let blindbox = await BlindBox.deployed();
     await blindbox.removeWhitelist([accounts[3]]);
     
     let ok = await blindbox.isInWhitelist.call(accounts[3])
     assert.equal(ok, false, "remove whitelist failed");
  });

   it("mint failed when account[3] not in whitelist", async () => {
     let blindbox = await BlindBox.deployed();
     await truffleAssert.reverts(blindbox.claimNFT({ from: accounts[3] }), "The user is not in whitelist.");
  });
});