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

  //  reserves NFT num exceeds allowed
  it("reservesClaimNFT stag21", async () => {
    let block = await Block.deployed();
    await truffleAssert.reverts(block.reservesClaimNFT({from: accounts[0]}), "The claimed reservation block exceeds the total");
  });


  // it("add whitelist", async () => {
  //   let blindbox = await BlindBox.deployed();
  //   await blindbox.addWhitelist([accounts[1]]);
     
  //   let ok = await blindbox.isInWhitelist.call(accounts[1])
  //   assert.equal(ok, true, "add whitelist failed");
  // });

  // it("mint success when user in whitelist", async () => {
  //   let blindbox = await BlindBox.deployed();
  //   await blindbox.claimNFT({ from: accounts[1] });
  //   let ok = await blindbox.claimStatus.call(accounts[1]);
  //   assert.equal(ok, true, "account[1] mint failed");
  // });
  
  // it("token0 token uri is blindTokenURI", async () => {
  //   let blindbox = await BlindBox.deployed();
  //   let token0URI = await blindbox.tokenURI(0);
  //   const BlindTokenURI = "https://muadao-nft.s3.ap-southeast-1.amazonaws.com/blindbox_unopen.png";
  //   assert.equal(token0URI, BlindTokenURI, "token0 URI is not equal BlindTokenURI");
  // });
   
  // it("set token0 uri", async () => {
  //   let blindbox = await BlindBox.deployed();
  //   await blindbox.setTokenURI(0, "token0URI");
  //   let token0URI = await blindbox.tokenURI(0);
  //   const BlindTokenURI = "https://muadao-nft.s3.ap-southeast-1.amazonaws.com/blindbox_unopen.png";
  //   assert.equal(token0URI, BlindTokenURI, "token0 URI is not equal BlindTokenURI");
  // });

  // it("open blindbox", async () => {
  //   let blindbox = await BlindBox.deployed();
  //   await blindbox.setBlindBoxOpened(true);
  //   let token0URI = await blindbox.tokenURI(0);
  //   assert.equal(token0URI, "token0URI", "token0 URI is not equal token0URI");
  // });
})