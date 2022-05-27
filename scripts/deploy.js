async function main() {
    const BenjiNFT = await ethers.getContractFactory("BenjiNFT");
    // Start deployment, returning a promise that resolves to a contract object
    const benjiNFT = await BenjiNFT.deploy("BenjiNFT", "BJI", "https://gateway.pinata.cloud/ipfs/QmSRkeByp7UDLMt8XafN9iGPzXiSNXXJW5Poxg33DVwrPU");
    await benjiNFT.deployed();
    console.log("Contract deployed to address:", benjiNFT.address);
  };
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    });