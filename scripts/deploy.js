async function main() {
    const BenjiNFT = await ethers.getContractFactory("BenjiNFT");
    // Start deployment, returning a promise that resolves to a contract object
    const benjiNFT = await BenjiNFT.deploy("BenjiNFT", "BJI");
    await benjiNFT.deployed();
    console.log("Contract deployed to address:", benjiNFT.address);
  };
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    });