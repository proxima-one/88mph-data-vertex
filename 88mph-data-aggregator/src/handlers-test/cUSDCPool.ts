//import { BigDecimal, Address, ethereum } from "@graphprotocol/graph-ts";

import { DInterest } from "../generated/contracts";
import { IInterestOracle } from "../generated/contracts";
import { ERC20 } from "../generated/contracts";
//import { MPHMinter } from "../generated/contracts/MPHMinter";
import { ethers } from "ethers";
import {
  DELIMITER,
  getFunder,
  getPool,
  getPoolList,
  getUser,
  keccak256,
  normalize,
  ONE_INT,
  tenPow,
  ZERO_DEC,
  ZERO_INT
} from "./utils";
//import { Deposit, UserTotalDeposit } from "../generated/models/models";

import {
  DPoolList,
  DPool,
  User,
  UserTotalDeposit,
  Deposit,
  Funder,
  FunderTotalInterest,
  Funding,
  MPHHolder,
  MPH
} from "../generated/models/models";
type EDeposit = any;
export async function EDepositHandler(event: EDeposit): Promise<void> {
  console.log("Deposit: ");
  let pool = await getPool(event.address);
  let user = await getUser(event.params.sender, pool);
  let poolContract = DInterest.bind(
    ethers.utils.getAddress(pool.address as string)
  );
  let stablecoinContract = ERC20.bind(
    ethers.utils.getAddress((await poolContract.stablecoin()) as string)
  );
  let stablecoinDecimals: number = await stablecoinContract.decimals();

  // Create new Deposit entity
  let deposit = new Deposit(
    pool.address + DELIMITER + event.params.depositID.toString()
  );
  deposit.nftID = event.params.depositID;
  deposit.userId = user.id;
  deposit.poolId = pool.id;
  deposit.amount = normalize(event.params.amount, stablecoinDecimals);
  deposit.maturationTimestamp = event.params.maturationTimestamp;
  deposit.active = true;
  deposit.depositTimestamp = event.block.timestamp;
  //deposit.depositLength = deposit.maturationTimestamp.minus(
  //  deposit.depositTimestamp
  //);
  deposit.interestEarned = normalize(
    event.params.interestAmount,
    stablecoinDecimals
  );
  deposit.fundingID = ZERO_INT;
  deposit.mintMPHAmount = normalize(event.params.mintMPHAmount);
  deposit.takeBackMPHAmount = ZERO_DEC;
  //deposit.initialMoneyMarketIncomeIndex = poolContract.moneyMarketIncomeIndex();
  deposit.fundingInterestPaid = ZERO_DEC;
  deposit.fundingRefundAmount = ZERO_DEC;
  console.log(deposit.toString());
  deposit.save();

  // Update DPool statistics
  if (user.numActiveDeposits == ZERO_INT) {
    // User has become active
    let poolList = getPoolList();
    //poolList.numActiveUsers = poolList.numActiveUsers.plus(ONE_INT);
    poolList.save();
  }
  //pool.numDeposits = pool.numDeposits.plus(ONE_INT);
  //pool.numActiveDeposits = pool.numActiveDeposits.plus(ONE_INT);
  //pool.totalActiveDeposit = pool.totalActiveDeposit.plus(deposit.amount);
  //pool.totalHistoricalDeposit = pool.totalHistoricalDeposit.plus(
  //  deposit.amount
  //);
  //pool.totalInterestPaid = pool.totalInterestPaid.plus(deposit.interestEarned);
  //pool.unfundedDepositAmount = normalize(
  //  poolContract.unfundedUserDepositAmount(),
  //  stablecoinDecimals
  //);
  await pool.save();

  // Update User
  // if (!user.poolIds.includes(pool.id)) {
  //   // Add pool to list of pools
  //   let pools = user.poolIds;
  //   pools.push(pool.id);
  //   user.poolIds = pools;
  //   user.numPools = user.numPools.plus(ONE_INT);
  //   pool.numUsers = pool.numUsers.plus(ONE_INT);
  //   pool.save();
  // }
  // user.numDeposits = user.numDeposits.plus(ONE_INT);
  // user.numActiveDeposits = user.numActiveDeposits.plus(ONE_INT);
  // user.totalMPHEarned = user.totalMPHEarned.plus(deposit.mintMPHAmount);
  await user.save();

  // Update UserTotalDeposit
  let userTotalDepositID = user.id + DELIMITER + pool.id;
  let userTotalDepositEntity = await UserTotalDeposit.load(userTotalDepositID);
  if (userTotalDepositEntity == null) {
    // Initialize UserTotalDeposits entity
    userTotalDepositEntity = new UserTotalDeposit(userTotalDepositID);
    userTotalDepositEntity.userId = user.id;
    userTotalDepositEntity.poolId = pool.id;
    userTotalDepositEntity.totalActiveDeposit = ZERO_DEC;
    userTotalDepositEntity.totalHistoricalDeposit = ZERO_DEC;
    userTotalDepositEntity.totalInterestEarned = ZERO_DEC;
    userTotalDepositEntity.totalHistoricalInterestEarned = ZERO_DEC;
  }
  // userTotalDepositEntity.totalActiveDeposit = userTotalDepositEntity.totalActiveDeposit.plus(
  //   deposit.amount
  // );
  // userTotalDepositEntity.totalHistoricalDeposit = userTotalDepositEntity.totalHistoricalDeposit.plus(
  //   deposit.amount
  // );
  // userTotalDepositEntity.totalInterestEarned = userTotalDepositEntity.totalInterestEarned.plus(
  //   deposit.interestEarned
  // );
  // userTotalDepositEntity.totalHistoricalInterestEarned = userTotalDepositEntity.totalHistoricalInterestEarned.plus(
  //   deposit.interestEarned
  // );
  await userTotalDepositEntity.save();
}
//attaching multiple handler at the same time
type EFund = any;
export async function EFundHandler(event: EFund): Promise<void> {
  let pool = await getPool(event.address.toHex());
  console.log(Object.entries(pool));
  let poolContract = DInterest.bind(event.address);
  let funder = await getFunder(event.params.sender, pool);
  let stablecoinContract = ERC20.bind(
    (await poolContract.stablecoin()) as string
  );
  let stablecoinDecimals: number = await stablecoinContract.decimals();

  // Create new Funding entity
  let fundingID = event.params.fundingID;
  let funding = new Funding(pool.address + DELIMITER + fundingID.toString());
  funding.nftID = event.params.fundingID;
  funding.funderId = funder.id;
  funding.poolId = pool.id;
  let fundingObj = await poolContract.getFunding(fundingID);
  //funding.fromDepositID = fundingObj.fromDepositID;
  //funding.toDepositID = fundingObj.toDepositID;
  funding.active = true;
  // funding.recordedFundedDepositAmount = normalize(
  //   fundingObj.recordedFundedDepositAmount,
  //   stablecoinDecimals
  // );
  // funding.recordedMoneyMarketIncomeIndex =
  //   fundingObj.recordedMoneyMarketIncomeIndex;
  // funding.initialFundedDepositAmount = normalize(
  //   fundingObj.recordedFundedDepositAmount,
  //   stablecoinDecimals
  // );
  funding.fundedDeficitAmount = normalize(
    event.params.deficitAmount,
    stablecoinDecimals
  );
  funding.totalInterestEarned = ZERO_DEC;
  //funding.creationTimestamp = fundingObj.creationTimestamp;
  funding.mphRewardEarned = ZERO_DEC;
  funding.refundAmount = ZERO_DEC;
  await funding.save();

  // Update DPool statistics
  //pool.numFundings = pool.numFundings.plus(ONE_INT);
  // pool.unfundedDepositAmount = normalize(
  //   poolContract.unfundedUserDepositAmount(),
  //   stablecoinDecimals
  // );
  await pool.save();

  // Update Funder
  if (
    pool.id &&
    funder.poolIds &&
    !funder.poolIds.includes(pool.id as string)
  ) {
    // Add pool to list of pools
    let pools = funder.poolIds;
    pools.push(pool.id);
    funder.poolIds = pools;
    //funder.numPools = funder.numPools.plus(ONE_INT);
  }
  //funder.numFundings = funder.numFundings.plus(ONE_INT);
  await funder.save();

  // Update funded Deposits
  // for (
  //   let id = funding.fromDepositID.plus(ONE_INT);
  //   id.le(funding.toDepositID);
  //   id = id.plus(ONE_INT)
  // ) {
  //   let deposit = Deposit.load(pool.address + DELIMITER + id.toString());
  //   if (deposit && deposit.active) {
  //     deposit.fundingID = fundingID;
  //     deposit.save();
  //   }
  // }

  // Update FunderTotalInterest
  let funderTotalInterestID = funder.id + DELIMITER + pool.id;
  let funderTotalInterestEntity = await FunderTotalInterest.load(
    funderTotalInterestID
  );
  if (funderTotalInterestEntity == null) {
    // Initialize UserTotalDeposits entity
    funderTotalInterestEntity = new FunderTotalInterest(funderTotalInterestID);
    funderTotalInterestEntity.funderId = funder.id;
    funderTotalInterestEntity.poolId = pool.id as string;
    funderTotalInterestEntity.totalDeficitFunded = ZERO_DEC;
    funderTotalInterestEntity.totalHistoricalDeficitFunded = ZERO_DEC;
    funderTotalInterestEntity.totalInterestEarned = ZERO_DEC;
    funderTotalInterestEntity.totalHistoricalInterestEarned = ZERO_DEC;
    funderTotalInterestEntity.totalRecordedFundedDepositAmount = ZERO_DEC;
  }
  // funderTotalInterestEntity.totalDeficitFunded = funderTotalInterestEntity.totalDeficitFunded.plus(
  //   funding.fundedDeficitAmount
  // );
  // funderTotalInterestEntity.totalHistoricalDeficitFunded = funderTotalInterestEntity.totalHistoricalDeficitFunded.plus(
  //   funding.fundedDeficitAmount
  // );
  // funderTotalInterestEntity.totalRecordedFundedDepositAmount = funderTotalInterestEntity.totalRecordedFundedDepositAmount.plus(
  //   funding.recordedFundedDepositAmount
  // );
  await funderTotalInterestEntity.save();
}

