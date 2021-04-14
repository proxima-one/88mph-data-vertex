"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
//import
var assert_1 = tslib_1.__importDefault(require("assert"));
var graphql_request_1 = require("graphql-request");
var queries_1 = require("../src/generated/models/queries");
describe("data vertex test for modules", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        describe("Should be able to get queries", function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var queries_2, _i, _a, name;
                var _this = this;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, setup()];
                        case 1:
                            queries_2 = _b.sent();
                            console.log("query");
                            console.log(Object.entries(queries_2));
                            console.log(queries_2.keys());
                            for (_i = 0, _a = Array.from(queries_2.keys()); _i < _a.length; _i++) {
                                name = _a[_i];
                                console.log(name);
                                it("should be able to query in high frequency: " + name, function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                    var queryStruct, result;
                                    return tslib_1.__generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                queryStruct = queries_2.get(name);
                                                assert_1.default(queryStruct);
                                                console.log("Testing");
                                                return [4 /*yield*/, queryStruct.query(queryStruct.variables)];
                                            case 1:
                                                result = _a.sent();
                                                console.log(result);
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            }
                            return [2 /*return*/];
                    }
                });
            });
        });
        return [2 /*return*/];
    });
}); });
function setup() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var endpoint, client, sdk, queries;
        return tslib_1.__generator(this, function (_a) {
            endpoint = "http://0.0.0.0:4000/query";
            client = new graphql_request_1.GraphQLClient(endpoint, { headers: {} });
            //test client connection
            console.log(client);
            sdk = queries_1.getSdk(client);
            queries = new Map();
            queries.set("dPools", { query: sdk.dpools });
            queries.set("dPoolsLatest", {
                query: sdk.dpoolsLatest
            });
            queries.set("user", {
                query: sdk.User,
                variables: { id: "00000", prove: false }
            });
            queries.set("funder", {
                query: sdk.Funder,
                variables: { id: "00000", prove: false }
            });
            queries.set("dpool", {
                query: sdk.DPool,
                variables: { id: "00000", prove: false }
            });
            console.log(queries);
            return [2 /*return*/, queries];
        });
    });
}
function testHighFreqQuery(name, queryStruct, expected) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
//# sourceMappingURL=index-test.js.map