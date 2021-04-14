"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMPHHolder = exports.getMPH = exports.getFunder = exports.getUser = exports.getPool = exports.getPoolList = exports.stringEqual = exports.keccak256 = exports.normalize = exports.tenPow = exports.POOL_DEPLOY_BLOCKS = exports.POOL_ADDRESSES = exports.BLOCK_HANDLER_INTERVAL = exports.BLOCK_HANDLER_START_BLOCK = exports.DELIMITER = exports.MPH_ISSUANCE_MODEL_ADDR = exports.ZERO_ADDR = exports.YEAR = exports.ONE_INT = exports.ZERO_INT = exports.NEGONE_DEC = exports.ONE_DEC = exports.ZERO_DEC = exports.MPH_ID = exports.DPOOLLIST_ID = void 0;
var tslib_1 = require("tslib");
// import {
//   BigDecimal,
//   BigInt,
//   Address,
//   DataSourceContext,
//   ByteArray,
//   crypto
// } from "@graphprotocol/graph-ts";
var contracts_1 = require("../generated/contracts");
var contracts_2 = require("../generated/contracts");
var contracts_3 = require("../generated/contracts");
var contracts_4 = require("../generated/contracts");
var models_1 = require("../generated/models/models");
var ethers_1 = require("ethers");
var BigDecimal = ethers_1.BigNumber;
exports.DPOOLLIST_ID = "0";
exports.MPH_ID = "0";
exports.ZERO_DEC = BigDecimal.from("0");
exports.ONE_DEC = BigDecimal.from("1");
exports.NEGONE_DEC = BigDecimal.from("-1");
exports.ZERO_INT = BigInt(0);
exports.ONE_INT = BigInt(1);
exports.YEAR = BigInt(31556952); // One year in seconds
exports.ZERO_ADDR = "0x0000000000000000000000000000000000000000";
exports.MPH_ISSUANCE_MODEL_ADDR = "0x36ad542dadc22078511d64b98aff818abd1ac713";
exports.DELIMITER = "---";
exports.BLOCK_HANDLER_START_BLOCK = BigInt(11951179 + 1500);
exports.BLOCK_HANDLER_INTERVAL = BigInt(20); // call block handler every 20 blocks
exports.POOL_ADDRESSES = new Array(0);
exports.POOL_ADDRESSES.push("0x35966201a7724b952455b73a36c8846d8745218e"); // cDAI
exports.POOL_ADDRESSES.push("0x374226dbaa3e44bf3923afb63f5fd83928b7e148"); // cUSDC
exports.POOL_ADDRESSES.push("0x19e10132841616ce4790920d5f94b8571f9b9341"); // cUNI
exports.POOL_ADDRESSES.push("0xe615e59353f70ca2424aa0f24f49c639b8e924d3"); // yUSD
exports.POOL_ADDRESSES.push("0x681aaa7cf3f7e1f110842f0149ba8a4af53ef2fd"); // crvSBTC
exports.POOL_ADDRESSES.push("0x23fa6b36e870ca5753853538d17c3ca7f5269e84"); // Harvest yCRV
exports.POOL_ADDRESSES.push("0xe8c52367b81113ed32bb276184e521c2fbe9393a"); // Aave USDC
exports.POOL_ADDRESSES.push("0xb1abaac351e06d40441cf2cd97f6f0098e6473f2"); // Harvest crvHUSD
exports.POOL_ADDRESSES.push("0x2f3efd1a90a2336ab8fa1b9060380dc37361ca55"); // Harvest 3CRV
exports.POOL_ADDRESSES.push("0x3f5611f7762cc39fc11e10c864ae38526f650e9d"); // Harvest crvHBTC
exports.POOL_ADDRESSES.push("0x6712baab01fa2dc7be6635746ec2da6f8bd73e71"); // Aave sUSD
exports.POOL_ADDRESSES.push("0xdc86ac6140026267e0873b27c8629efe748e7146"); // Aave DAI
exports.POOL_ADDRESSES.push("0xd4837145c7e13d580904e8431cfd481f9794fc41"); // Harvest crvOBTC
exports.POOL_ADDRESSES.push("0x904f81eff3c35877865810cca9a63f2d9cb7d4dd"); // yaLINK
exports.POOL_ADDRESSES.push("0x303cb7ede0c3ad99ce017cdc3abacd65164ff486"); // Harvest CRV:STETH
exports.POOL_ADDRESSES.push("0x22e6b9a65163ce1225d1f65ef7942a979d093039"); // Harvest CRV:RENWBTC
exports.POOL_DEPLOY_BLOCKS = new Array(0);
exports.POOL_DEPLOY_BLOCKS.push(11312644); // cDAI
exports.POOL_DEPLOY_BLOCKS.push(11315763); // cUSDC
exports.POOL_DEPLOY_BLOCKS.push(11315994); // cUNI
exports.POOL_DEPLOY_BLOCKS.push(11316295); // yUSD
exports.POOL_DEPLOY_BLOCKS.push(11316753); // crvSBTC
exports.POOL_DEPLOY_BLOCKS.push(11370919); // Harvest yCRV
exports.POOL_DEPLOY_BLOCKS.push(11410383); // Aave USDC
exports.POOL_DEPLOY_BLOCKS.push(11446987); // Harvest crvHUSD
exports.POOL_DEPLOY_BLOCKS.push(11479937); // Harvest 3CRV
exports.POOL_DEPLOY_BLOCKS.push(11507624); // Harvest crvHBTC
exports.POOL_DEPLOY_BLOCKS.push(11533975); // Aave sUSD
exports.POOL_DEPLOY_BLOCKS.push(11669032); // Aave DAI
exports.POOL_DEPLOY_BLOCKS.push(11669290); // Harvest crvOBTC
exports.POOL_DEPLOY_BLOCKS.push(11871065); // yaLINK
exports.POOL_DEPLOY_BLOCKS.push(11937307); // Harvest CRV:STETH
exports.POOL_DEPLOY_BLOCKS.push(11938573); // Harvest CRV:RENWBTC
function tenPow(exponent) {
    var result = BigInt(1);
    for (var i = 0; i < exponent; i++) {
        result = result * BigInt(10);
    }
    return ethers_1.BigNumber.from(result);
}
exports.tenPow = tenPow;
function normalize(i, decimals) {
    if (decimals === void 0) { decimals = 18; }
    return BigDecimal.from(i).div(tenPow(decimals));
}
exports.normalize = normalize;
function keccak256(s) {
    return ethers_1.ethers.utils.keccak256(s);
}
exports.keccak256 = keccak256;
function stringEqual(s1, s2) {
    return keccak256(s1) == keccak256(s2);
}
exports.stringEqual = stringEqual;
function getPoolList() {
    var poolList = models_1.DPoolList.load(exports.DPOOLLIST_ID);
    if (poolList == null) {
        // Initialize DPoolList
        poolList = new models_1.DPoolList(exports.DPOOLLIST_ID);
        poolList.poolIds = new Array(0);
        poolList.numPools = exports.ZERO_INT;
        poolList.numUsers = exports.ZERO_INT;
        poolList.numActiveUsers = exports.ZERO_INT;
        poolList.numFunders = exports.ZERO_INT;
        poolList.save();
    }
    return poolList;
}
exports.getPoolList = getPoolList;
function getPool(poolAddress) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var pool, poolContract, oracleContract, _a, _b, _c, _d, stablecoinContract, _e, _f, _g, _h, stablecoinDecimals, stablecoinPrecision, mphIssuanceModel01Contract, _j, _k, _l, _m, _o, _p, _q, poolList, pools;
        return tslib_1.__generator(this, function (_r) {
            switch (_r.label) {
                case 0: return [4 /*yield*/, models_1.DPool.load(ethers_1.ethers.utils.getAddress(poolAddress))];
                case 1:
                    pool = _r.sent();
                    if (!(pool == null)) return [3 /*break*/, 15];
                    pool = new models_1.DPool(poolAddress);
                    console.log(pool);
                    poolContract = contracts_1.DInterest.bind(ethers_1.ethers.utils.getAddress(poolAddress));
                    _b = (_a = contracts_3.IInterestOracle).bind;
                    _d = (_c = ethers_1.ethers.utils).getAddress;
                    return [4 /*yield*/, poolContract.interestOracle()];
                case 2:
                    oracleContract = _b.apply(_a, [_d.apply(_c, [_r.sent()])]);
                    _f = (_e = contracts_2.ERC20).bind;
                    _h = (_g = ethers_1.ethers.utils).getAddress;
                    return [4 /*yield*/, poolContract.stablecoin()];
                case 3:
                    stablecoinContract = _f.apply(_e, [_h.apply(_g, [_r.sent()])]);
                    return [4 /*yield*/, stablecoinContract.decimals()];
                case 4:
                    stablecoinDecimals = _r.sent();
                    stablecoinPrecision = BigDecimal.from(tenPow(stablecoinDecimals));
                    mphIssuanceModel01Contract = contracts_4.MPHIssuanceModel01.bind(exports.MPH_ISSUANCE_MODEL_ADDR);
                    pool.address = poolAddress;
                    _j = pool;
                    return [4 /*yield*/, poolContract.moneyMarket()];
                case 5:
                    _j.moneyMarket = (_r.sent());
                    _k = pool;
                    return [4 /*yield*/, poolContract.stablecoin()];
                case 6:
                    _k.stablecoin = (_r.sent());
                    _l = pool;
                    return [4 /*yield*/, poolContract.interestModel()];
                case 7:
                    _l.interestModel = (_r.sent());
                    pool.numUsers = exports.ZERO_INT;
                    pool.numDeposits = exports.ZERO_INT;
                    pool.numActiveDeposits = exports.ZERO_INT;
                    pool.totalActiveDeposit = exports.ZERO_DEC;
                    pool.totalHistoricalDeposit = exports.ZERO_DEC;
                    pool.numFunders = exports.ZERO_INT;
                    pool.numFundings = exports.ZERO_INT;
                    pool.totalInterestPaid = exports.ZERO_DEC;
                    pool.unfundedDepositAmount = exports.ZERO_DEC;
                    // pool.oneYearInterestRate = normalize(
                    //   ((await poolContract.calculateInterestAmount(
                    //     tenPow(18),
                    //     BigNumber.from(YEAR)
                    //   )) as unknown) as bigint
                    // );
                    pool.surplus = exports.ZERO_DEC;
                    pool.moneyMarketIncomeIndex = exports.ZERO_INT;
                    // pool.oracleInterestRate = normalize(
                    //   ((await oracleContract.updateAndQuery()).value as unknown) as bigint,
                    //   36 - stablecoinDecimals
                    // );
                    _m = pool;
                    return [4 /*yield*/, poolContract.MinDepositPeriod()];
                case 8:
                    // pool.oracleInterestRate = normalize(
                    //   ((await oracleContract.updateAndQuery()).value as unknown) as bigint,
                    //   36 - stablecoinDecimals
                    // );
                    _m.MinDepositPeriod = _r.sent();
                    _o = pool;
                    return [4 /*yield*/, poolContract.MaxDepositPeriod()];
                case 9:
                    _o.MaxDepositPeriod = _r.sent();
                    _p = pool;
                    return [4 /*yield*/, poolContract.MinDepositAmount()];
                case 10:
                    _p.MinDepositAmount = (_r.sent()).div(stablecoinPrecision);
                    _q = pool;
                    return [4 /*yield*/, poolContract.MaxDepositAmount()];
                case 11:
                    _q.MaxDepositAmount = (_r.sent()).div(stablecoinPrecision);
                    // pool.mphDepositorRewardMintMultiplier = normalize(
                    //   (mphIssuanceModel01Contract.poolDepositorRewardMintMultiplier(
                    //     poolAddress
                    //   ) as unknown) as bigint,
                    //   36 - stablecoinDecimals
                    // );
                    // pool.mphDepositorRewardTakeBackMultiplier = normalize(
                    //   (mphIssuanceModel01Contract.poolDepositorRewardTakeBackMultiplier(
                    //     poolAddress
                    //   ) as unknown) as bigint
                    // );
                    // pool.mphFunderRewardMultiplier = normalize(
                    //   (mphIssuanceModel01Contract.poolFunderRewardMultiplier(
                    //     poolAddress
                    //   ) as unknown) as bigint,
                    //   36 - stablecoinDecimals
                    // );
                    return [4 /*yield*/, pool.save()];
                case 12:
                    // pool.mphDepositorRewardMintMultiplier = normalize(
                    //   (mphIssuanceModel01Contract.poolDepositorRewardMintMultiplier(
                    //     poolAddress
                    //   ) as unknown) as bigint,
                    //   36 - stablecoinDecimals
                    // );
                    // pool.mphDepositorRewardTakeBackMultiplier = normalize(
                    //   (mphIssuanceModel01Contract.poolDepositorRewardTakeBackMultiplier(
                    //     poolAddress
                    //   ) as unknown) as bigint
                    // );
                    // pool.mphFunderRewardMultiplier = normalize(
                    //   (mphIssuanceModel01Contract.poolFunderRewardMultiplier(
                    //     poolAddress
                    //   ) as unknown) as bigint,
                    //   36 - stablecoinDecimals
                    // );
                    _r.sent();
                    console.log("Pool");
                    console.log(Object.entries(pool));
                    return [4 /*yield*/, getPoolList()];
                case 13:
                    poolList = _r.sent();
                    pools = poolList.poolIds;
                    if (pools == null) {
                        pools = new Array(0);
                    }
                    pools.push(poolAddress);
                    //update the
                    //poolList.poolIds = poolListPools;
                    poolList.numPools = poolList.numPools + exports.ONE_INT;
                    return [4 /*yield*/, poolList.save()];
                case 14:
                    _r.sent();
                    _r.label = 15;
                case 15: return [2 /*return*/, pool];
            }
        });
    });
}
exports.getPool = getPool;
function getUser(address, pool) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var user, poolList, pools;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.User.load(address)];
                case 1:
                    user = _a.sent();
                    console.log("User");
                    if (!(user == null)) return [3 /*break*/, 6];
                    return [4 /*yield*/, getPoolList()];
                case 2:
                    poolList = _a.sent();
                    poolList.numUsers = poolList.numUsers + exports.ONE_INT;
                    return [4 /*yield*/, poolList.save()];
                case 3:
                    _a.sent();
                    user = new models_1.User(address);
                    user.address = address;
                    pools = new Array(0);
                    pools.push(pool.id);
                    user.poolIds = pools;
                    user.numPools = exports.ZERO_INT;
                    user.numDeposits = exports.ZERO_INT;
                    user.numActiveDeposits = exports.ZERO_INT;
                    user.totalMPHEarned = exports.ZERO_DEC;
                    user.totalMPHPaidBack = exports.ZERO_DEC;
                    return [4 /*yield*/, user.save()];
                case 4:
                    _a.sent();
                    pool.numUsers = pool.numUsers + exports.ONE_INT;
                    return [4 /*yield*/, pool.save()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    console.log(user.toString());
                    return [2 /*return*/, user];
            }
        });
    });
}
exports.getUser = getUser;
function getFunder(address, pool) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var user, pools, poolList;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.Funder.load(address)];
                case 1:
                    user = _a.sent();
                    if (user == null) {
                        user = new models_1.Funder(address);
                        user.address = address;
                        pools = new Array(0);
                        pools.push(pool.address);
                        user.poolIds = pools;
                        user.numPools = exports.ZERO_INT;
                        user.numFundings = exports.ZERO_INT;
                        user.totalMPHEarned = exports.ZERO_DEC;
                        user.save();
                        pool.numFunders = pool.numFunders + exports.ONE_INT;
                        pool.save();
                        poolList = getPoolList();
                        poolList.numFunders = poolList.numFunders + exports.ONE_INT;
                        poolList.save();
                    }
                    return [2 /*return*/, user];
            }
        });
    });
}
exports.getFunder = getFunder;
function getMPH() {
    var entity = models_1.MPH.load(exports.MPH_ID);
    if (entity == null) {
        entity = new models_1.MPH(exports.MPH_ID);
        entity.totalHistoricalReward = exports.ZERO_DEC;
        entity.rewardPerMPHPerSecond = exports.ZERO_DEC;
        entity.rewardPerSecond = exports.ZERO_DEC;
        entity.save();
    }
    return entity;
}
exports.getMPH = getMPH;
function getMPHHolder(address) {
    if (address == exports.ZERO_ADDR) {
        return null;
    }
    var entity = models_1.MPHHolder.load(address);
    if (entity == null) {
        entity = new models_1.MPHHolder(address);
        entity.address = address;
        entity.totalHistoricalReward = exports.ZERO_DEC;
        entity.save();
    }
    return entity;
}
exports.getMPHHolder = getMPHHolder;
function as(arg0, as, ContractTransaction) {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=utils.js.map