//import { BigDecimal, Address, ethereum } from "@graphprotocol/graph-ts";

import { DInterest } from "../generated/contracts/DInterest";
import { IInterestOracle } from "../generated/contracts/IInterestOracle";
import { ERC20 } from "../generated/contracts/ERC20";
import { EventFragment } from "@ethersproject/abi";
//import { MPHMinter } from "../generated/contracts/MPHMinter";

export type EDeposit = EventFragment;
export function EDepositHandler(event: EDeposit): void {
  //test template (importing into the handler files)
  console.log(Object.entries(event));
}
//attaching multiple handler at the same time
export type EFund = EventFragment;
export function EFundHandler(event: EFund): void {
  //test template (importing into the handler files)
  console.log(event);
}

//attaching multiple handler at the same time
export type ESetParamAddress = any;
export function ESetParamAddressHandler(event: ESetParamAddress): void {
  //test template (importing into the handler files)
  console.log(event);
}

//attaching multiple handler at the same time
export type ESetParamUint = any;
export function ESetParamUintHandler(event: ESetParamUint): void {
  //test template (importing into the handler files)
  console.log(event);
}

//attaching multiple handler at the same time
export type EWithdraw = any;
export function EWithdrawHandler(event: EWithdraw): void {
  //test template (importing into the handler files)
  console.log(event);
}

//attaching multiple handler at the same time
export type OwnershipTransferred = any;
export function OwnershipTransferredHandler(event: OwnershipTransferred): void {
  //test template (importing into the handler files)
  console.log(event);
}

//attaching multiple handler at the same time
export type Block = any;
export function BlockHandler(block: Block): void {
  //test template (importing into the handler files)
  console.log(Object.entries(block));
}
