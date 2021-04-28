"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
//import
var assert_1 = tslib_1.__importDefault(require("assert"));
//import { GraphQLClient } from "graphql-request";
var ethers_1 = require("ethers");
var queries_1 = require("../src/generated/models/queries");
var models_1 = require("../src/generated/models/models");
var graphql_request_1 = require("graphql-request");
//https://github.com/ardeois/graphql-codegen-typescript-mock-data
//list of type conversion pairings
//BigInt, Number, String, BigNumber, Boolean (return value, if you don't narrow down type), Object, Array
//
var randNum = Math.floor(Math.random() * 100000);
var amount = ethers_1.ethers.utils.parseUnits(randNum.toString(), 18);
var generatedFromValue = amount;
var expectedTo = amount.toString();
var test_array = [];
var against = [];
var dpoolList;
var dpoolListInput;
var dpoolListInputQuery;
function makeDefaultDPoolList() {
    //class DPoolList
    var dpoolList = new models_1.DPoolList("dpoolListID");
    dpoolList.numActiveUsers = BigInt(0);
    dpoolList.numUsers = BigInt(0);
    dpoolList.numFunders = BigInt(0);
    dpoolList.numPools = BigInt(1);
    dpoolList.poolIds = ["dpoolID"];
    dpoolList.__typename = "DPoolList";
    //dpoolList.numActiveDeposits = 0;
    return dpoolList;
}
function makeDefaultDPoolListInput() {
    var dpoolListInput = {
        //__typename: "DPoolListInput",
        id: "dpoolListID",
        numActiveUsers: 0,
        numPools: 0,
        //numPools convert to Int
        numUsers: 0,
        numFunders: 0,
        DPoolIDs: ["dpoolID"]
        //numFunders  = numFunders convert to Int
        //DPoolIDs = poolIds
    };
    return dpoolListInput;
}
function makeDefaultDPoolListInputQuery() {
    var dpoolListInput = {
        __typename: "DPoolListInput",
        id: "dpoolListID",
        numActiveUsers: BigInt(0),
        numPools: BigInt(0),
        //numPools convert to Int
        numUsers: BigInt(0),
        numFunders: BigInt(0),
        DPoolIDs: ["dpoolID"]
        //numFunders  = numFunders convert to Int
        //DPoolIDs = poolIds
    };
    return dpoolListInput;
}
function isDPoolList(obj) {
    //check class
    //check type
    return obj && obj.__typename && obj.__typename == "DPoolList";
}
function isDPoolListInput(obj) {
    return obj && obj.__typename && obj.__typename == "DPoolListInput";
}
describe("testing utils for conversions", function () {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            describe("Converting between DPoolList and DPoolListInput", function () {
                return tslib_1.__awaiter(this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        // before(() => {
                        //   dpoolList = makeDefaultDPoolList();
                        //   dpoolListInput = makeDefaultDPoolListInput();
                        //   dpoolListInputQuery = makeDefaultDPoolListInputQuery();
                        // });
                        //for ... in
                        it("Should be able to create DPoolList and DPoolList Input", function () {
                            return tslib_1.__awaiter(this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    dpoolList = makeDefaultDPoolList();
                                    dpoolListInput = makeDefaultDPoolListInput();
                                    dpoolListInputQuery = makeDefaultDPoolListInputQuery();
                                    //console.log(dpoolList.__typename);
                                    //console.log(dpoolListInput.__typename);
                                    assert_1.default(isDPoolList(dpoolList));
                                    assert_1.default(isDPoolListInput(dpoolListInput));
                                    return [2 /*return*/];
                                });
                            });
                        });
                        it("Should be able to get the save args from DPool", function () {
                            return tslib_1.__awaiter(this, void 0, void 0, function () {
                                var resultDPoolListInput, resultDPoolList;
                                return tslib_1.__generator(this, function (_a) {
                                    dpoolList = makeDefaultDPoolList();
                                    dpoolListInput = makeDefaultDPoolListInput();
                                    dpoolListInputQuery = makeDefaultDPoolListInputQuery();
                                    resultDPoolListInput = models_1.toDPoolListInput(dpoolList);
                                    assert_1.default(isDPoolListInput(resultDPoolListInput));
                                    resultDPoolList = models_1.toDPoolList(resultDPoolListInput);
                                    assert_1.default(isDPoolList(resultDPoolList));
                                    return [2 /*return*/];
                                });
                            });
                        });
                        it("Should be able to get the load args from DPoolInput and entries", function () {
                            return tslib_1.__awaiter(this, void 0, void 0, function () {
                                var resultDPoolList, resultDPoolListQueryResp, resultDPoolListInput;
                                return tslib_1.__generator(this, function (_a) {
                                    dpoolList = makeDefaultDPoolList();
                                    dpoolListInput = makeDefaultDPoolListInput();
                                    dpoolListInputQuery = makeDefaultDPoolListInputQuery();
                                    resultDPoolList = models_1.toDPoolList(dpoolListInput);
                                    assert_1.default(isDPoolList(resultDPoolList));
                                    resultDPoolListQueryResp = models_1.toDPoolList(dpoolListInputQuery);
                                    assert_1.default(isDPoolList(resultDPoolListQueryResp));
                                    resultDPoolListInput = models_1.toDPoolListInput(resultDPoolList);
                                    return [2 /*return*/];
                                });
                            });
                        });
                        it("Should be able to use .save(), and load()", function () {
                            return tslib_1.__awaiter(this, void 0, void 0, function () {
                                var resultDPoolListInput;
                                return tslib_1.__generator(this, function (_a) {
                                    dpoolList = makeDefaultDPoolList();
                                    dpoolListInput = makeDefaultDPoolListInput();
                                    dpoolListInputQuery = makeDefaultDPoolListInputQuery();
                                    resultDPoolListInput = dpoolList._getSaveArgs();
                                    assert_1.default(isDPoolListInput(resultDPoolListInput));
                                    return [2 /*return*/];
                                });
                            });
                        });
                        return [2 /*return*/];
                    });
                });
            });
            describe("Converting between DPoolList and DPoolListInput", function () {
                return tslib_1.__awaiter(this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        it("Should be able to load and save from the data vertex", function () {
                            return tslib_1.__awaiter(this, void 0, void 0, function () {
                                var endpoint, client, sdk, dpoolQuery1, dpoolResult;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            endpoint = "http://0.0.0.0:4000/query";
                                            client = new graphql_request_1.GraphQLClient(endpoint, { headers: {} });
                                            //test client connection
                                            console.log(client);
                                            sdk = queries_1.getSdk(client);
                                            dpoolList = makeDefaultDPoolList();
                                            dpoolListInput = makeDefaultDPoolListInput();
                                            dpoolListInputQuery = makeDefaultDPoolListInputQuery();
                                            return [4 /*yield*/, sdk.UpdateDPoolList({
                                                    input: {
                                                        id: dpoolListInput.id,
                                                        numPools: dpoolListInput.numPools,
                                                        numFunders: dpoolListInput.numFunders,
                                                        numUsers: dpoolListInput.numUsers
                                                        //DPoolIDs: dpoolListInput.DPoolIDs
                                                    }
                                                    //dpoolListInput
                                                })];
                                        case 1:
                                            dpoolQuery1 = _a.sent();
                                            console.log(dpoolQuery1);
                                            dpoolResult = models_1.DPoolList.load("dpoolListID");
                                            assert_1.default(dpoolResult != null);
                                            console.log(dpoolResult.__typename);
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                        it("Should be able to save and load from the data vertex with entities", function () {
                            return tslib_1.__awaiter(this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    return [2 /*return*/];
                                });
                            });
                        });
                        return [2 /*return*/];
                    });
                });
            });
            return [2 /*return*/];
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
//# sourceMappingURL=model-test.js.map