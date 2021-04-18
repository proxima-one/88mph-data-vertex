"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMPHDocument = exports.MPHDocument = exports.UpdateMPHHolderDocument = exports.MPHHolderDocument = exports.UpdateFundingDocument = exports.FundingDocument = exports.UpdateFunderTotalInterestDocument = exports.FunderTotalInterestDocument = exports.UpdateFunderDocument = exports.FunderDocument = exports.UpdateDepositDocument = exports.DepositDocument = exports.UpdateUserTotalDepositDocument = exports.UserTotalDepositDocument = exports.UpdateUserDocument = exports.UserDocument = exports.UpdateDPoolDocument = exports.DPoolDocument = exports.UpdateDPoolListDocument = exports.DPoolListDocument = exports.dpoolsLatestDepositsDocument = exports.dpoolsLatestDocument = exports.funderDocument = exports.dpoolsDocument = exports.userDocument = exports.Funder = exports.Proof = exports.MPH = exports.MPHHolder = exports.Funding = exports.FunderTotalInterest = exports.Deposit = exports.UserTotalDeposit = exports.User = exports.DPool = exports.DPoolList = exports.Mutation = void 0;
var DataVertexClient_1 = require("../../lib/DataVertexClient");
function convertArray(valueArr, newValue) {
    return valueArr.map(function (prop) {
        convert(prop);
    });
}
function convert(value, newValue) {
    // if (value instanceof Array) {
    //   return convertArray(value, newValue)
    // }
    console.log("Values");
    console.log(value);
    //check if new value is a class
    if (value) {
        return newValue;
    }
    //check if value has id
    //if value has id
    //convert to string
    //if type is string
    //toString
    //check numbers
    //
    //check
    return null;
}
function getNameInSaveArgs(name, args) {
    //name
    //determine the name and type that the value should be.
    //convert to the type needed...
    var plural = "";
    if (name.lastIndexOf("s") == name.length - 1) {
        plural = "s";
        name = name.slice(name.length - 1);
    }
    //get new name and set plural
    var fieldIdName = lowercaseFirstLetter(name + "ID" + plural);
    var fieldIDName = lowercaseFirstLetter(name + "Id" + plural);
    var fieldReplaceIdwithID = lowercaseFirstLetter(name.replace("Id", "ID"));
    var names = [name, fieldIdName, fieldIDName, fieldReplaceIdwithID];
    //add to the save args value
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var n = names_1[_i];
        if (n in args) {
            return n;
        }
    }
    return "";
}
var Mutation = /** @class */ (function () {
    function Mutation() {
    }
    return Mutation;
}());
exports.Mutation = Mutation;
var DPoolList = /** @class */ (function () {
    function DPoolList(id) {
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
            result.data &&
            result.data.DPoolList.__typename == "DPoolList") {
            return result.data.DPoolList;
        }
        return null;
    };
    DPoolList.prototype.save = function () {
        var operationDocument = exports.UpdateDPoolListDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    //hasOwnProperty
    DPoolList.prototype._getSaveArgs = function () {
        //input
        var saveArgs = {};
        var _loop_1 = function (name_1, value) {
            var hasField = saveArgs.hasOwnProperty(name_1);
            var fieldIdName = lowercaseFirstLetter(name_1.replace("Id", ""));
            var hasFieldId = saveArgs.hasOwnProperty(name_1);
            if (!hasFieldId && !hasField) {
                return "continue";
            }
            var isList = value instanceof Array;
            if (hasFieldId &&
                isList &&
                value instanceof Array &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                var valueIds_1 = [];
                value.map(function (v) {
                    if ("id" in v) {
                        valueIds_1.push(v["id"]);
                    }
                });
                saveArgs[fieldIdName] = valueIds_1;
            }
            else if (hasFieldId &&
                !isList &&
                value.hasOwnProperty("id") &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                saveArgs[fieldIdName] = value.id;
            }
            else {
                saveArgs[name_1] = value;
            }
        };
        for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
            var _b = _a[_i], name_1 = _b[0], value = _b[1];
            _loop_1(name_1, value);
        }
        return saveArgs;
    };
    return DPoolList;
}());
exports.DPoolList = DPoolList;
var DPool = /** @class */ (function () {
    function DPool(id) {
        if (id) {
            this.id = id;
        }
    }
    DPool.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.DPoolDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result && result.data && result.data.DPool.__typename == "DPool") {
            return result.data.DPool;
        }
        return null;
    };
    DPool.prototype.save = function () {
        var operationDocument = exports.UpdateDPoolDocument;
        var saveVariables = { input: this._getSaveArgs() };
        console.log(saveVariables, this._getSaveArgs());
        gqlFetch(operationDocument, saveVariables);
    };
    // convertToType(type, type, value) {}
    // let valueIds: Array<any> = [];
    // (value as Array<{ [x: string]: any }>).map(
    //   (v: { [x: string]: any }) => {
    //     if ("id" in v) {
    //       valueIds.push(v["id"]);
    //     }
    //   }
    //else (
    //   hasFieldId &&
    //   !isList &&
    //   value.hasOwnProperty("id") &&
    //   saveArgs.hasOwnProperty(fieldIdName)
    // ) {
    //   saveArgs[fieldIdName as keyof DPoolInput] = value.id;
    // }
    // //convert array type
    //
    DPool.prototype._getSaveArgs = function () {
        //input
        console.log("This");
        console.log(Object.entries(this));
        var saveArgs = {};
        //pick the parsed type
        console.log(Object.keys(saveArgs));
        //for all of the object entries that are in dpoolinput, but not in dpool
        //ids,
        //if it is in
        //for all of the names in the object check for the names
        for (var key in this) {
            console.log("Key");
            console.log(key);
            //console.log("Value");
            //console.log(value);
            var value = this[key];
            var name_2 = getNameInSaveArgs(key, saveArgs);
            console.log("Names");
            console.log(name_2);
            if (name_2 == "") {
                continue;
            }
            var v = getProperty(saveArgs, name_2);
            console.log(typeof v);
            console.log(v);
            if (value == undefined || v == undefined) {
                continue;
            }
            if (value instanceof Array) {
                //newValue
                //setProperty
                //v = convertArray(value);
                console.log(value);
            }
            else {
                v = convert(value);
            }
            setProperty(saveArgs, name_2, v);
            //set value //
        }
        return saveArgs;
    };
    return DPool;
}());
exports.DPool = DPool;
var User = /** @class */ (function () {
    function User(id) {
        if (id) {
            this.id = id;
        }
    }
    User.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.UserDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result && result.data && result.data.User.__typename == "User") {
            return result.data.User;
        }
        return null;
    };
    User.prototype.save = function () {
        var operationDocument = exports.UpdateUserDocument;
        var saveArgs = this._getSaveArgs();
        var saveVariables = { input: saveArgs };
        gqlFetch(operationDocument, saveVariables);
    };
    User.prototype._getSaveArgs = function () {
        //input
        var saveArgs = {};
        console.log("This");
        console.log(Object.entries(this));
        var _loop_2 = function (name_3, value) {
            var hasField = saveArgs.hasOwnProperty(name_3);
            var fieldIdName = lowercaseFirstLetter(name_3.replace("Id", ""));
            var hasFieldId = saveArgs.hasOwnProperty(name_3);
            if (!hasFieldId && !hasField) {
                return "continue";
            }
            var isList = value instanceof Array;
            if (hasFieldId &&
                isList &&
                value instanceof Array &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                var valueIds_2 = [];
                value.map(function (v) {
                    if ("id" in v) {
                        valueIds_2.push(v["id"]);
                    }
                });
                saveArgs[fieldIdName] = valueIds_2;
            }
            else if (hasFieldId &&
                !isList &&
                value.hasOwnProperty("id") &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                saveArgs[fieldIdName] = value.id;
            }
            else {
                saveArgs[name_3] = value;
            }
        };
        for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
            var _b = _a[_i], name_3 = _b[0], value = _b[1];
            _loop_2(name_3, value);
        }
        return saveArgs;
    };
    return User;
}());
exports.User = User;
var UserTotalDeposit = /** @class */ (function () {
    function UserTotalDeposit(id) {
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
            result.data &&
            result.data.UserTotalDeposit.__typename == "UserTotalDeposit") {
            return result.data.UserTotalDeposit;
        }
        return null;
    };
    UserTotalDeposit.prototype.save = function () {
        var operationDocument = exports.UpdateUserTotalDepositDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    UserTotalDeposit.prototype._getSaveArgs = function () {
        //input
        var saveArgs = {};
        var _loop_3 = function (name_4, value) {
            var hasField = saveArgs.hasOwnProperty(name_4);
            var fieldIdName = lowercaseFirstLetter(name_4.replace("Id", ""));
            var hasFieldId = saveArgs.hasOwnProperty(name_4);
            if (!hasFieldId && !hasField) {
                return "continue";
            }
            var isList = value instanceof Array;
            if (hasFieldId &&
                isList &&
                value instanceof Array &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                var valueIds_3 = [];
                value.map(function (v) {
                    if ("id" in v) {
                        valueIds_3.push(v["id"]);
                    }
                });
                saveArgs[fieldIdName] = valueIds_3;
            }
            else if (hasFieldId &&
                !isList &&
                value.hasOwnProperty("id") &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                saveArgs[fieldIdName] = value.id;
            }
            else {
                saveArgs[name_4] = value;
            }
        };
        for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
            var _b = _a[_i], name_4 = _b[0], value = _b[1];
            _loop_3(name_4, value);
        }
        return saveArgs;
    };
    return UserTotalDeposit;
}());
exports.UserTotalDeposit = UserTotalDeposit;
var Deposit = /** @class */ (function () {
    function Deposit(id) {
        if (id) {
            this.id = id;
        }
    }
    Deposit.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.DepositDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result && result.data && result.data.Deposit.__typename == "Deposit") {
            return result.data.Deposit;
        }
        return null;
    };
    Deposit.prototype.save = function () {
        var operationDocument = exports.UpdateDepositDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    Deposit.prototype._getSaveArgs = function () {
        //input
        var saveArgs = {};
        var _loop_4 = function (name_5, value) {
            var hasField = saveArgs.hasOwnProperty(name_5);
            var fieldIdName = lowercaseFirstLetter(name_5.replace("Id", ""));
            var hasFieldId = saveArgs.hasOwnProperty(name_5);
            if (!hasFieldId && !hasField) {
                return "continue";
            }
            var isList = value instanceof Array;
            if (hasFieldId &&
                isList &&
                value instanceof Array &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                var valueIds_4 = [];
                value.map(function (v) {
                    if ("id" in v) {
                        valueIds_4.push(v["id"]);
                    }
                });
                saveArgs[fieldIdName] = valueIds_4;
            }
            else if (hasFieldId &&
                !isList &&
                value.hasOwnProperty("id") &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                saveArgs[fieldIdName] = value.id;
            }
            else {
                saveArgs[name_5] = value;
            }
        };
        for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
            var _b = _a[_i], name_5 = _b[0], value = _b[1];
            _loop_4(name_5, value);
        }
        return saveArgs;
    };
    return Deposit;
}());
exports.Deposit = Deposit;
var FunderTotalInterest = /** @class */ (function () {
    function FunderTotalInterest(id) {
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
            result.data &&
            result.data.FunderTotalInterest.__typename == "FunderTotalInterest") {
            return result.data.FunderTotalInterest;
        }
        return null;
    };
    FunderTotalInterest.prototype.save = function () {
        var operationDocument = exports.UpdateFunderTotalInterestDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    FunderTotalInterest.prototype._getSaveArgs = function () {
        //input
        var saveArgs = {};
        var _loop_5 = function (name_6, value) {
            var hasField = saveArgs.hasOwnProperty(name_6);
            var fieldIdName = lowercaseFirstLetter(name_6.replace("Id", ""));
            var hasFieldId = saveArgs.hasOwnProperty(name_6);
            if (!hasFieldId && !hasField) {
                return "continue";
            }
            var isList = value instanceof Array;
            if (hasFieldId &&
                isList &&
                value instanceof Array &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                var valueIds_5 = [];
                value.map(function (v) {
                    if ("id" in v) {
                        valueIds_5.push(v["id"]);
                    }
                });
                saveArgs[fieldIdName] = valueIds_5;
            }
            else if (hasFieldId &&
                !isList &&
                value.hasOwnProperty("id") &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                saveArgs[fieldIdName] = value.id;
            }
            else {
                saveArgs[name_6] = value;
            }
        };
        for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
            var _b = _a[_i], name_6 = _b[0], value = _b[1];
            _loop_5(name_6, value);
        }
        return saveArgs;
    };
    return FunderTotalInterest;
}());
exports.FunderTotalInterest = FunderTotalInterest;
var Funding = /** @class */ (function () {
    function Funding(id) {
        if (id) {
            this.id = id;
        }
    }
    Funding.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.FundingDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result && result.data && result.data.Funding.__typename == "Funding") {
            return result.data.Funding;
        }
        return null;
    };
    Funding.prototype.save = function () {
        var operationDocument = exports.UpdateFundingDocument;
        var args = this._getSaveArgs();
        var saveVariables = { input: args };
        gqlFetch(operationDocument, saveVariables);
    };
    Funding.prototype._getSaveArgs = function () {
        //input
        var saveArgs = {};
        console.log(this);
        var _loop_6 = function (name_7, value) {
            console.log(name_7.toString());
            console.log(value);
            var hasField = saveArgs.hasOwnProperty(name_7);
            var fieldIdName = lowercaseFirstLetter(name_7.replace("Id", ""));
            var hasFieldId = saveArgs.hasOwnProperty(name_7);
            if (!hasFieldId && !hasField) {
                return "continue";
            }
            var isList = value instanceof Array;
            if (hasFieldId &&
                isList &&
                value instanceof Array &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                var valueIds_6 = [];
                value.map(function (v) {
                    if ("id" in v) {
                        valueIds_6.push(v["id"]);
                    }
                });
                saveArgs[fieldIdName] = valueIds_6;
            }
            else if (hasFieldId &&
                !isList &&
                value.hasOwnProperty("id") &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                saveArgs[fieldIdName] = value.id;
            }
            else {
                saveArgs[name_7] = value;
            }
        };
        for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
            var _b = _a[_i], name_7 = _b[0], value = _b[1];
            _loop_6(name_7, value);
        }
        return saveArgs;
    };
    return Funding;
}());
exports.Funding = Funding;
var MPHHolder = /** @class */ (function () {
    function MPHHolder(id) {
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
            result.data &&
            result.data.MPHHolder.__typename == "MPHHolder") {
            return result.data.MPHHolder;
        }
        return null;
    };
    MPHHolder.prototype.save = function () {
        var operationDocument = exports.UpdateMPHHolderDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    MPHHolder.prototype._getSaveArgs = function () {
        //input
        var saveArgs = {};
        var _loop_7 = function (name_8, value) {
            var hasField = saveArgs.hasOwnProperty(name_8);
            var fieldIdName = lowercaseFirstLetter(name_8.replace("Id", ""));
            var hasFieldId = saveArgs.hasOwnProperty(name_8);
            if (!hasFieldId && !hasField) {
                return "continue";
            }
            var isList = value instanceof Array;
            if (hasFieldId &&
                isList &&
                value instanceof Array &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                var valueIds_7 = [];
                value.map(function (v) {
                    if ("id" in v) {
                        valueIds_7.push(v["id"]);
                    }
                });
                saveArgs[fieldIdName] = valueIds_7;
            }
            else if (hasFieldId &&
                !isList &&
                value.hasOwnProperty("id") &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                saveArgs[fieldIdName] = value.id;
            }
            else {
                saveArgs[name_8] = value;
            }
        };
        for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
            var _b = _a[_i], name_8 = _b[0], value = _b[1];
            _loop_7(name_8, value);
        }
        return saveArgs;
    };
    return MPHHolder;
}());
exports.MPHHolder = MPHHolder;
var MPH = /** @class */ (function () {
    function MPH(id) {
        if (id) {
            this.id = id;
        }
    }
    MPH.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.MPHDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result && result.data && result.data.MPH.__typename == "MPH") {
            return result.data.MPH;
        }
        return null;
    };
    MPH.prototype.save = function () {
        var operationDocument = exports.UpdateMPHDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    MPH.prototype._getSaveArgs = function () {
        //input
        var saveArgs = {};
        var _loop_8 = function (name_9, value) {
            var hasField = saveArgs.hasOwnProperty(name_9);
            var fieldIdName = lowercaseFirstLetter(name_9.replace("Id", ""));
            var hasFieldId = saveArgs.hasOwnProperty(name_9);
            if (!hasFieldId && !hasField) {
                return "continue";
            }
            var isList = value instanceof Array;
            if (hasFieldId &&
                isList &&
                value instanceof Array &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                var valueIds_8 = [];
                value.map(function (v) {
                    if ("id" in v) {
                        valueIds_8.push(v["id"]);
                    }
                });
                saveArgs[fieldIdName] = valueIds_8;
            }
            else if (hasFieldId &&
                !isList &&
                value.hasOwnProperty("id") &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                saveArgs[fieldIdName] = value.id;
            }
            else {
                saveArgs[name_9] = value;
            }
        };
        for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
            var _b = _a[_i], name_9 = _b[0], value = _b[1];
            _loop_8(name_9, value);
        }
        return saveArgs;
    };
    return MPH;
}());
exports.MPH = MPH;
var Proof = /** @class */ (function () {
    function Proof() {
    }
    return Proof;
}());
exports.Proof = Proof;
var Funder = /** @class */ (function () {
    function Funder(id) {
        if (id) {
            this.id = id;
        }
    }
    Funder.load = function (id, prove) {
        if (prove === void 0) { prove = false; }
        var operationDocument = exports.FunderDocument;
        var loadVariables = { id: id, prove: prove };
        var result = gqlFetch(operationDocument, loadVariables);
        if (result && result.data && result.data.Funder.__typename == "Funder") {
            return result.data.Funder;
        }
        return null;
    };
    Funder.prototype.save = function () {
        var operationDocument = exports.UpdateFunderDocument;
        var saveVariables = { input: this._getSaveArgs() };
        gqlFetch(operationDocument, saveVariables);
    };
    Funder.prototype._getSaveArgs = function () {
        //input
        var saveArgs = {};
        var _loop_9 = function (name_10, value) {
            var hasField = saveArgs.hasOwnProperty(name_10);
            var fieldIdName = lowercaseFirstLetter(name_10.replace("Id", ""));
            var hasFieldId = saveArgs.hasOwnProperty(name_10);
            if (!hasFieldId && !hasField) {
                return "continue";
            }
            var isList = value instanceof Array;
            if (hasFieldId &&
                isList &&
                value instanceof Array &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                var valueIds_9 = [];
                value.map(function (v) {
                    if ("id" in v) {
                        valueIds_9.push(v["id"]);
                    }
                });
                saveArgs[fieldIdName] = valueIds_9;
            }
            else if (hasFieldId &&
                !isList &&
                value.hasOwnProperty("id") &&
                saveArgs.hasOwnProperty(fieldIdName)) {
                saveArgs[fieldIdName] = value.id;
            }
            else {
                saveArgs[name_10] = value;
            }
        };
        for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
            var _b = _a[_i], name_10 = _b[0], value = _b[1];
            _loop_9(name_10, value);
        }
        return saveArgs;
    };
    return Funder;
}());
exports.Funder = Funder;
exports.userDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "user" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
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
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalMPHEarned" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalMPHPaidBack" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "pools" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "id" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "address" }
                                            },
                                            {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "mphDepositorRewardMultiplier"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalDepositByPool" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "pool" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "address" }
                                                        },
                                                        {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "stablecoin" }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "totalActiveDeposit" }
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "totalInterestEarned" }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.dpoolsDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "dpools" },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "DPools" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                { kind: "Field", name: { kind: "Name", value: "address" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalActiveDeposit" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "oneYearInterestRate" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "mphDepositorRewardMultiplier" }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.funderDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "funder" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
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
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalMPHEarned" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "pools" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "id" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "address" }
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "fundings" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "id" }
                                                        },
                                                        {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "pool" },
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [
                                                                    {
                                                                        kind: "Field",
                                                                        name: { kind: "Name", value: "address" }
                                                                    },
                                                                    {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "oracleInterestRate"
                                                                        }
                                                                    },
                                                                    {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "moneyMarketIncomeIndex"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "fromDepositID" }
                                                        },
                                                        {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "toDepositID" }
                                                        },
                                                        {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "nftID" }
                                                        },
                                                        {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "recordedFundedDepositAmount"
                                                            }
                                                        },
                                                        {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "recordedMoneyMarketIncomeIndex"
                                                            }
                                                        },
                                                        {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "initialFundedDepositAmount"
                                                            }
                                                        },
                                                        {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "fundedDeficitAmount"
                                                            }
                                                        },
                                                        {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "totalInterestEarned"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalInterestByPool" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "pool" },
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [
                                                        {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "id" }
                                                        },
                                                        {
                                                            kind: "Field",
                                                            name: { kind: "Name", value: "stablecoin" }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "totalDeficitFunded" }
                                            },
                                            {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "totalRecordedFundedDepositAmount"
                                                }
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "totalInterestEarned" }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.dpoolsLatestDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "dpoolsLatest" },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "DPools" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                { kind: "Field", name: { kind: "Name", value: "address" } },
                                { kind: "Field", name: { kind: "Name", value: "surplus" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "unfundedDepositAmount" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "oneYearInterestRate" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "oracleInterestRate" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "mphFunderRewardMultiplier" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "deposits" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "nftID" } },
                                            { kind: "Field", name: { kind: "Name", value: "id" } }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
exports.dpoolsLatestDepositsDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "dpoolsLatestDeposits" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
                    }
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
                            }
                        ],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "moneyMarketIncomeIndex" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "deposits" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            { kind: "Field", name: { kind: "Name", value: "nftID" } },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "amount" }
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "active" }
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "maturationTimestamp" }
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "interestEarned" }
                                            },
                                            {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "initialMoneyMarketIncomeIndex"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
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
                                { kind: "Field", name: { kind: "Name", value: "numPools" } },
                                { kind: "Field", name: { kind: "Name", value: "numUsers" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "numActiveUsers" }
                                },
                                { kind: "Field", name: { kind: "Name", value: "numFunders" } }
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
                        name: { kind: "Name", value: "updateDPoolList" },
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
                                { kind: "Field", name: { kind: "Name", value: "numUsers" } },
                                { kind: "Field", name: { kind: "Name", value: "numDeposits" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "numActiveDeposits" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalActiveDeposit" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalHistoricalDeposit" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalInterestPaid" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "unfundedDepositAmount" }
                                },
                                { kind: "Field", name: { kind: "Name", value: "numFunders" } },
                                { kind: "Field", name: { kind: "Name", value: "numFundings" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "MinDepositPeriod" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "MaxDepositPeriod" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "MinDepositAmount" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "MaxDepositAmount" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "mphMintingMultiplier" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "mphDepositorRewardMultiplier" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "mphFunderRewardMultiplier" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "oneYearInterestRate" }
                                },
                                { kind: "Field", name: { kind: "Name", value: "surplus" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "moneyMarketIncomeIndex" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "oracleInterestRate" }
                                }
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
                        name: { kind: "Name", value: "updateDPool" },
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
                                { kind: "Field", name: { kind: "Name", value: "numPools" } },
                                { kind: "Field", name: { kind: "Name", value: "numDeposits" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "numActiveDeposits" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalMPHEarned" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalMPHPaidBack" }
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
                        name: { kind: "Name", value: "updateUser" },
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
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalActiveDeposit" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalHistoricalDeposit" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalInterestEarned" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalHistoricalInterestEarned" }
                                }
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
                        name: { kind: "Name", value: "updateUserTotalDeposit" },
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
                                { kind: "Field", name: { kind: "Name", value: "nftID" } },
                                { kind: "Field", name: { kind: "Name", value: "amount" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "maturationTimestamp" }
                                },
                                { kind: "Field", name: { kind: "Name", value: "active" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "depositTimestamp" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "interestEarned" }
                                },
                                { kind: "Field", name: { kind: "Name", value: "fundingID" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "mintMPHAmount" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "takeBackMPHAmount" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "initialMoneyMarketIncomeIndex" }
                                }
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
                        name: { kind: "Name", value: "updateDeposit" },
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
                                { kind: "Field", name: { kind: "Name", value: "numPools" } },
                                { kind: "Field", name: { kind: "Name", value: "numFundings" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalMPHEarned" }
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
                        name: { kind: "Name", value: "updateFunder" },
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
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalDeficitFunded" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalHistoricalDeficitFunded" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalInterestEarned" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalHistoricalInterestEarned" }
                                },
                                {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "totalRecordedFundedDepositAmount"
                                    }
                                }
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
                        name: { kind: "Name", value: "updateFunderTotalInterest" },
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
                                { kind: "Field", name: { kind: "Name", value: "nftID" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "fromDepositID" }
                                },
                                { kind: "Field", name: { kind: "Name", value: "toDepositID" } },
                                { kind: "Field", name: { kind: "Name", value: "active" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "recordedFundedDepositAmount" }
                                },
                                {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "recordedMoneyMarketIncomeIndex"
                                    }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "initialFundedDepositAmount" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "fundedDeficitAmount" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalInterestEarned" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "mintMPHAmount" }
                                }
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
                        name: { kind: "Name", value: "updateFunding" },
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
                                { kind: "Field", name: { kind: "Name", value: "address" } },
                                { kind: "Field", name: { kind: "Name", value: "mphBalance" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "stakedMPHBalance" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalHistoricalReward" }
                                }
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
                        name: { kind: "Name", value: "updateMPHHolder" },
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
                                { kind: "Field", name: { kind: "Name", value: "id" } },
                                { kind: "Field", name: { kind: "Name", value: "totalSupply" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalStakedMPHBalance" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "totalHistoricalReward" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "rewardPerSecond" }
                                },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "rewardPerMPHPerSecond" }
                                }
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
                        name: { kind: "Name", value: "updateMPH" },
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
    console.log(operation);
    console.log(variables);
    return DataVertexClient_1.useFetch(operation, variables);
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
// function arr<T, U>(
//   arr: any,
//   arg1: any,
//   idKey: any,
//   TK: any,
//   titleKey: any,
//   TK: any
// ) {
//   throw new Error("Function not implemented.");
// }
//# sourceMappingURL=models.js.map