//attaching multiple handler at the same time
type ESetParamAddress = any;
export async function ESetParamAddressHandler(
  event: ESetParamAddress
): Promise<void> {
  let pool = await getPool(event.address);
  let paramName = event.params.paramName;
  if (paramName == keccak256("feeModel")) {
  } else if (paramName == keccak256("interestModel")) {
    pool.interestModel = event.params.newValue.toHex();
  } else if (paramName == keccak256("interestOracle")) {
  } else if (paramName == keccak256("moneyMarket.rewards")) {
  }
  pool.save();
}

//attaching multiple handler at the same time
type ESetParamUint = any;
export async function handleESetParamUint(event: ESetParamUint): Promise<void> {
  let pool = await getPool(event.address.toHex());
  let poolContract = DInterest.bind(pool.address as string);
  let stablecoinContract = ERC20.bind(
    (await poolContract.stablecoin()) as string
  );
  let stablecoinDecimals: number = await stablecoinContract.decimals();
  let stablecoinPrecision = tenPow(stablecoinDecimals);
  let paramName = event.params.paramName;
  if (paramName == keccak256("MinDepositPeriod")) {
    pool.MinDepositPeriod = event.params.newValue;
  } else if (paramName == keccak256("MaxDepositPeriod")) {
    pool.MaxDepositPeriod = event.params.newValue;
  } else if (paramName == keccak256("MinDepositAmount")) {
    pool.MinDepositAmount = event.params.newValue
      .toBigDecimal()
      .div(stablecoinPrecision);
  } else if (paramName == keccak256("MaxDepositAmount")) {
    pool.MaxDepositAmount = event.params.newValue
      .toBigDecimal()
      .div(stablecoinPrecision);
  }
  //console.log(pool);
  await pool.save();
}

