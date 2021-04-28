"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.UpdateFractionalDepositDocument = exports.FractionalDepositDocument = exports.UpdateVestDocument = exports.VestDocument = exports.UpdateMPHDocument = exports.MPHDocument = exports.UpdateMPHHolderDocument = exports.MPHHolderDocument = exports.UpdateFundingDocument = exports.FundingDocument = exports.UpdateFunderTotalInterestDocument = exports.FunderTotalInterestDocument = exports.UpdateFunderDocument = exports.FunderDocument = exports.UpdateDepositDocument = exports.DepositDocument = exports.UpdateUserTotalDepositDocument = exports.UserTotalDepositDocument = exports.UpdateUserDocument = exports.UserDocument = exports.UpdateDPoolDocument = exports.DPoolDocument = exports.UpdateDPoolListDocument = exports.DPoolListDocument = exports.Vest = exports.UserTotalDeposit = exports.User = exports.Query = exports.Proof = exports.Mutation = exports.MPHHolder = exports.MPH = exports.Funding = exports.FunderTotalInterest = exports.Funder = exports.FractionalDeposit = exports.Deposit = exports.DPoolList = exports.DPool = void 0;
var tslib_1 = require("tslib");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var DPool = /** @class */ (function () {
    function DPool() {
    }
    return DPool;
}());
exports.DPool = DPool;
;
var DPoolList = /** @class */ (function () {
    function DPoolList() {
    }
    return DPoolList;
}());
exports.DPoolList = DPoolList;
;
var Deposit = /** @class */ (function () {
    function Deposit() {
    }
    return Deposit;
}());
exports.Deposit = Deposit;
;
var FractionalDeposit = /** @class */ (function () {
    function FractionalDeposit() {
    }
    return FractionalDeposit;
}());
exports.FractionalDeposit = FractionalDeposit;
;
var Funder = /** @class */ (function () {
    function Funder() {
    }
    return Funder;
}());
exports.Funder = Funder;
;
var FunderTotalInterest = /** @class */ (function () {
    function FunderTotalInterest() {
    }
    return FunderTotalInterest;
}());
exports.FunderTotalInterest = FunderTotalInterest;
;
var Funding = /** @class */ (function () {
    function Funding() {
    }
    return Funding;
}());
exports.Funding = Funding;
;
var MPH = /** @class */ (function () {
    function MPH() {
    }
    return MPH;
}());
exports.MPH = MPH;
;
var MPHHolder = /** @class */ (function () {
    function MPHHolder() {
    }
    return MPHHolder;
}());
exports.MPHHolder = MPHHolder;
;
var Mutation = /** @class */ (function () {
    function Mutation() {
    }
    return Mutation;
}());
exports.Mutation = Mutation;
;
var Proof = /** @class */ (function () {
    function Proof() {
    }
    return Proof;
}());
exports.Proof = Proof;
;
var Query = /** @class */ (function () {
    function Query() {
    }
    return Query;
}());
exports.Query = Query;
;
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
;
var UserTotalDeposit = /** @class */ (function () {
    function UserTotalDeposit() {
    }
    return UserTotalDeposit;
}());
exports.UserTotalDeposit = UserTotalDeposit;
;
var Vest = /** @class */ (function () {
    function Vest() {
    }
    return Vest;
}());
exports.Vest = Vest;
;
exports.DPoolListDocument = graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    query DPoolList($id: ID!, $prove: Boolean) {\n  DPoolList(id: $id, prove: $prove) {\n    id\n    DPoolIDs\n  }\n}\n    "], ["\n    query DPoolList($id: ID!, $prove: Boolean) {\n  DPoolList(id: $id, prove: $prove) {\n    id\n    DPoolIDs\n  }\n}\n    "])));
exports.UpdateDPoolListDocument = graphql_tag_1.default(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    mutation UpdateDPoolList($input: DPoolListInput!) {\n  UpdateDPoolList(input: $input)\n}\n    "], ["\n    mutation UpdateDPoolList($input: DPoolListInput!) {\n  UpdateDPoolList(input: $input)\n}\n    "])));
exports.DPoolDocument = graphql_tag_1.default(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n    query DPool($id: ID!, $prove: Boolean) {\n  DPool(id: $id, prove: $prove) {\n    id\n    address\n    moneyMarket\n    stablecoin\n    interestModel\n    UserIDs\n    DepositIDs\n    FunderIDs\n    FundingIDs\n  }\n}\n    "], ["\n    query DPool($id: ID!, $prove: Boolean) {\n  DPool(id: $id, prove: $prove) {\n    id\n    address\n    moneyMarket\n    stablecoin\n    interestModel\n    UserIDs\n    DepositIDs\n    FunderIDs\n    FundingIDs\n  }\n}\n    "])));
exports.UpdateDPoolDocument = graphql_tag_1.default(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n    mutation UpdateDPool($input: DPoolInput!) {\n  UpdateDPool(input: $input)\n}\n    "], ["\n    mutation UpdateDPool($input: DPoolInput!) {\n  UpdateDPool(input: $input)\n}\n    "])));
exports.UserDocument = graphql_tag_1.default(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n    query User($id: ID!, $prove: Boolean) {\n  User(id: $id, prove: $prove) {\n    id\n    address\n    DPoolIDs\n    DepositIDs\n    UserTotalDepositIDs\n  }\n}\n    "], ["\n    query User($id: ID!, $prove: Boolean) {\n  User(id: $id, prove: $prove) {\n    id\n    address\n    DPoolIDs\n    DepositIDs\n    UserTotalDepositIDs\n  }\n}\n    "])));
exports.UpdateUserDocument = graphql_tag_1.default(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n    mutation UpdateUser($input: UserInput!) {\n  UpdateUser(input: $input)\n}\n    "], ["\n    mutation UpdateUser($input: UserInput!) {\n  UpdateUser(input: $input)\n}\n    "])));
exports.UserTotalDepositDocument = graphql_tag_1.default(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n    query UserTotalDeposit($id: ID!, $prove: Boolean) {\n  UserTotalDeposit(id: $id, prove: $prove) {\n    id\n    UserID\n    DPoolID\n  }\n}\n    "], ["\n    query UserTotalDeposit($id: ID!, $prove: Boolean) {\n  UserTotalDeposit(id: $id, prove: $prove) {\n    id\n    UserID\n    DPoolID\n  }\n}\n    "])));
exports.UpdateUserTotalDepositDocument = graphql_tag_1.default(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n    mutation UpdateUserTotalDeposit($input: UserTotalDepositInput!) {\n  UpdateUserTotalDeposit(input: $input)\n}\n    "], ["\n    mutation UpdateUserTotalDeposit($input: UserTotalDepositInput!) {\n  UpdateUserTotalDeposit(input: $input)\n}\n    "])));
exports.DepositDocument = graphql_tag_1.default(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n    query Deposit($id: ID!, $prove: Boolean) {\n  Deposit(id: $id, prove: $prove) {\n    id\n    UserID\n    DPoolID\n    active\n  }\n}\n    "], ["\n    query Deposit($id: ID!, $prove: Boolean) {\n  Deposit(id: $id, prove: $prove) {\n    id\n    UserID\n    DPoolID\n    active\n  }\n}\n    "])));
exports.UpdateDepositDocument = graphql_tag_1.default(templateObject_10 || (templateObject_10 = tslib_1.__makeTemplateObject(["\n    mutation UpdateDeposit($input: DepositInput!) {\n  UpdateDeposit(input: $input)\n}\n    "], ["\n    mutation UpdateDeposit($input: DepositInput!) {\n  UpdateDeposit(input: $input)\n}\n    "])));
exports.FunderDocument = graphql_tag_1.default(templateObject_11 || (templateObject_11 = tslib_1.__makeTemplateObject(["\n    query Funder($id: ID!, $prove: Boolean) {\n  Funder(id: $id, prove: $prove) {\n    id\n    address\n    DPoolIDs\n    FundingIDs\n    FunderTotalInterestIDs\n  }\n}\n    "], ["\n    query Funder($id: ID!, $prove: Boolean) {\n  Funder(id: $id, prove: $prove) {\n    id\n    address\n    DPoolIDs\n    FundingIDs\n    FunderTotalInterestIDs\n  }\n}\n    "])));
exports.UpdateFunderDocument = graphql_tag_1.default(templateObject_12 || (templateObject_12 = tslib_1.__makeTemplateObject(["\n    mutation UpdateFunder($input: FunderInput!) {\n  UpdateFunder(input: $input)\n}\n    "], ["\n    mutation UpdateFunder($input: FunderInput!) {\n  UpdateFunder(input: $input)\n}\n    "])));
exports.FunderTotalInterestDocument = graphql_tag_1.default(templateObject_13 || (templateObject_13 = tslib_1.__makeTemplateObject(["\n    query FunderTotalInterest($id: ID!, $prove: Boolean) {\n  FunderTotalInterest(id: $id, prove: $prove) {\n    id\n    FunderID\n    DPoolID\n  }\n}\n    "], ["\n    query FunderTotalInterest($id: ID!, $prove: Boolean) {\n  FunderTotalInterest(id: $id, prove: $prove) {\n    id\n    FunderID\n    DPoolID\n  }\n}\n    "])));
exports.UpdateFunderTotalInterestDocument = graphql_tag_1.default(templateObject_14 || (templateObject_14 = tslib_1.__makeTemplateObject(["\n    mutation UpdateFunderTotalInterest($input: FunderTotalInterestInput!) {\n  UpdateFunderTotalInterest(input: $input)\n}\n    "], ["\n    mutation UpdateFunderTotalInterest($input: FunderTotalInterestInput!) {\n  UpdateFunderTotalInterest(input: $input)\n}\n    "])));
exports.FundingDocument = graphql_tag_1.default(templateObject_15 || (templateObject_15 = tslib_1.__makeTemplateObject(["\n    query Funding($id: ID!, $prove: Boolean) {\n  Funding(id: $id, prove: $prove) {\n    id\n    FunderID\n    DPoolID\n    active\n  }\n}\n    "], ["\n    query Funding($id: ID!, $prove: Boolean) {\n  Funding(id: $id, prove: $prove) {\n    id\n    FunderID\n    DPoolID\n    active\n  }\n}\n    "])));
exports.UpdateFundingDocument = graphql_tag_1.default(templateObject_16 || (templateObject_16 = tslib_1.__makeTemplateObject(["\n    mutation UpdateFunding($input: FundingInput!) {\n  UpdateFunding(input: $input)\n}\n    "], ["\n    mutation UpdateFunding($input: FundingInput!) {\n  UpdateFunding(input: $input)\n}\n    "])));
exports.MPHHolderDocument = graphql_tag_1.default(templateObject_17 || (templateObject_17 = tslib_1.__makeTemplateObject(["\n    query MPHHolder($id: ID!, $prove: Boolean) {\n  MPHHolder(id: $id, prove: $prove) {\n    id\n    address\n  }\n}\n    "], ["\n    query MPHHolder($id: ID!, $prove: Boolean) {\n  MPHHolder(id: $id, prove: $prove) {\n    id\n    address\n  }\n}\n    "])));
exports.UpdateMPHHolderDocument = graphql_tag_1.default(templateObject_18 || (templateObject_18 = tslib_1.__makeTemplateObject(["\n    mutation UpdateMPHHolder($input: MPHHolderInput!) {\n  UpdateMPHHolder(input: $input)\n}\n    "], ["\n    mutation UpdateMPHHolder($input: MPHHolderInput!) {\n  UpdateMPHHolder(input: $input)\n}\n    "])));
exports.MPHDocument = graphql_tag_1.default(templateObject_19 || (templateObject_19 = tslib_1.__makeTemplateObject(["\n    query MPH($id: ID!, $prove: Boolean) {\n  MPH(id: $id, prove: $prove) {\n    id\n  }\n}\n    "], ["\n    query MPH($id: ID!, $prove: Boolean) {\n  MPH(id: $id, prove: $prove) {\n    id\n  }\n}\n    "])));
exports.UpdateMPHDocument = graphql_tag_1.default(templateObject_20 || (templateObject_20 = tslib_1.__makeTemplateObject(["\n    mutation UpdateMPH($input: MPHInput!) {\n  UpdateMPH(input: $input)\n}\n    "], ["\n    mutation UpdateMPH($input: MPHInput!) {\n  UpdateMPH(input: $input)\n}\n    "])));
exports.VestDocument = graphql_tag_1.default(templateObject_21 || (templateObject_21 = tslib_1.__makeTemplateObject(["\n    query Vest($id: ID!, $prove: Boolean) {\n  Vest(id: $id, prove: $prove) {\n    id\n    user\n  }\n}\n    "], ["\n    query Vest($id: ID!, $prove: Boolean) {\n  Vest(id: $id, prove: $prove) {\n    id\n    user\n  }\n}\n    "])));
exports.UpdateVestDocument = graphql_tag_1.default(templateObject_22 || (templateObject_22 = tslib_1.__makeTemplateObject(["\n    mutation UpdateVest($input: VestInput!) {\n  UpdateVest(input: $input)\n}\n    "], ["\n    mutation UpdateVest($input: VestInput!) {\n  UpdateVest(input: $input)\n}\n    "])));
exports.FractionalDepositDocument = graphql_tag_1.default(templateObject_23 || (templateObject_23 = tslib_1.__makeTemplateObject(["\n    query FractionalDeposit($id: ID!, $prove: Boolean) {\n  FractionalDeposit(id: $id, prove: $prove) {\n    id\n    address\n    zeroCouponBondAddress\n    ownerAddress\n    active\n    DepositID\n  }\n}\n    "], ["\n    query FractionalDeposit($id: ID!, $prove: Boolean) {\n  FractionalDeposit(id: $id, prove: $prove) {\n    id\n    address\n    zeroCouponBondAddress\n    ownerAddress\n    active\n    DepositID\n  }\n}\n    "])));
exports.UpdateFractionalDepositDocument = graphql_tag_1.default(templateObject_24 || (templateObject_24 = tslib_1.__makeTemplateObject(["\n    mutation UpdateFractionalDeposit($input: FractionalDepositInput!) {\n  UpdateFractionalDeposit(input: $input)\n}\n    "], ["\n    mutation UpdateFractionalDeposit($input: FractionalDepositInput!) {\n  UpdateFractionalDeposit(input: $input)\n}\n    "])));
var defaultWrapper = function (sdkFunction) { return sdkFunction(); };
function getSdk(client, withWrapper) {
    if (withWrapper === void 0) { withWrapper = defaultWrapper; }
    return {
        DPoolList: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.DPoolListDocument, variables, requestHeaders); });
        },
        UpdateDPoolList: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.UpdateDPoolListDocument, variables, requestHeaders); });
        },
        DPool: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.DPoolDocument, variables, requestHeaders); });
        },
        UpdateDPool: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.UpdateDPoolDocument, variables, requestHeaders); });
        },
        User: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.UserDocument, variables, requestHeaders); });
        },
        UpdateUser: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.UpdateUserDocument, variables, requestHeaders); });
        },
        UserTotalDeposit: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.UserTotalDepositDocument, variables, requestHeaders); });
        },
        UpdateUserTotalDeposit: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.UpdateUserTotalDepositDocument, variables, requestHeaders); });
        },
        Deposit: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.DepositDocument, variables, requestHeaders); });
        },
        UpdateDeposit: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.UpdateDepositDocument, variables, requestHeaders); });
        },
        Funder: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.FunderDocument, variables, requestHeaders); });
        },
        UpdateFunder: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.UpdateFunderDocument, variables, requestHeaders); });
        },
        FunderTotalInterest: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.FunderTotalInterestDocument, variables, requestHeaders); });
        },
        UpdateFunderTotalInterest: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.UpdateFunderTotalInterestDocument, variables, requestHeaders); });
        },
        Funding: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.FundingDocument, variables, requestHeaders); });
        },
        UpdateFunding: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.UpdateFundingDocument, variables, requestHeaders); });
        },
        MPHHolder: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.MPHHolderDocument, variables, requestHeaders); });
        },
        UpdateMPHHolder: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.UpdateMPHHolderDocument, variables, requestHeaders); });
        },
        MPH: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.MPHDocument, variables, requestHeaders); });
        },
        UpdateMPH: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.UpdateMPHDocument, variables, requestHeaders); });
        },
        Vest: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.VestDocument, variables, requestHeaders); });
        },
        UpdateVest: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.UpdateVestDocument, variables, requestHeaders); });
        },
        FractionalDeposit: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.FractionalDepositDocument, variables, requestHeaders); });
        },
        UpdateFractionalDeposit: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(exports.UpdateFractionalDepositDocument, variables, requestHeaders); });
        }
    };
}
exports.getSdk = getSdk;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24;
//# sourceMappingURL=queries.js.map