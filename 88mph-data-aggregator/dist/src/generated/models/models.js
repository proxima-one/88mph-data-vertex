"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunderDocument = exports.UpdateDepositDocument = exports.DepositDocument = exports.UpdateUserTotalDepositDocument = exports.UserTotalDepositDocument = exports.UpdateUserDocument = exports.UserDocument = exports.UpdateDPoolDocument = exports.DPoolDocument = exports.UpdateDPoolListDocument = exports.DPoolListDocument = exports.toVestInput = exports.toVest = exports.Vest = exports.toUserTotalDepositInput = exports.toUserTotalDeposit = exports.UserTotalDeposit = exports.toUserInput = exports.toUser = exports.User = exports.Query = exports.Proof = exports.Mutation = exports.toMPHHolderInput = exports.toMPHHolder = exports.MPHHolder = exports.toMPHInput = exports.toMPH = exports.MPH = exports.toFundingInput = exports.toFunding = exports.Funding = exports.toFunderTotalInterestInput = exports.toFunderTotalInterest = exports.FunderTotalInterest = exports.toFunderInput = exports.toFunder = exports.Funder = exports.toFractionalDepositInput = exports.toFractionalDeposit = exports.FractionalDeposit = exports.toDepositInput = exports.toDeposit = exports.Deposit = exports.toDPoolListInput = exports.toDPoolList = exports.DPoolList = exports.toDPoolInput = exports.toDPool = exports.DPool = void 0;
exports.UpdateFractionalDepositDocument = exports.FractionalDepositDocument = exports.UpdateVestDocument = exports.VestDocument = exports.UpdateMPHDocument = exports.MPHDocument = exports.UpdateMPHHolderDocument = exports.MPHHolderDocument = exports.UpdateFundingDocument = exports.FundingDocument = exports.UpdateFunderTotalInterestDocument = exports.FunderTotalInterestDocument = exports.UpdateFunderDocument = void 0;
//import {useFetch} from "../../lib/DataVertexClient";
//import { TypedDocumentNode } from "@graphql-typed-document-node/core";
// import { TypedDocumentNode } from "@graphql-typed-document-node/core";
// import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
var utils_1 = require("./utils");
var DPool = /** @class */ (function () {
    function DPool(id) {
        this.__typename = "DPool";
        if (id) {
            this.id = id;
        }
    }
    DPool.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.DPoolDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result && result.data != undefined && result.data.DPool != undefined) {
            var value = result.data.DPool;
            return toDPool(value);
        }
        return null;
    };
    DPool.prototype.save = function () {
        var operationDocument = exports.UpdateDPoolDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    DPool.prototype._getSaveArgs = function () {
        return toDPoolInput(this);
    };
    return DPool;
}());
exports.DPool = DPool;
function toDPool(objInput) {
    var obj = new DPool();
    obj.__typename = "DPool";
    obj.id = objInput.id;
    obj.address = objInput.address;
    obj.moneyMarket = utils_1.parseString(objInput.moneyMarket);
    obj.stablecoin = utils_1.parseString(objInput.stablecoin);
    obj.interestModel = utils_1.parseString(objInput.interestModel);
    obj.UserIDs = objInput.UserIDs;
    obj.DepositIDs = objInput.DepositIDs;
    obj.FunderIDs = objInput.FunderIDs;
    obj.FundingIDs = objInput.FundingIDs;
    return obj;
}
exports.toDPool = toDPool;
function toDPoolInput(obj) {
    var objInput = {
        __typename: "DPoolInput",
        id: obj.id,
        address: obj.address,
        moneyMarket: utils_1.parseString(obj.moneyMarket),
        stablecoin: utils_1.parseString(obj.stablecoin),
        interestModel: utils_1.parseString(obj.interestModel),
        UserIDs: obj.UserIDs,
        DepositIDs: obj.DepositIDs,
        FunderIDs: obj.FunderIDs,
        FundingIDs: obj.FundingIDs
    };
    return objInput;
}
exports.toDPoolInput = toDPoolInput;
var DPoolList = /** @class */ (function () {
    function DPoolList(id) {
        this.__typename = "DPoolList";
        if (id) {
            this.id = id;
        }
    }
    DPoolList.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.DPoolListDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result &&
            result.data != undefined &&
            result.data.DPoolList != undefined) {
            var value = result.data.DPoolList;
            return toDPoolList(value);
        }
        return null;
    };
    DPoolList.prototype.save = function () {
        var operationDocument = exports.UpdateDPoolListDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    DPoolList.prototype._getSaveArgs = function () {
        return toDPoolListInput(this);
    };
    return DPoolList;
}());
exports.DPoolList = DPoolList;
function toDPoolList(objInput) {
    var obj = new DPoolList();
    obj.__typename = "DPoolList";
    obj.id = objInput.id;
    obj.DPoolIDs = objInput.DPoolIDs;
    return obj;
}
exports.toDPoolList = toDPoolList;
function toDPoolListInput(obj) {
    var objInput = {
        __typename: "DPoolListInput",
        id: obj.id,
        DPoolIDs: obj.DPoolIDs
    };
    return objInput;
}
exports.toDPoolListInput = toDPoolListInput;
var Deposit = /** @class */ (function () {
    function Deposit(id) {
        this.__typename = "Deposit";
        if (id) {
            this.id = id;
        }
    }
    Deposit.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.DepositDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result &&
            result.data != undefined &&
            result.data.Deposit != undefined) {
            var value = result.data.Deposit;
            return toDeposit(value);
        }
        return null;
    };
    Deposit.prototype.save = function () {
        var operationDocument = exports.UpdateDepositDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    Deposit.prototype._getSaveArgs = function () {
        return toDepositInput(this);
    };
    return Deposit;
}());
exports.Deposit = Deposit;
function toDeposit(objInput) {
    var obj = new Deposit();
    obj.__typename = "Deposit";
    obj.id = objInput.id;
    obj.UserID = utils_1.parseString(objInput.UserID);
    obj.DPoolID = utils_1.parseString(objInput.DPoolID);
    obj.active = objInput.active;
    return obj;
}
exports.toDeposit = toDeposit;
function toDepositInput(obj) {
    var objInput = {
        __typename: "DepositInput",
        id: obj.id,
        UserID: utils_1.parseString(obj.UserID),
        DPoolID: utils_1.parseString(obj.DPoolID),
        active: obj.active
    };
    return objInput;
}
exports.toDepositInput = toDepositInput;
var FractionalDeposit = /** @class */ (function () {
    function FractionalDeposit(id) {
        this.__typename = "FractionalDeposit";
        if (id) {
            this.id = id;
        }
    }
    FractionalDeposit.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.FractionalDepositDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result &&
            result.data != undefined &&
            result.data.FractionalDeposit != undefined) {
            var value = result.data.FractionalDeposit;
            return toFractionalDeposit(value);
        }
        return null;
    };
    FractionalDeposit.prototype.save = function () {
        var operationDocument = exports.UpdateFractionalDepositDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    FractionalDeposit.prototype._getSaveArgs = function () {
        return toFractionalDepositInput(this);
    };
    return FractionalDeposit;
}());
exports.FractionalDeposit = FractionalDeposit;
function toFractionalDeposit(objInput) {
    var obj = new FractionalDeposit();
    obj.__typename = "FractionalDeposit";
    obj.id = objInput.id;
    obj.address = objInput.address;
    obj.zeroCouponBondAddress = objInput.zeroCouponBondAddress;
    obj.ownerAddress = objInput.ownerAddress;
    obj.active = objInput.active;
    obj.DepositID = utils_1.parseString(objInput.DepositID);
    return obj;
}
exports.toFractionalDeposit = toFractionalDeposit;
function toFractionalDepositInput(obj) {
    var objInput = {
        __typename: "FractionalDepositInput",
        id: obj.id,
        address: obj.address,
        zeroCouponBondAddress: obj.zeroCouponBondAddress,
        ownerAddress: obj.ownerAddress,
        active: obj.active,
        DepositID: utils_1.parseString(obj.DepositID)
    };
    return objInput;
}
exports.toFractionalDepositInput = toFractionalDepositInput;
var Funder = /** @class */ (function () {
    function Funder(id) {
        this.__typename = "Funder";
        if (id) {
            this.id = id;
        }
    }
    Funder.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.FunderDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result && result.data != undefined && result.data.Funder != undefined) {
            var value = result.data.Funder;
            return toFunder(value);
        }
        return null;
    };
    Funder.prototype.save = function () {
        var operationDocument = exports.UpdateFunderDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    Funder.prototype._getSaveArgs = function () {
        return toFunderInput(this);
    };
    return Funder;
}());
exports.Funder = Funder;
function toFunder(objInput) {
    var obj = new Funder();
    obj.__typename = "Funder";
    obj.id = objInput.id;
    obj.address = objInput.address;
    obj.DPoolIDs = objInput.DPoolIDs;
    obj.FundingIDs = objInput.FundingIDs;
    obj.FunderTotalInterestIDs = objInput.FunderTotalInterestIDs;
    return obj;
}
exports.toFunder = toFunder;
function toFunderInput(obj) {
    var objInput = {
        __typename: "FunderInput",
        id: obj.id,
        address: obj.address,
        DPoolIDs: obj.DPoolIDs,
        FundingIDs: obj.FundingIDs,
        FunderTotalInterestIDs: obj.FunderTotalInterestIDs
    };
    return objInput;
}
exports.toFunderInput = toFunderInput;
var FunderTotalInterest = /** @class */ (function () {
    function FunderTotalInterest(id) {
        this.__typename = "FunderTotalInterest";
        if (id) {
            this.id = id;
        }
    }
    FunderTotalInterest.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.FunderTotalInterestDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result &&
            result.data != undefined &&
            result.data.FunderTotalInterest != undefined) {
            var value = result.data.FunderTotalInterest;
            return toFunderTotalInterest(value);
        }
        return null;
    };
    FunderTotalInterest.prototype.save = function () {
        var operationDocument = exports.UpdateFunderTotalInterestDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    FunderTotalInterest.prototype._getSaveArgs = function () {
        return toFunderTotalInterestInput(this);
    };
    return FunderTotalInterest;
}());
exports.FunderTotalInterest = FunderTotalInterest;
function toFunderTotalInterest(objInput) {
    var obj = new FunderTotalInterest();
    obj.__typename = "FunderTotalInterest";
    obj.id = objInput.id;
    obj.FunderID = utils_1.parseString(objInput.FunderID);
    obj.DPoolID = utils_1.parseString(objInput.DPoolID);
    return obj;
}
exports.toFunderTotalInterest = toFunderTotalInterest;
function toFunderTotalInterestInput(obj) {
    var objInput = {
        __typename: "FunderTotalInterestInput",
        id: obj.id,
        FunderID: utils_1.parseString(obj.FunderID),
        DPoolID: utils_1.parseString(obj.DPoolID)
    };
    return objInput;
}
exports.toFunderTotalInterestInput = toFunderTotalInterestInput;
var Funding = /** @class */ (function () {
    function Funding(id) {
        this.__typename = "Funding";
        if (id) {
            this.id = id;
        }
    }
    Funding.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.FundingDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result &&
            result.data != undefined &&
            result.data.Funding != undefined) {
            var value = result.data.Funding;
            return toFunding(value);
        }
        return null;
    };
    Funding.prototype.save = function () {
        var operationDocument = exports.UpdateFundingDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    Funding.prototype._getSaveArgs = function () {
        return toFundingInput(this);
    };
    return Funding;
}());
exports.Funding = Funding;
function toFunding(objInput) {
    var obj = new Funding();
    obj.__typename = "Funding";
    obj.id = objInput.id;
    obj.FunderID = utils_1.parseString(objInput.FunderID);
    obj.DPoolID = utils_1.parseString(objInput.DPoolID);
    obj.active = objInput.active;
    return obj;
}
exports.toFunding = toFunding;
function toFundingInput(obj) {
    var objInput = {
        __typename: "FundingInput",
        id: obj.id,
        FunderID: utils_1.parseString(obj.FunderID),
        DPoolID: utils_1.parseString(obj.DPoolID),
        active: obj.active
    };
    return objInput;
}
exports.toFundingInput = toFundingInput;
var MPH = /** @class */ (function () {
    function MPH(id) {
        this.__typename = "MPH";
        if (id) {
            this.id = id;
        }
    }
    MPH.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.MPHDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result && result.data != undefined && result.data.MPH != undefined) {
            var value = result.data.MPH;
            return toMPH(value);
        }
        return null;
    };
    MPH.prototype.save = function () {
        var operationDocument = exports.UpdateMPHDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    MPH.prototype._getSaveArgs = function () {
        return toMPHInput(this);
    };
    return MPH;
}());
exports.MPH = MPH;
function toMPH(objInput) {
    var obj = new MPH();
    obj.__typename = "MPH";
    obj.id = objInput.id;
    return obj;
}
exports.toMPH = toMPH;
function toMPHInput(obj) {
    var objInput = {
        __typename: "MPHInput",
        id: obj.id
    };
    return objInput;
}
exports.toMPHInput = toMPHInput;
var MPHHolder = /** @class */ (function () {
    function MPHHolder(id) {
        this.__typename = "MPHHolder";
        if (id) {
            this.id = id;
        }
    }
    MPHHolder.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.MPHHolderDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result &&
            result.data != undefined &&
            result.data.MPHHolder != undefined) {
            var value = result.data.MPHHolder;
            return toMPHHolder(value);
        }
        return null;
    };
    MPHHolder.prototype.save = function () {
        var operationDocument = exports.UpdateMPHHolderDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    MPHHolder.prototype._getSaveArgs = function () {
        return toMPHHolderInput(this);
    };
    return MPHHolder;
}());
exports.MPHHolder = MPHHolder;
function toMPHHolder(objInput) {
    var obj = new MPHHolder();
    obj.__typename = "MPHHolder";
    obj.id = objInput.id;
    obj.address = objInput.address;
    return obj;
}
exports.toMPHHolder = toMPHHolder;
function toMPHHolderInput(obj) {
    var objInput = {
        __typename: "MPHHolderInput",
        id: obj.id,
        address: obj.address
    };
    return objInput;
}
exports.toMPHHolderInput = toMPHHolderInput;
var Mutation = /** @class */ (function () {
    function Mutation() {
    }
    return Mutation;
}());
exports.Mutation = Mutation;
var Proof = /** @class */ (function () {
    function Proof() {
    }
    return Proof;
}());
exports.Proof = Proof;
var Query = /** @class */ (function () {
    function Query() {
    }
    return Query;
}());
exports.Query = Query;
var User = /** @class */ (function () {
    function User(id) {
        this.__typename = "User";
        if (id) {
            this.id = id;
        }
    }
    User.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.UserDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result && result.data != undefined && result.data.User != undefined) {
            var value = result.data.User;
            return toUser(value);
        }
        return null;
    };
    User.prototype.save = function () {
        var operationDocument = exports.UpdateUserDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    User.prototype._getSaveArgs = function () {
        return toUserInput(this);
    };
    return User;
}());
exports.User = User;
function toUser(objInput) {
    var obj = new User();
    obj.__typename = "User";
    obj.id = objInput.id;
    obj.address = objInput.address;
    obj.DPoolIDs = objInput.DPoolIDs;
    obj.DepositIDs = objInput.DepositIDs;
    obj.UserTotalDepositIDs = objInput.UserTotalDepositIDs;
    return obj;
}
exports.toUser = toUser;
function toUserInput(obj) {
    var objInput = {
        __typename: "UserInput",
        id: obj.id,
        address: obj.address,
        DPoolIDs: obj.DPoolIDs,
        DepositIDs: obj.DepositIDs,
        UserTotalDepositIDs: obj.UserTotalDepositIDs
    };
    return objInput;
}
exports.toUserInput = toUserInput;
var UserTotalDeposit = /** @class */ (function () {
    function UserTotalDeposit(id) {
        this.__typename = "UserTotalDeposit";
        if (id) {
            this.id = id;
        }
    }
    UserTotalDeposit.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.UserTotalDepositDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result &&
            result.data != undefined &&
            result.data.UserTotalDeposit != undefined) {
            var value = result.data.UserTotalDeposit;
            return toUserTotalDeposit(value);
        }
        return null;
    };
    UserTotalDeposit.prototype.save = function () {
        var operationDocument = exports.UpdateUserTotalDepositDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    UserTotalDeposit.prototype._getSaveArgs = function () {
        return toUserTotalDepositInput(this);
    };
    return UserTotalDeposit;
}());
exports.UserTotalDeposit = UserTotalDeposit;
function toUserTotalDeposit(objInput) {
    var obj = new UserTotalDeposit();
    obj.__typename = "UserTotalDeposit";
    obj.id = objInput.id;
    obj.UserID = utils_1.parseString(objInput.UserID);
    obj.DPoolID = utils_1.parseString(objInput.DPoolID);
    return obj;
}
exports.toUserTotalDeposit = toUserTotalDeposit;
function toUserTotalDepositInput(obj) {
    var objInput = {
        __typename: "UserTotalDepositInput",
        id: obj.id,
        UserID: utils_1.parseString(obj.UserID),
        DPoolID: utils_1.parseString(obj.DPoolID)
    };
    return objInput;
}
exports.toUserTotalDepositInput = toUserTotalDepositInput;
var Vest = /** @class */ (function () {
    function Vest(id) {
        this.__typename = "Vest";
        if (id) {
            this.id = id;
        }
    }
    Vest.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.VestDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result && result.data != undefined && result.data.Vest != undefined) {
            var value = result.data.Vest;
            return toVest(value);
        }
        return null;
    };
    Vest.prototype.save = function () {
        var operationDocument = exports.UpdateVestDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    Vest.prototype._getSaveArgs = function () {
        return toVestInput(this);
    };
    return Vest;
}());
exports.Vest = Vest;
function toVest(objInput) {
    var obj = new Vest();
    obj.__typename = "Vest";
    obj.id = objInput.id;
    obj.user = utils_1.parseString(objInput.user);
    return obj;
}
exports.toVest = toVest;
function toVestInput(obj) {
    var objInput = {
        __typename: "VestInput",
        id: obj.id,
        user: utils_1.parseString(obj.user)
    };
    return objInput;
}
exports.toVestInput = toVestInput;
exports.DPoolListDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "DPoolList" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "prove" }
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "DPoolList" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "id" },
                                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "prove" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "prove" }
                                }
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                { kind: "Field", name: { kind: "Name", value: "DPoolIDs" } }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.UpdateDPoolListDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "UpdateDPoolList" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "input" }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "DPoolListInput" }
                        }
                    }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "UpdateDPoolList" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "input" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "input" }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
