const {deployedContracts} = require('./deployed-contracts.js');
const {warp, arweave} = require('./warpInterface.js');


async function startWarpContact() {
console.log("Entered startWarpContact");
// create Wallet
const wallet = await arweave.wallets.generate();
walletAddress = await arweave.wallets.getAddress(wallet);
console.log(`Wallet address: ${walletAddress}`);

// Interacting with the contract
const ontract = warp
  .pst(deployedContracts.fc)
  .connect(wallet);

  console.log(`contract: ${contract}`);

  return contract;
}



 async function runWarpFunction() {
    const viewState = await contract.viewState({function: 'brainFn'});

    return viewState.result;

}

module.exports = {startWarpContact: startWarpContact, runWarpFunction: runWarpFunction};
