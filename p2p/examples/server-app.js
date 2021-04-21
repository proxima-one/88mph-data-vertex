const parallel = require('async/parallel')
const Ora = require('./ora-node')
const cardanoClient = require('./cardano-client')
const Pushable = require('pull-pushable')
const p = Pushable()
const pull = require('pull-stream')

//This is the client ...
console.log("Starting up server...")
var created = false



//This is needed
const server = "/ip4/10.0.0.55/tcp/4900/ipfs/Qma3GsJmB47xYuyahPZPSadh1avvxfyYQwk8R3UnFrQ6aP"
const subscriber = "/ip4/10.0.0.55/tcp/5900/ipfs/QmcrQZ6RJdpYuGvZqD5QEHAv6qX4BrQLJLQPQUrTrzdcgm"

async function main() {
  const node = await Ora.startNode('/ip4/0.0.0.0/tcp/4900', './test-server', function(err, node) {
    if (err) {
      throw err
    }
    console.log("Starting up with previous config...")
    Ora.plugin(node, cardanoClient.package)
    created = true
    console.log(node.peerInfo)

    //cardano
    setInterval(function() {
      if (cardanoClient.cardanoCache.get("data")) {
        var cardanoData = JSON.stringify(cardanoClient.cardanoCache.get("data"))
        Ora.push(node, cardanoClient.subscriber, 'cardano/client', [cardanoData])
        cardanoClient.cardanoCache.del("data")
      }
      //Ora.push(node, cardanoClient.subscriber, 'cardano/client', ['data subscription'])
    }, 2000);
  })
}


main()
