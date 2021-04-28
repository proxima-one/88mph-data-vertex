"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
//import
var assert_1 = tslib_1.__importDefault(require("assert"));
//import { GraphQLClient } from "graphql-request";
var ethers_1 = require("ethers");
//import { getSdk } from "../src/generated/models/queries";
var utils_1 = require("../src/generated/models/utils");
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
describe("testing utils for conversions", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        describe("Converting between types", function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _loop_1, i;
                return tslib_1.__generator(this, function (_a) {
                    _loop_1 = function (i) {
                        var _loop_2 = function (j) {
                            it(test_array[i] + " should convert to " + test_array[j], function () {
                                //test_array[i]
                                //test_array[j]
                                var toType = test_array[i];
                                var fromType = test_array[j];
                                var toValue = utils_1.convert(generatedFromValue, typeof toType);
                                assert_1.default.equal(typeof toValue, typeof expectedTo);
                                assert_1.default.equal(toValue, expectedTo);
                            });
                        };
                        for (var j = 0; j < test_array.length; j++) {
                            _loop_2(j);
                        }
                    };
                    for (i = 0; i < test_array.length; i++) {
                        _loop_1(i);
                    }
                    return [2 /*return*/];
                });
            });
        });
        //
        describe("Converting between values", function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    //for ... in
                    it("Should be able to create proxy", function () {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            var randNum, amount, generatedFromValue, expectedTo, toValue, to2Value, bigInt, to3Value, expectedInt, to4Value;
                            return tslib_1.__generator(this, function (_a) {
                                randNum = Math.floor(Math.random() * 100000);
                                amount = ethers_1.ethers.utils.parseUnits(randNum.toString(), 18);
                                generatedFromValue = amount;
                                expectedTo = amount.toString();
                                toValue = utils_1.convert(generatedFromValue, "string");
                                assert_1.default.equal(typeof toValue, "string");
                                assert_1.default.equal(toValue, expectedTo);
                                to2Value = utils_1.convert(expectedTo, "number");
                                assert_1.default(to2Value);
                                assert_1.default(generatedFromValue.eq(to2Value));
                                bigInt = BigInt(randNum);
                                to3Value = utils_1.convert(bigInt, "string");
                                expectedInt = bigInt.toString();
                                assert_1.default.equal(typeof to3Value, "string");
                                assert_1.default.equal(to3Value, expectedInt);
                                to4Value = utils_1.convert(expectedInt, "bigint");
                                assert_1.default.equal(typeof to4Value, "bigint");
                                assert_1.default.equal(to4Value, bigInt);
                                return [2 /*return*/];
                            });
                        });
                    });
                    it("Should be able to use proxy to convert values", function () {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            var randNum, amount, expectedTo, bigInt, expectedInt;
                            return tslib_1.__generator(this, function (_a) {
                                randNum = Math.floor(Math.random() * 100000);
                                amount = ethers_1.ethers.utils.parseUnits(randNum.toString(), 18);
                                expectedTo = amount.toString();
                                bigInt = BigInt(randNum);
                                expectedInt = bigInt.toString();
                                return [2 /*return*/];
                            });
                        });
                    });
                    it("Should be able to proxify and convert", function () {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                console.log("Proxify and conversion");
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
}); });
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
//# sourceMappingURL=utils-test.js.map