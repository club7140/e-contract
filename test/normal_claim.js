const Block = artifacts.require("Block");
const truffleAssert = require('truffle-assertions');

contract("block", async (accounts) => {
  it("reservesClaimNFT stag1", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 50, "reservesClaimNFT not work");
  });
  it("reservesClaimNFT stag2", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 100, "reservesClaimNFT not work");
  });


  it("reservesClaimNFT stag3", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 150, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT stag4", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 200, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT stag5", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 250, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT stag6", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 300, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT stag7", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 350, "reservesClaimNFT not work");
  });


  it("reservesClaimNFT stag8", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 400, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT stag9", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 450, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT stag10", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 500, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT stag11", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 550, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT stag12", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 600, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT stag13", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 650, "reservesClaimNFT not work");
  });


  it("reservesClaimNFT stag14", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 700, "reservesClaimNFT not work");
  });


  it("reservesClaimNFT stag15", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 750, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT stag16", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 800, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT stag17", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 850, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT stag18", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 900, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT stag19", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 950, "reservesClaimNFT not work");
  });

  it("reservesClaimNFT stag20", async () => {
    let block = await Block.deployed();
    await block.reservesClaimNFT({from: accounts[0]});
     
    let nextTokenID = await block.next_tokenID.call()
    assert.equal(nextTokenID, 1000, "reservesClaimNFT not work");
  });

  it("normal claim don't have limit", async () => {
    let block = await Block.deployed();
    await block.claimNFT({value: 1e17, from: accounts[1]});
    await block.claimNFT({value: 1e17, from: accounts[1]});
    await block.claimNFT({value: 1e17, from: accounts[1]});
    await block.claimNFT({value: 1e17, from: accounts[1]});
    await block.claimNFT({value: 1e17, from: accounts[1]});
    await block.claimNFT({value: 1e17, from: accounts[1]});
    let balance = await block.balanceOf.call(accounts[1]);
    assert.equal(balance, 6, "normal claim not work");
  });
})