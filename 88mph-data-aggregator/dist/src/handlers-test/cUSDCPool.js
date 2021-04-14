"use strict";
//import { BigDecimal, Address, ethereum } from "@graphprotocol/graph-ts";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EWithdrawHandler = exports.handleESetParamUint = exports.ESetParamAddressHandler = exports.EFundHandler = exports.EDepositHandler = void 0;
var tslib_1 = require("tslib");
var contracts_1 = require("../generated/contracts");
var contracts_2 = require("../generated/contracts");
//import { MPHMinter } from "../generated/contracts/MPHMinter";
var ethers_1 = require("ethers");
var utils_1 = require("./utils");
//import { Deposit, UserTotalDeposit } from "../generated/models/models";
var models_1 = require("../generated/models/models");
function EDepositHandler(event) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var pool, user, poolContract, stablecoinContract, _a, _b, _c, _d, stablecoinDecimals, deposit, poolList, userTotalDepositID, userTotalDepositEntity;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    console.log("Deposit: ");
                    return [4 /*yield*/, utils_1.getPool(event.address)];
                case 1:
                    pool = _e.sent();
                    return [4 /*yield*/, utils_1.getUser(event.params.sender, pool)];
                case 2:
                    user = _e.sent();
                    poolContract = contracts_1.DInterest.bind(ethers_1.ethers.utils.getAddress(pool.address));
                    _b = (_a = contracts_2.ERC20).bind;
                    _d = (_c = ethers_1.ethers.utils).getAddress;
                    return [4 /*yield*/, poolContract.stablecoin()];
                case 3:
                    stablecoinContract = _b.apply(_a, [_d.apply(_c, [(_e.sent())])]);
                    return [4 /*yield*/, stablecoinContract.decimals()];
                case 4:
                    stablecoinDecimals = _e.sent();
                    deposit = new models_1.Deposit(pool.address + utils_1.DELIMITER + event.params.depositID.toString());
                    deposit.nftID = event.params.depositID;
                    deposit.userId = user.id;
                    deposit.poolId = pool.id;
                    deposit.amount = utils_1.normalize(event.params.amount, stablecoinDecimals);
                    deposit.maturationTimestamp = event.params.maturationTimestamp;
                    deposit.active = true;
                    deposit.depositTimestamp = event.block.timestamp;
                    //deposit.depositLength = deposit.maturationTimestamp.minus(
                    //  deposit.depositTimestamp
                    //);
                    deposit.interestEarned = utils_1.normalize(event.params.interestAmount, stablecoinDecimals);
                    deposit.fundingID = utils_1.ZERO_INT;
                    deposit.mintMPHAmount = utils_1.normalize(event.params.mintMPHAmount);
                    deposit.takeBackMPHAmount = utils_1.ZERO_DEC;
                    //deposit.initialMoneyMarketIncomeIndex = poolContract.moneyMarketIncomeIndex();
                    deposit.fundingInterestPaid = utils_1.ZERO_DEC;
                    deposit.fundingRefundAmount = utils_1.ZERO_DEC;
                    console.log(deposit.toString());
                    deposit.save();
                    // Update DPool statistics
                    if (user.numActiveDeposits == utils_1.ZERO_INT) {
                        poolList = utils_1.getPoolList();
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
                    return [4 /*yield*/, pool.save()];
                case 5:
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
                    _e.sent();
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
                    return [4 /*yield*/, user.save()];
                case 6:
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
                    _e.sent();
                    userTotalDepositID = user.id + utils_1.DELIMITER + pool.id;
                    return [4 /*yield*/, models_1.UserTotalDeposit.load(userTotalDepositID)];
                case 7:
                    userTotalDepositEntity = _e.sent();
                    if (userTotalDepositEntity == null) {
                        // Initialize UserTotalDeposits entity
                        userTotalDepositEntity = new models_1.UserTotalDeposit(userTotalDepositID);
                        userTotalDepositEntity.userId = user.id;
                        userTotalDepositEntity.poolId = pool.id;
                        userTotalDepositEntity.totalActiveDeposit = utils_1.ZERO_DEC;
                        userTotalDepositEntity.totalHistoricalDeposit = utils_1.ZERO_DEC;
                        userTotalDepositEntity.totalInterestEarned = utils_1.ZERO_DEC;
                        userTotalDepositEntity.totalHistoricalInterestEarned = utils_1.ZERO_DEC;
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
                    return [4 /*yield*/, userTotalDepositEntity.save()];
                case 8:
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
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.EDepositHandler = EDepositHandler;
function EFundHandler(event) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var pool, poolContract, funder, stablecoinContract, _a, _b, stablecoinDecimals, fundingID, funding, fundingObj, pools, funderTotalInterestID, funderTotalInterestEntity;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, utils_1.getPool(event.address.toHex())];
                case 1:
                    pool = _c.sent();
                    console.log(Object.entries(pool));
                    poolContract = contracts_1.DInterest.bind(event.address);
                    return [4 /*yield*/, utils_1.getFunder(event.params.sender, pool)];
                case 2:
                    funder = _c.sent();
                    _b = (_a = contracts_2.ERC20).bind;
                    return [4 /*yield*/, poolContract.stablecoin()];
                case 3:
                    stablecoinContract = _b.apply(_a, [(_c.sent())]);
                    return [4 /*yield*/, stablecoinContract.decimals()];
                case 4:
                    stablecoinDecimals = _c.sent();
                    fundingID = event.params.fundingID;
                    funding = new models_1.Funding(pool.address + utils_1.DELIMITER + fundingID.toString());
                    funding.nftID = event.params.fundingID;
                    funding.funderId = funder.id;
                    funding.poolId = pool.id;
                    return [4 /*yield*/, poolContract.getFunding(fundingID)];
                case 5:
                    fundingObj = _c.sent();
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
                    funding.fundedDeficitAmount = utils_1.normalize(event.params.deficitAmount, stablecoinDecimals);
                    funding.totalInterestEarned = utils_1.ZERO_DEC;
                    //funding.creationTimestamp = fundingObj.creationTimestamp;
                    funding.mphRewardEarned = utils_1.ZERO_DEC;
                    funding.refundAmount = utils_1.ZERO_DEC;
                    return [4 /*yield*/, funding.save()];
                case 6:
                    _c.sent();
                    // Update DPool statistics
                    //pool.numFundings = pool.numFundings.plus(ONE_INT);
                    // pool.unfundedDepositAmount = normalize(
                    //   poolContract.unfundedUserDepositAmount(),
                    //   stablecoinDecimals
                    // );
                    return [4 /*yield*/, pool.save()];
                case 7:
                    // Update DPool statistics
                    //pool.numFundings = pool.numFundings.plus(ONE_INT);
                    // pool.unfundedDepositAmount = normalize(
                    //   poolContract.unfundedUserDepositAmount(),
                    //   stablecoinDecimals
                    // );
                    _c.sent();
                    // Update Funder
                    if (pool.id &&
                        funder.poolIds &&
                        !funder.poolIds.includes(pool.id)) {
                        pools = funder.poolIds;
                        pools.push(pool.id);
                        funder.poolIds = pools;
                        //funder.numPools = funder.numPools.plus(ONE_INT);
                    }
                    //funder.numFundings = funder.numFundings.plus(ONE_INT);
                    return [4 /*yield*/, funder.save()];
                case 8:
                    //funder.numFundings = funder.numFundings.plus(ONE_INT);
                    _c.sent();
                    funderTotalInterestID = funder.id + utils_1.DELIMITER + pool.id;
                    return [4 /*yield*/, models_1.FunderTotalInterest.load(funderTotalInterestID)];
                case 9:
                    funderTotalInterestEntity = _c.sent();
                    if (funderTotalInterestEntity == null) {
                        // Initialize UserTotalDeposits entity
                        funderTotalInterestEntity = new models_1.FunderTotalInterest(funderTotalInterestID);
                        funderTotalInterestEntity.funderId = funder.id;
                        funderTotalInterestEntity.poolId = pool.id;
                        funderTotalInterestEntity.totalDeficitFunded = utils_1.ZERO_DEC;
                        funderTotalInterestEntity.totalHistoricalDeficitFunded = utils_1.ZERO_DEC;
                        funderTotalInterestEntity.totalInterestEarned = utils_1.ZERO_DEC;
                        funderTotalInterestEntity.totalHistoricalInterestEarned = utils_1.ZERO_DEC;
                        funderTotalInterestEntity.totalRecordedFundedDepositAmount = utils_1.ZERO_DEC;
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
                    return [4 /*yield*/, funderTotalInterestEntity.save()];
                case 10:
                    // funderTotalInterestEntity.totalDeficitFunded = funderTotalInterestEntity.totalDeficitFunded.plus(
                    //   funding.fundedDeficitAmount
                    // );
                    // funderTotalInterestEntity.totalHistoricalDeficitFunded = funderTotalInterestEntity.totalHistoricalDeficitFunded.plus(
                    //   funding.fundedDeficitAmount
                    // );
                    // funderTotalInterestEntity.totalRecordedFundedDepositAmount = funderTotalInterestEntity.totalRecordedFundedDepositAmount.plus(
                    //   funding.recordedFundedDepositAmount
                    // );
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.EFundHandler = EFundHandler;
function ESetParamAddressHandler(event) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var pool, paramName;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, utils_1.getPool(event.address)];
                case 1:
                    pool = _a.sent();
                    paramName = event.params.paramName;
                    if (paramName == utils_1.keccak256("feeModel")) {
                    }
                    else if (paramName == utils_1.keccak256("interestModel")) {
                        pool.interestModel = event.params.newValue.toHex();
                    }
                    else if (paramName == utils_1.keccak256("interestOracle")) {
                    }
                    else if (paramName == utils_1.keccak256("moneyMarket.rewards")) {
                    }
                    pool.save();
                    return [2 /*return*/];
            }
        });
    });
}
exports.ESetParamAddressHandler = ESetParamAddressHandler;
function handleESetParamUint(event) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var pool, poolContract, stablecoinContract, _a, _b, stablecoinDecimals, stablecoinPrecision, paramName;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, utils_1.getPool(event.address.toHex())];
                case 1:
                    pool = _c.sent();
                    poolContract = contracts_1.DInterest.bind(pool.address);
                    _b = (_a = contracts_2.ERC20).bind;
                    return [4 /*yield*/, poolContract.stablecoin()];
                case 2:
                    stablecoinContract = _b.apply(_a, [(_c.sent())]);
                    return [4 /*yield*/, stablecoinContract.decimals()];
                case 3:
                    stablecoinDecimals = _c.sent();
                    stablecoinPrecision = utils_1.tenPow(stablecoinDecimals);
                    paramName = event.params.paramName;
                    if (paramName == utils_1.keccak256("MinDepositPeriod")) {
                        pool.MinDepositPeriod = event.params.newValue;
                    }
                    else if (paramName == utils_1.keccak256("MaxDepositPeriod")) {
                        pool.MaxDepositPeriod = event.params.newValue;
                    }
                    else if (paramName == utils_1.keccak256("MinDepositAmount")) {
                        pool.MinDepositAmount = event.params.newValue
                            .toBigDecimal()
                            .div(stablecoinPrecision);
                    }
                    else if (paramName == utils_1.keccak256("MaxDepositAmount")) {
                        pool.MaxDepositAmount = event.params.newValue
                            .toBigDecimal()
                            .div(stablecoinPrecision);
                    }
                    //console.log(pool);
                    return [4 /*yield*/, pool.save()];
                case 4:
                    //console.log(pool);
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.handleESetParamUint = handleESetParamUint;
function EWithdrawHandler(event) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var address, dinterest, pool;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //test template (importing into the handler files)
                    console.log("Withdraw...");
                    address = "0xb5EE8910A93F8A450E97BE0436F36B9458106682";
                    dinterest = contracts_1.DInterest.bind(ethers_1.ethers.utils.getAddress(address));
                    console.log("Contract");
                    return [4 /*yield*/, utils_1.getPool(ethers_1.ethers.utils.getAddress(event.address))];
                case 1:
                    pool = _a.sent();
                    console.log(pool.toString());
                    return [2 /*return*/];
            }
        });
    });
}
exports.EWithdrawHandler = EWithdrawHandler;
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
//# sourceMappingURL=cUSDCPool.js.map