exports.DPoolDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "DPool" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "prove" }
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "DPool" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "id" },
                                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "prove" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "prove" }
                                }
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                { kind: "Field", name: { kind: "Name", value: "address" } },
                                { kind: "Field", name: { kind: "Name", value: "moneyMarket" } },
                                { kind: "Field", name: { kind: "Name", value: "stablecoin" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "interestModel" }
                                },
                                { kind: "Field", name: { kind: "Name", value: "UserIDs" } },
                                { kind: "Field", name: { kind: "Name", value: "DepositIDs" } },
                                { kind: "Field", name: { kind: "Name", value: "FunderIDs" } },
                                { kind: "Field", name: { kind: "Name", value: "FundingIDs" } }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.UpdateDPoolDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "UpdateDPool" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "input" }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "DPoolInput" }
                        }
                    }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "UpdateDPool" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "input" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "input" }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
exports.UserDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "User" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "prove" }
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "User" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "id" },
                                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "prove" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "prove" }
                                }
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                { kind: "Field", name: { kind: "Name", value: "address" } },
                                { kind: "Field", name: { kind: "Name", value: "DPoolIDs" } },
                                { kind: "Field", name: { kind: "Name", value: "DepositIDs" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "UserTotalDepositIDs" }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.UpdateUserDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "UpdateUser" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "input" }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "UserInput" }
                        }
                    }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "UpdateUser" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "input" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "input" }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
