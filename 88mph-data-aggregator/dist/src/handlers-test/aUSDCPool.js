"use strict";
//import { BigDecimal, Address, ethereum } from "@graphprotocol/graph-ts";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockHandler = exports.OwnershipTransferredHandler = exports.EWithdrawHandler = exports.ESetParamUintHandler = exports.ESetParamAddressHandler = exports.EFundHandler = exports.EDepositHandler = void 0;
function EDepositHandler(event) {
    //test template (importing into the handler files)
    console.log(Object.entries(event));
}
exports.EDepositHandler = EDepositHandler;
function EFundHandler(event) {
    //test template (importing into the handler files)
    console.log(event);
}
exports.EFundHandler = EFundHandler;
function ESetParamAddressHandler(event) {
    //test template (importing into the handler files)
    console.log(event);
}
exports.ESetParamAddressHandler = ESetParamAddressHandler;
function ESetParamUintHandler(event) {
    //test template (importing into the handler files)
    console.log(event);
}
exports.ESetParamUintHandler = ESetParamUintHandler;
function EWithdrawHandler(event) {
    //test template (importing into the handler files)
    console.log(event);
}
exports.EWithdrawHandler = EWithdrawHandler;
function OwnershipTransferredHandler(event) {
    //test template (importing into the handler files)
    console.log(event);
}
exports.OwnershipTransferredHandler = OwnershipTransferredHandler;
function BlockHandler(block) {
    //test template (importing into the handler files)
    console.log(Object.entries(block));
}
exports.BlockHandler = BlockHandler;
//# sourceMappingURL=aUSDCPool.js.map