//import
import assert from "assert";
import { expect } from "chai";
//import { GraphQLClient } from "graphql-request";

import { ethers } from "ethers";
//import { getSdk } from "../src/generated/models/queries";
import { convert } from "../src/generated/models/utils";
import { BigNumber, BigNumberish } from "ethers";

//https://github.com/ardeois/graphql-codegen-typescript-mock-data

describe("testing proxy conversions", async () => {
  describe("Converting between values", async function() {
    //for ... in
    it("Should be able to create proxy", async function() {
      console.log("Creation of proxy");
      //create proxy between scalars
      //typelist
      //randomTypes
      const randNum = Math.floor(Math.random() * 100000);
      const amount = ethers.utils.parseUnits(randNum.toString(), 18);
      //const bigInt = BigInt.from(randNum);
      let generatedFromValue = amount;
      let expectedTo = amount.toString();
      let toValue = convert<BigNumber, string>(generatedFromValue);
      console.log(typeof toValue);
      assert.equal(typeof toValue, "string");
      assert.equal(toValue, expectedTo);

      let to2Value = convert<string, BigNumber>(expectedTo);
      assert.equal(to2Value, generatedFromValue);
      const bigInt = BigInt(randNum);
      let to3Value = convert<bigint, string>(bigInt);
      let expectedInt = bigInt.toString();
      assert.equal(typeof to3Value, "string");
      assert.equal(to3Value, expectedInt);
      let to4Value = convert<string, bigint>(expectedInt);
      console.log(to4Value);

      assert.equal(typeof to4Value, "bigint");
      assert.equal(to4Value, bigInt);
      //assert correct typing
      //assert expectedTo == toValue
    });

    it("Should be able to use proxy to convert values", async function() {
      console.log("Conversion");
      //random types
      //
    });

    it("Should be able to proxify and convert", async function() {
      console.log("Proxify and conversion");
      //
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