exports.UserTotalDepositDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "UserTotalDeposit" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "prove" }
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "UserTotalDeposit" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "id" },
                                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "prove" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "prove" }
                                }
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                { kind: "Field", name: { kind: "Name", value: "UserID" } },
                                { kind: "Field", name: { kind: "Name", value: "DPoolID" } }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.UpdateUserTotalDepositDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "UpdateUserTotalDeposit" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "input" }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "UserTotalDepositInput" }
                        }
                    }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "UpdateUserTotalDeposit" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "input" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "input" }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
exports.DepositDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "Deposit" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "prove" }
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "Deposit" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "id" },
                                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "prove" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "prove" }
                                }
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                { kind: "Field", name: { kind: "Name", value: "UserID" } },
                                { kind: "Field", name: { kind: "Name", value: "DPoolID" } },
                                { kind: "Field", name: { kind: "Name", value: "active" } }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.UpdateDepositDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "UpdateDeposit" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "input" }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "DepositInput" }
                        }
                    }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "UpdateDeposit" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "input" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "input" }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
exports.FunderDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "Funder" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "prove" }
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "Funder" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "id" },
                                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "prove" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "prove" }
                                }
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                { kind: "Field", name: { kind: "Name", value: "address" } },
                                { kind: "Field", name: { kind: "Name", value: "DPoolIDs" } },
                                { kind: "Field", name: { kind: "Name", value: "FundingIDs" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "FunderTotalInterestIDs" }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.UpdateFunderDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "UpdateFunder" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "input" }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "FunderInput" }
                        }
                    }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "UpdateFunder" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "input" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "input" }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
