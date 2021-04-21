
/*
Constructs an Ora instance
*/

const NodeMaker = require('./ora-node/lib')
const Ora = require('./ora')
const assert = require('assert')
const Libp2p = require('libp2p')
const CardanoProvider = require('./service/provider/cardano-provider')
const Registry = require('./Registry')



'use strict'

module.exports = async function({identity, addresses, options }) {
  const node = await NodeMaker.createNode({identity, addrs: addresses})

  const registry = new Registry()
  assert(node, "Node needs to be defined")
  const defaults = {registry: registry}
  if (options.provider) {
    const cardanoProvider = new CardanoProvider('')
    defaults.provider = cardanoProvider
  }

  const ora = new Ora(node, defaults)
  return {ora, node}

  
}
