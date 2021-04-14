"use strict";
//import { BigDecimal, Address, ethereum } from "@graphprotocol/graph-ts";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnershipTransferredHandler = exports.EWithdrawHandler = exports.ESetParamUintHandler = exports.ESetParamAddressHandler = exports.EFundHandler = exports.EDepositHandler = void 0;
var tslib_1 = require("tslib");
var contracts_1 = require("../generated/contracts");
//import { MPHMinter } from "../generated/contracts/MPHMinter";
//import { DPoolList, DPool, User, UserTotalDeposit, Deposit, Funder, FunderTotalInterest, Funding, MPHHolder, MPH } from '../generated/models/models'
//event//
//import {dataSource} from "../generated/"
var ethers_1 = require("ethers");
function EDepositHandler(event) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            console.log("Called");
            return [2 /*return*/];
        });
    });
}
exports.EDepositHandler = EDepositHandler;
function EFundHandler(event) {
    //test template (importing into the handler files)
    //console.log(event.toString());
}
exports.EFundHandler = EFundHandler;
function ESetParamAddressHandler(event) {
    //test template (importing into the handler files)
    //console.log(event);
}
exports.ESetParamAddressHandler = ESetParamAddressHandler;
function ESetParamUintHandler(event) {
    //test template (importing into the handler files)
    //console.log(event);
}
exports.ESetParamUintHandler = ESetParamUintHandler;
function EWithdrawHandler(event) {
    // let address = "0xb5EE8910A93F8A450E97BE0436F36B9458106682";
    // console.log(address);
    // let dinterest = DInterest.bind(ethers.utils.getAddress(address));
    //
    // console.log("Contract");
    //console.log(DInterest.toString());
}
exports.EWithdrawHandler = EWithdrawHandler;
function OwnershipTransferredHandler(event) {
    //test template (importing into the handler files)
    var address = "0xb5EE8910A93F8A450E97BE0436F36B9458106682";
    var dinterest = contracts_1.DInterest.bind(ethers_1.ethers.utils.getAddress(address));
    // console.log("Contract");
    // console.log(dinterest.toString());
}
exports.OwnershipTransferredHandler = OwnershipTransferredHandler;
//attaching multiple handler at the same time
//# sourceMappingURL=cUNIPool.js.map