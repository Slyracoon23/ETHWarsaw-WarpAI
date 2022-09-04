const Arweave = require('arweave');
const { LoggerFactory, WarpFactory, Warp } = require('warp-contracts');

LoggerFactory.INST.logLevel('info');
export const warp = WarpFactory.forMainnet();

// you don't need to initialize Arweave instance manually - just use the Arweave instance from Warp
export const arweave = warp.arweave;