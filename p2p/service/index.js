'use strict'


class Service {
  constructor({node, provider}) {
    this.node = node
    this.provider = provider
    this.subscribers = new Map()
  }


  async start()  {
    await provider
  }

}



module.exports = Service
