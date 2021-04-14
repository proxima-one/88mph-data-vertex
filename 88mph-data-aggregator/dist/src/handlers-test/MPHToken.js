"use strict";
//import { BigDecimal, Address, ethereum } from "@graphprotocol/graph-ts";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferHandler = exports.OwnershipTransferredHandler = exports.ApprovalHandler = void 0;
function ApprovalHandler(event) {
    //test template (importing into the handler files)
    console.log(event);
}
exports.ApprovalHandler = ApprovalHandler;
function OwnershipTransferredHandler(event) {
    //test template (importing into the handler files)
    console.log(event);
}
exports.OwnershipTransferredHandler = OwnershipTransferredHandler;
function TransferHandler(event) {
    //test template (importing into the handler files)
    console.log(event);
}
exports.TransferHandler = TransferHandler;
//attaching multiple handler at the same time
//# sourceMappingURL=MPHToken.js.map