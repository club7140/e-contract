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
  
  it("token0 token uri is blindTokenURI", async () => {
    let blindbox = await BlindBox.deployed();
    let token0URI = await blindbox.tokenURI(0);
    const BlindTokenURI = "https://muadao-nft.s3.ap-southeast-1.amazonaws.com/blindbox_unopen.png";
    assert.equal(token0URI, BlindTokenURI, "token0 URI is not equal BlindTokenURI");
  });
   
  it("set token0 uri", async () => {
    let blindbox = await BlindBox.deployed();
    await blindbox.setTokenURI(0, "token0URI");
    let token0URI = await blindbox.tokenURI(0);
    const BlindTokenURI = "https://muadao-nft.s3.ap-southeast-1.amazonaws.com/blindbox_unopen.png";
    assert.equal(token0URI, BlindTokenURI, "token0 URI is not equal BlindTokenURI");
  });

  it("open blindbox", async () => {
    let blindbox = await BlindBox.deployed();
    await blindbox.setBlindBoxOpened(true);
    let token0URI = await blindbox.tokenURI(0);
    assert.equal(token0URI, "token0URI", "token0 URI is not equal token0URI");
  });
})