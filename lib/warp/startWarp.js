const {deployedContracts} = require('./deployed-contracts.js');
const {warp, arweave} = require('./warpInterface.js');


async function startWarpContact() {
// create Wallet
const wallet = await arweave.wallets.generate();
const walletAddress = await arweave.wallets.getAddress(wallet);

// Interacting with the contract
const contract = warp
  .pst(deployedContracts.fc)
  .connect(wallet);

}


async function runWarpFunction(warpContract) {
    const viewState = await pst.viewState<any, any>({function: 'brainFn'});

    return viewState.result;

}