exports.FunderTotalInterestDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "FunderTotalInterest" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "prove" }
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "FunderTotalInterest" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "id" },
                                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "prove" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "prove" }
                                }
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                { kind: "Field", name: { kind: "Name", value: "FunderID" } },
                                { kind: "Field", name: { kind: "Name", value: "DPoolID" } }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.UpdateFunderTotalInterestDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "UpdateFunderTotalInterest" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "input" }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "FunderTotalInterestInput" }
                        }
                    }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "UpdateFunderTotalInterest" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "input" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "input" }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
exports.FundingDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "Funding" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "prove" }
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "Funding" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "id" },
                                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "prove" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "prove" }
                                }
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                { kind: "Field", name: { kind: "Name", value: "FunderID" } },
                                { kind: "Field", name: { kind: "Name", value: "DPoolID" } },
                                { kind: "Field", name: { kind: "Name", value: "active" } }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.UpdateFundingDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "UpdateFunding" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "input" }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "FundingInput" }
                        }
                    }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "UpdateFunding" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "input" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "input" }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
exports.MPHHolderDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "MPHHolder" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "prove" }
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "MPHHolder" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "id" },
                                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "prove" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "prove" }
                                }
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                { kind: "Field", name: { kind: "Name", value: "address" } }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.UpdateMPHHolderDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "UpdateMPHHolder" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "input" }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "MPHHolderInput" }
                        }
                    }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "UpdateMPHHolder" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "input" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "input" }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
