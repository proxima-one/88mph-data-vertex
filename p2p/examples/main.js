/********
Runs the demo for the nodes

- Creates two nodes
- One of the nodes is the
******/



//Set of peers to contact ...
'use strict'

const pify = require('pify')


const axios = require('axios')
const Cache = require('js-cache')
const EventEmitter = require('event-emitter')
var cardanoCache = new Cache()

class CardanoProvider extends EventEmitter {
    constructor(url) {
      super()
      this.url = url || 'http://cardano-explorer.cardano-mainnet.iohk.io'
      this.running = false

    }

    get getRunning() {
      return this.running
    }


    async getBlock() {
      var response = await pify(axios)({
        method: 'get',
        url: this.url + "/latest/txs"
      })

      console.log(response.data)
      return response.data
    }

}


module.exports = CardanoProvider
