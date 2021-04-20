//import
import assert from "assert";
import { expect } from "chai";
//import { GraphQLClient } from "graphql-request";

import { ethers } from "ethers";
//import { getSdk } from "../src/generated/models/queries";
import { convert, parseProxy } from "../src/generated/models/utils";
import { BigNumber, BigNumberish } from "ethers";

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

describe("testing utils for conversions", async () => {
  describe("Converting between types", async function() {
    for (let i = 0; i < test_array.length; i++) {
      for (let j = 0; j < test_array.length; j++) {
        it(test_array[i] + " should convert to " + test_array[j], function() {
          //test_array[i]
          //test_array[j]
          let toType = test_array[i];

          let fromType = test_array[j];
          let toValue = convert(generatedFromValue, typeof toType);
          assert.equal(typeof toValue, typeof expectedTo);
          assert.equal(toValue, expectedTo);
        });
      }
    }
  });

  //

  describe("Converting between values", async function() {
    //for ... in
    it("Should be able to create proxy", async function() {
      const randNum = Math.floor(Math.random() * 100000);
      const amount = ethers.utils.parseUnits(randNum.toString(), 18);
      //const bigInt = BigInt.from(randNum);
      let generatedFromValue = amount;
      let expectedTo = amount.toString();
      let toValue = convert<BigNumber, string>(generatedFromValue, "string");
      assert.equal(typeof toValue, "string");
      assert.equal(toValue, expectedTo);
      let to2Value = convert<string, BigNumber>(expectedTo, "number");
      assert(to2Value);
      assert(generatedFromValue.eq(to2Value));
      const bigInt = BigInt(randNum);
      let to3Value = convert<bigint, string>(bigInt, "string");
      let expectedInt = bigInt.toString();
      assert.equal(typeof to3Value, "string");
      assert.equal(to3Value, expectedInt);
      let to4Value = convert<string, bigint>(expectedInt, "bigint");
      assert.equal(typeof to4Value, "bigint");
      assert.equal(to4Value, bigInt);
    });

    it("Should be able to use proxy to convert values", async function() {
      const randNum = Math.floor(Math.random() * 100000);
      const amount = ethers.utils.parseUnits(randNum.toString(), 18);
      let expectedTo = amount.toString();
      const bigInt = BigInt(randNum);
      let expectedInt = bigInt.toString();

      let proxy1 = parseProxy<BigNumber, string>(expectedTo);
      assert.equal(typeof proxy1.getLoadArgs(), typeof amount);
      assert(amount.eq(proxy1.getLoadArgs()));
      console.log("Load args ", proxy1.getLoadArgs());
      assert.equal(typeof proxy1.getSaveArgs(), typeof expectedTo);
      assert.equal(proxy1.getSaveArgs(), expectedTo);

      let proxy = parseProxy<BigNumber, string>(amount, "load");
      //let amountStr = amount as string;
      //check this
      //assert.equal(typeof proxy.getLoadArgs(), typeof amount);
      //assert(amount.eq(proxy.getLoadArgs()));

      //assert.equal(typeof proxy.getSaveArgs(), typeof expectedTo);
      assert.equal(proxy.getSaveArgs(), expectedTo);
      //  console.log(proxy.getSaveArgs());
      //CONVERSIONS with scalar values

      //parsing  proxy, proxy, new
      //Proxy(new)
      //parseProxy
      //create the proxy
    });

    it("Should be able to proxify and convert", async function() {
      console.log("Proxify and conversion");
      //use the complete parsing
      // const randNum = Math.floor(Math.random() * 100000);
      // const amount = ethers.utils.parseUnits(randNum.toString(), 18);
      // let expectedTo = amount.toString();
      // const bigInt = BigInt(randNum);
      // let expectedInt = bigInt.toString();
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
