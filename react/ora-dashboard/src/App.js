import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const config = require('./ora')
//import Table from '@material-ui/core/Table';


console.log(config)
class App extends Component {
  render() {
    return (
      <div className="Ora">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <OraInfo info = {config.identity}  />
          <OraAddresses addresses = {config.addresses} />


        </header>

      </div>

    );
  }
}



class OraInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {id: props.info.id, pubKey : props.info.pubKey}
  }
  render() {
    return(
      <div className="OraInfo">
        <h3> Node Id</h3>
        <p> {this.state.id} </p>
        <h3> Node Pub Key </h3>
        <p> {this.state.pubKey.substring(0, 100)} </p>
      </div>
    );
  }

}


class RegistryViewer extends Component {

  constructor(props) {
    super()
  }

}



class OraAddresses extends Component {
  constructor(props) {
    super(props);
    this.state = {addresses : props.addresses}
  }

  render() {
    return(
      <div className="OraAddresses">
        <h3> Node Addresses </h3>
        <table>
          {this.state.addresses.map((addr) =>
              <tr>{addr}</tr>
          )}
        </table>

      </div>
    );
  }
}

export default App;