exports.MPHDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "MPH" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "prove" }
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "MPH" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "id" },
                                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "prove" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "prove" }
                                }
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.UpdateMPHDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "UpdateMPH" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "input" }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "MPHInput" }
                        }
                    }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "UpdateMPH" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "input" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "input" }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
exports.VestDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "Vest" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "prove" }
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "Vest" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "id" },
                                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "prove" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "prove" }
                                }
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                { kind: "Field", name: { kind: "Name", value: "user" } }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.UpdateVestDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "UpdateVest" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "input" }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "VestInput" }
                        }
                    }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "UpdateVest" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "input" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "input" }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
exports.FractionalDepositDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "FractionalDeposit" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
                },
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "prove" }
                    },
                    type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "FractionalDeposit" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "id" },
                                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "prove" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "prove" }
                                }
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                { kind: "Field", name: { kind: "Name", value: "address" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "zeroCouponBondAddress" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "ownerAddress" }
                                },
                                { kind: "Field", name: { kind: "Name", value: "active" } },
                                { kind: "Field", name: { kind: "Name", value: "DepositID" } }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.UpdateFractionalDepositDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "UpdateFractionalDeposit" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "input" }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "FractionalDepositInput" }
                        }
                    }
                }
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "UpdateFractionalDeposit" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "input" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "input" }
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
function gqlFetch(operation, variables) {
    //return useGQLFetch(operation, variables);
    return useFetch(operation, variables);
}
function getProperty(obj, key) {
    return obj[key]; // Inferred type is T[K]
}
function setProperty(obj, key, value) {
    obj[key] = value;
}
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
//# sourceMappingURL=models.js.map