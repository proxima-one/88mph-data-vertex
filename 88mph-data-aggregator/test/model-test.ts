//import
import assert from "assert";
import { expect } from "chai";
//import { GraphQLClient } from "graphql-request";

import { ethers } from "ethers";
import { getSdk } from "../src/generated/models/queries";
import { convert } from "../src/generated/models/utils";
import {
  DPoolList,
  DPoolListInput,
  toDPoolListInput,
  toDPoolList
} from "../src/generated/models/models";
import { BigNumber, BigNumberish } from "ethers";
import { GraphQLClient } from "graphql-request";

//https://github.com/ardeois/graphql-codegen-typescript-mock-data

//list of type conversion pairings
//BigInt, Number, String, BigNumber, Boolean (return value, if you don't narrow down type), Object, Array
//
const randNum = Math.floor(Math.random() * 100000);
const amount = ethers.utils.parseUnits(randNum.toString(), 18);
let generatedFromValue = amount;
let expectedTo = amount.toString();
let test_array: any[] = [];
let against: string[] = [];

var dpoolList: DPoolList;
var dpoolListInput: DPoolListInput;
var dpoolListInputQuery: DPoolListInput;

function makeDefaultDPoolList(): DPoolList {
  //class DPoolList
  let dpoolList: DPoolList = new DPoolList("dpoolListID");
  dpoolList.numActiveUsers = 0;
  dpoolList.numUsers = 0;
  dpoolList.numFunders = 0;
  dpoolList.numPools = 1;
  //dpoolList.DPoolIDs = ["DPoolIDs"];
  //dpoolList.__typename = "DPoolList";
  dpoolList.numActiveDeposits = 0;
  return dpoolList;
}

function makeDefaultDPoolListInput(): DPoolListInput {
  let dpoolListInput: DPoolListInput = {
    __typename: "DPoolListInput",
    id: "dpoolListID",
    numActiveUsers: 0,
    numPools: 0,
    //numPools convert to Int
    numUsers: 0, // convert to Int
    numFunders: 0
    //  DPoolIDs: ["dpoolID"]
    //numFunders  = numFunders convert to Int
    //DPoolIDs = poolIds
  };

  return dpoolListInput as DPoolListInput;
}

function makeDefaultDPoolListInputQuery(): DPoolListInput {
  let dpoolListInput: DPoolListInput = {
    __typename: "DPoolListInput",
    id: "dpoolListID",
    numActiveUsers: 0,
    numPools: 0,
    //numPools convert to Int
    numUsers: 0, // convert to Int
    numFunders: 0
    //DPoolIDs: ["dpoolID"]
    //numFunders  = numFunders convert to Int
    //DPoolIDs = poolIds
  };

  return dpoolListInput as DPoolListInput;
}

function isDPoolList(obj: any): boolean {
  //check class

  //check type
  return obj && obj.__typename && obj.__typename == "DPoolList";
}

function isDPoolListInput(obj: any): boolean {
  return obj && obj.__typename && obj.__typename == "DPoolListInput";
}

describe("testing utils for conversions", async function() {
  describe("Converting between DPoolList and DPoolListInput", async function() {
    // before(() => {
    //   dpoolList = makeDefaultDPoolList();
    //   dpoolListInput = makeDefaultDPoolListInput();
    //   dpoolListInputQuery = makeDefaultDPoolListInputQuery();
    // });
    //for ... in
    it("Should be able to create DPoolList and DPoolList Input", async function() {
      dpoolList = makeDefaultDPoolList();
      dpoolListInput = makeDefaultDPoolListInput();
      dpoolListInputQuery = makeDefaultDPoolListInputQuery();
      //console.log(dpoolList.__typename);
      //console.log(dpoolListInput.__typename);
      assert(isDPoolList(dpoolList));
      assert(isDPoolListInput(dpoolListInput));
      //load args
    });

    it("Should be able to get the save args from DPool", async function() {
      dpoolList = makeDefaultDPoolList();
      dpoolListInput = makeDefaultDPoolListInput();
      dpoolListInputQuery = makeDefaultDPoolListInputQuery();
      let resultDPoolListInput = toDPoolListInput(dpoolList);
      assert(isDPoolListInput(resultDPoolListInput));

      let resultDPoolList = toDPoolList(resultDPoolListInput);
      assert(isDPoolList(resultDPoolList));
    });

    it("Should be able to get the load args from DPoolInput and entries", async function() {
      dpoolList = makeDefaultDPoolList();
      dpoolListInput = makeDefaultDPoolListInput();
      dpoolListInputQuery = makeDefaultDPoolListInputQuery();
      let resultDPoolList = toDPoolList(dpoolListInput);
      assert(isDPoolList(resultDPoolList));

      let resultDPoolListQueryResp = toDPoolList(dpoolListInputQuery);
      assert(isDPoolList(resultDPoolListQueryResp));

      let resultDPoolListInput = toDPoolListInput(resultDPoolList);
      assert(isDPoolListInput(resultDPoolListInput));
    });

    it("Should be able to use .save(), and load()", async function() {
      dpoolList = makeDefaultDPoolList();
      dpoolListInput = makeDefaultDPoolListInput();
      dpoolListInputQuery = makeDefaultDPoolListInputQuery();
      //console.log(dpoolListInput.id);
      //console.log(typeof dpoolListInput.id);
      let resultDPoolListInput = dpoolList._getSaveArgs();
      assert(isDPoolListInput(resultDPoolListInput));
    });
  });

  describe("Converting between DPoolList and DPoolListInput", async function() {
    it("Should be able to load and save from the data vertex", async function() {
      //connect to client
      let endpoint = "http://0.0.0.0:4000/query";
      const client = new GraphQLClient(endpoint, { headers: {} });
      //test client connection
      console.log(client);
      const sdk = getSdk(client);

      dpoolList = makeDefaultDPoolList();
      dpoolListInput = makeDefaultDPoolListInput();
      dpoolListInputQuery = makeDefaultDPoolListInputQuery();
      //dpoolList.save();
      //let dpoolQuery = await sdk.UpdateDPoolList({ input: dpoolListInput });
      //console.log(dpoolQuery.toString());
      let dpoolQuery = await sdk.UpdateDPoolList({
        input: {
          id: dpoolListInput.id,
          numPools: dpoolListInput.numPools,
          numFunders: dpoolListInput.numFunders,
          numUsers: dpoolListInput.numUsers,
          numActiveUsers: dpoolListInput.numActiveUsers
          //DPoolIDs: dpoolListInput.DPoolIDs
        }
        //dpoolListInput
      });
      //  console.log(dpoolQuery);
      //let dpoolResult = DPoolList.load("dpoolListID");
      let dpoolResult = await sdk.DPoolList({ id: dpoolListInput.id });
      console.log("Query String");
      console.log(dpoolResult);
      assert(dpoolResult != null);
      console.log("Result ", dpoolResult);
    });

    it("Should be able to save and load from the data vertex with entities", async function() {
      //loading
    });
  });
});

// function generateRandom(typeA: string) [typeA, typeB] {
//
// }

// function randomString(length) {
//     var result           = [];
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result.push(characters.charAt(Math.floor(Math.random() *
//  charactersLength)));
//    }
//    return result.join('');
// }

//random of type

//function Proxy

//assertion