//attaching multiple handler at the same time
type EWithdraw = any;
export async function EWithdrawHandler(event: EWithdraw): Promise<void> {
  //test template (importing into the handler files)
  console.log("Withdraw...");
  let address = "0xb5EE8910A93F8A450E97BE0436F36B9458106682";
  let dinterest = DInterest.bind(ethers.utils.getAddress(address));

  console.log("Contract");

  let pool = await getPool(ethers.utils.getAddress(event.address));
  console.log(pool.toString());
  // let poolContract = DInterest.bind(event.address);
  // let user = getUser(event.params.sender, pool);
  // let deposit = Deposit.load(
  //   pool.address + DELIMITER + event.params.depositID.toString()
  // );
  // let stablecoinContract = ERC20.bind(poolContract.stablecoin());
  // let stablecoinDecimals: number = stablecoinContract.decimals();
  //
  // // Set Deposit entity to inactive
  // deposit.active = false;
  // deposit.takeBackMPHAmount = normalize(event.params.takeBackMPHAmount);
  //
  // // Update User statistics
  // user.numActiveDeposits = user.numActiveDeposits.minus(ONE_INT);
  // user.totalMPHPaidBack = user.totalMPHPaidBack.plus(deposit.takeBackMPHAmount);
  // user.save();
  //
  // // Update UserTotalDeposit
  // let userTotalDepositID = user.id + DELIMITER + pool.id;
  // let userTotalDepositEntity = UserTotalDeposit.load(userTotalDepositID);
  // userTotalDepositEntity.totalActiveDeposit = userTotalDepositEntity.totalActiveDeposit.minus(
  //   deposit.amount
  // );
  // userTotalDepositEntity.totalInterestEarned = userTotalDepositEntity.totalInterestEarned.minus(
  //   deposit.interestEarned
  // );
  // userTotalDepositEntity.save();
  //
  // // Update DPool statistics
  // if (user.numActiveDeposits.equals(ZERO_INT)) {
  //   // User has become inactive
  //   let poolList = getPoolList();
  //   poolList.numActiveUsers = poolList.numActiveUsers.minus(ONE_INT);
  //   poolList.save();
  // }
  // pool.numActiveDeposits = pool.numActiveDeposits.minus(ONE_INT);
  // pool.totalActiveDeposit = pool.totalActiveDeposit.minus(deposit.amount);
  // pool.unfundedDepositAmount = normalize(
  //   poolContract.unfundedUserDepositAmount(),
  //   stablecoinDecimals
  // );
  // pool.save();
  //
  // let fundingID = event.params.fundingID;
  // let moneyMarketIncomeIndex = poolContract.moneyMarketIncomeIndex();
  // if (fundingID.notEqual(ZERO_INT)) {
  //   // Update Funding
  //   let funding = Funding.load(pool.address + DELIMITER + fundingID.toString());
  //   let fundingObj = poolContract.getFunding(fundingID);
  //   let interestAmount = funding.recordedFundedDepositAmount
  //     .times(moneyMarketIncomeIndex.toBigDecimal())
  //     .div(funding.recordedMoneyMarketIncomeIndex.toBigDecimal())
  //     .minus(funding.recordedFundedDepositAmount);
  //   let mintMPHAmount = funding.creationTimestamp.gt(
  //     deposit.maturationTimestamp
  //   )
  //     ? pool.mphFunderRewardMultiplier
  //         .times(deposit.amount)
  //         .times(
  //           deposit.maturationTimestamp
  //             .minus(funding.creationTimestamp)
  //             .toBigDecimal()
  //         )
  //     : ZERO_DEC;
  //   funding.totalInterestEarned = funding.totalInterestEarned.plus(
  //     interestAmount
  //   );
  //   funding.recordedFundedDepositAmount = normalize(
  //     fundingObj.recordedFundedDepositAmount,
  //     stablecoinDecimals
  //   );
  //   let recordedMoneyMarketIncomeIndex = funding.recordedMoneyMarketIncomeIndex;
  //   funding.recordedMoneyMarketIncomeIndex =
  //     fundingObj.recordedMoneyMarketIncomeIndex;
  //   funding.active = funding.recordedFundedDepositAmount.gt(ZERO_DEC);
  //   funding.mphRewardEarned = funding.mphRewardEarned.plus(mintMPHAmount);
  //   if (event.params.early) {
  //     // Early withdraw, update refund amount
  //     let depositSurplusObject = poolContract.surplusOfDeposit(deposit.nftID);
  //     let refundAmount = ZERO_DEC;
  //     if (depositSurplusObject.value0) {
  //       // Surplus is negative, add refund amount
  //       refundAmount = normalize(
  //         depositSurplusObject.value1,
  //         stablecoinDecimals
  //       );
  //     }
  //     funding.refundAmount = funding.refundAmount.plus(refundAmount);
  //     deposit.fundingRefundAmount = refundAmount;
  //   }
  //   funding.save();
  //
  //   // Update funded Deposits
  //   for (
  //     let id = funding.fromDepositID.plus(ONE_INT);
  //     id.le(funding.toDepositID);
  //     id = id.plus(ONE_INT)
  //   ) {
  //     let fundedDeposit = Deposit.load(
  //       pool.address + DELIMITER + id.toString()
  //     );
  //     if (fundedDeposit.active) {
  //       let fundedDepositInterestGenerated = fundedDeposit.amount
  //         .plus(fundedDeposit.interestEarned)
  //         .times(
  //           moneyMarketIncomeIndex
  //             .toBigDecimal()
  //             .div(recordedMoneyMarketIncomeIndex.toBigDecimal())
  //             .minus(ONE_INT.toBigDecimal())
  //         );
  //       fundedDeposit.fundingInterestPaid = fundedDeposit.fundingInterestPaid.plus(
  //         fundedDepositInterestGenerated
  //       );
  //       fundedDeposit.save();
  //     }
  //   }
  //
  //   // Update Funder
  //   let funder = getFunder(event.params.sender, pool);
  //
  //   funder.totalMPHEarned = funder.totalMPHEarned.plus(mintMPHAmount);
  //   funder.save();
  //
  //   // Update FunderTotalInterest
  //   let funderTotalInterestID = funding.funder + DELIMITER + pool.id;
  //   let funderTotalInterestEntity = FunderTotalInterest.load(
  //     funderTotalInterestID
  //   );
  //
  //   if (!funding.active) {
  //     funderTotalInterestEntity.totalDeficitFunded = funderTotalInterestEntity.totalDeficitFunded.minus(
  //       funding.fundedDeficitAmount
  //     );
  //     funderTotalInterestEntity.totalInterestEarned = funderTotalInterestEntity.totalInterestEarned.minus(
  //       funding.totalInterestEarned
  //     );
  //   } else {
  //     funderTotalInterestEntity.totalInterestEarned = funderTotalInterestEntity.totalInterestEarned.plus(
  //       interestAmount
  //     );
  //     funderTotalInterestEntity.totalHistoricalInterestEarned = funderTotalInterestEntity.totalHistoricalInterestEarned.plus(
  //       interestAmount
  //     );
  //   }
  //   funderTotalInterestEntity.totalRecordedFundedDepositAmount = funderTotalInterestEntity.totalRecordedFundedDepositAmount.minus(
  //     deposit.amount
  //   );
  //   funderTotalInterestEntity.save();
  // }
  //
  // deposit.save();
}
//export function handleBlock(block: ethereum.Block): void {
//   if (
//     block.number.ge(BLOCK_HANDLER_START_BLOCK) &&
//     block.number.mod(BLOCK_HANDLER_INTERVAL).isZero()
//   ) {
//     let blockNumber = block.number.toI32();
//     for (let i = 0; i < POOL_ADDRESSES.length; i++) {
//       // Update DPool statistics
//       let poolID = POOL_ADDRESSES[i];
//       if (blockNumber >= POOL_DEPLOY_BLOCKS[i]) {
//         let pool = getPool(poolID);
//         let poolContract = DInterest.bind(pool.address);
//         let stablecoinContract = ERC20.bind(poolContract.stablecoin());
//         let stablecoinDecimals: number = stablecoinContract.decimals();
//         let oracleContract = IInterestOracle.bind(
//           poolContract.interestOracle()
//         );
//         pool.oneYearInterestRate = normalize(
//           poolContract.calculateInterestAmount(tenPow(18), YEAR)
//         );
//         let surplusResult = poolContract.surplus();
//         pool.surplus = normalize(
//           surplusResult.value1,
//           stablecoinDecimals
//         ).times(surplusResult.value0 ? NEGONE_DEC : ONE_DEC);
//         pool.moneyMarketIncomeIndex = poolContract.moneyMarketIncomeIndex();
//         pool.oracleInterestRate = normalize(
//           oracleContract.updateAndQuery().value1
//         );
//         pool.save();
//       }
//     }
//   }
// }
