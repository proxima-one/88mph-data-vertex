const waterfall = require('async/waterfall')
const pull = require('pull-stream')
const parallel = require('async/parallel')
var collect = require('pull-stream/sinks/collect')
const Ora = require('./ora-node')
const Pushable = require('pull-pushable')
const p = Pushable()


//This is needed
const server = "/ip4/10.0.0.55/tcp/4900/ipfs/Qma3GsJmB47xYuyahPZPSadh1avvxfyYQwk8R3UnFrQ6aP"
const subscriber = "/ip4/10.0.0.55/tcp/5900/ipfs/QmcrQZ6RJdpYuGvZqD5QEHAv6qX4BrQLJLQPQUrTrzdcgm"


var axios = require('axios')

//Plug in for cardano
const Cache = require('js-cache')
//Var queue ...
var cardanoCache = new Cache()


const EventEmitter = require('event-emitter')




/*
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);
*/




//Communication layer/helper
//Given a connection take data from it



/*
Need to get the return address
*/
function cardano(protocol, conn) {
  conn.getObservedAddrs(function(err, multiaddrs) {
    if (err) {
      throw err
    }
    multiaddrs.forEach((ma) => console.log(ma.toString()))
  })

  pull(
    conn,
    pull.map((v) => v.toString()),
    pull.collect(function(err, array) {
      console.log(data)
      })
    })
  )
}





function version() {
  return '1.0'
}

const package =

  {
    'cardano/server': cardano,
    'cardano/client': cardanoClients,
    'version': version

  }





module.exports = {
  package,
  server,
  subscriber,
  cardano,
  cardanoRequests,
  cardanoCache,
  receiveData,
  cardanoClients,
  version
}
