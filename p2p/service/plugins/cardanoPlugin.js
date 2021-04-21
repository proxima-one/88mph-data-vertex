/*

Plugin for Cardano

*/

function receiveData(array) {
  //Verify the data (in transactions)
  validate(array)
  //store(array) //do not need to store all blocks, can be a running list of them...
  //broadcast .... push(array) //Not all people need to be subscribers, blocks can be pushed to those that are impacted + other subscribers...
  array.forEach((e) => console.log(e))
}

function validate(block) {
  //Should validate the block ....
  console.log("Validating ...")
}

function store(block) {
  console.log("Storing ...")
}


function cardanoClients(protocol, conn) {

  pull(
    conn,
    pull.map((v) => v.toString()),
    pull.collect(function(err, array) {
      receiveData(array)
      //Verify data, then push to the neighbors
    })
  )
}
