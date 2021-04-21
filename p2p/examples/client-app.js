const parallel = require('async/parallel')
const Ora = require('../ora-node/lib/ora-node')
//const cardanoClient = require('./cardano-client')
const Pushable = require('pull-pushable')
const p = Pushable()
const pify = require('pify')
const pull = require('pull-stream')
const client = require('./test-client')
'use strict'

console.log("Starting...")
var created = false
const bootstrap = [
'/ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ'

]


const node = await Ora.createNode({identity: client, addrs: '/ip4/0.0.0.0/tcp/5900', bootstrap:  bootstrap})
console.log(node)

/*
 Continuous Polling of data and data polling

setInterval(function() {
  if (created) {
    //request for update should be a list of functions
    console.log(node.peerInfo)
    Ora.push(OraNode, cardanoClient.server, 'cardano/server', ['api/txs/last'])
  }
}, 2000)


*/

/*
  Then needs something that mimmics a http request/push request
*/
function send(data, protocol) {
  if (created) {
    //Ora.push(OraNode, cardanoClient.server, protocol, data)
  }
}

module.exports = {
  node,
  created,
  send
}
