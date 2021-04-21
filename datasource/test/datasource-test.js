'use strict'
var assert = require('assert')
const Datasource = require("../src/index.js");

let type = ""
let config = ""
let source = "source"
let events = ""
let validation_fn = ""
let updates = ""
let handlers = {}
var datasource;

describe('smart contract interpreter', async function() {

  it('should initialize without errors', async function() {
    datasource = New Datasource(type, source, events, validation_fn, config);
    assert(true)
  });

  it('should be able get events, audit, source, type and config of the datasource', function() {
    assert.equal(datasource.events, events)
    assert.equal(typeof datasource.verify, "function")
    assert.equal(datasource.source, source)
    assert.equal(datasource.type, type)
    //datasource.config
  });
  //correct file structure
  it('should be able to add eventHandlers for all events', function() {
    datasource.handlers = handlers
    assert(true)
  });

  it('should be able to start to update periodically and get correct data', function() {
    datasource.Start()
    //events
    //handlers should test
    //datasource.on()
    //audit the event
  });
});
