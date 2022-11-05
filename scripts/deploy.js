const { ethers } = require("hardhat");

async function main() {
  const AbhishekToken = await ethers.getContractFactory("Abhishek");
  const deployContract = await AbhishekToken.deploy();
  await deployContract.deployed();

  console.log("Deployed Smart contract address", deployContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
