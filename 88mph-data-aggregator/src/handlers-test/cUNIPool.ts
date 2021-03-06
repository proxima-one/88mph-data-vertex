//import { BigDecimal, Address, ethereum } from "@graphprotocol/graph-ts";

import { DInterest } from "../generated/contracts";
import { IInterestOracle } from "../generated/contracts/IInterestOracle";
import { ERC20 } from "../generated/contracts/ERC20";
//import { MPHMinter } from "../generated/contracts/MPHMinter";

//import { DPoolList, DPool, User, UserTotalDeposit, Deposit, Funder, FunderTotalInterest, Funding, MPHHolder, MPH } from '../generated/models/models'
//event//
//import {dataSource} from "../generated/"
import { ethers } from "ethers";

// const DInterest = ,
//   ethers.providers.getDefaultProvider("mainnet")
// );
//function promiseUnwrap<Promise<Type>>(arg)

type EDeposit = any;
export async function EDepositHandler(event: EDeposit): Promise<void> {
  console.log("Called");
  //test template (importing into the handler files)
  //DInterest.bind("0xb5EE8910A93F8A450E97BE0436F36B9458106682");
  //console.log(event.toString());
}

//attaching multiple handler at the same time
type EFund = any;
export function EFundHandler(event: EFund): void {
  //test template (importing into the handler files)
  //console.log(event.toString());
}

//attaching multiple handler at the same time
type ESetParamAddress = any;
export function ESetParamAddressHandler(event: ESetParamAddress): void {
  //test template (importing into the handler files)
  //console.log(event);
}

//attaching multiple handler at the same time
type ESetParamUint = any;
export function ESetParamUintHandler(event: ESetParamUint): void {
  //test template (importing into the handler files)
  //console.log(event);
}

//attaching multiple handler at the same time
type EWithdraw = any;
export function EWithdrawHandler(event: EWithdraw): void {
  // let address = "0xb5EE8910A93F8A450E97BE0436F36B9458106682";
  // console.log(address);
  // let dinterest = DInterest.bind(ethers.utils.getAddress(address));
  //
  // console.log("Contract");
  //console.log(DInterest.toString());
}

//attaching multiple handler at the same time
type OwnershipTransferred = any;
export function OwnershipTransferredHandler(event: OwnershipTransferred): void {
  //test template (importing into the handler files)
  let address = "0xb5EE8910A93F8A450E97BE0436F36B9458106682";
  let dinterest = DInterest.bind(ethers.utils.getAddress(address));

  // console.log("Contract");
  // console.log(dinterest.toString());
}

//attaching multiple handler at the same time
