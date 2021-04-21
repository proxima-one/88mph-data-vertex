

const HttpProvider = require('ethjs-provider-http')
const PollingBlockTracker = require('eth-block-tracker')

const provider = new HttpProvider('https://mainnet.infura.io')
const blockTracker = new PollingBlockTracker({ provider })
blockTracker.on('latest', console.log)
