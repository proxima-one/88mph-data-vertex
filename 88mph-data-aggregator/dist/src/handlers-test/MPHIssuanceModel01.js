"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSetPoolFunderRewardMultiplier = exports.handleSetPoolDepositorRewardTakeBackMultiplier = exports.handleSetDepositorRewardMintMultiplier = void 0;
var contracts_1 = require("../generated/contracts");
var contracts_2 = require("../generated/contracts");
// import {
//   SetPoolDepositorRewardMintMultiplierCall,
//   SetPoolDepositorRewardTakeBackMultiplierCall,
//   SetPoolFunderRewardMultiplierCall
// } from "../generated/MPHIssuanceModel01/MPHIssuanceModel01";
var models_1 = require("../generated/models/models");
var utils_1 = require("./utils");
function handleSetDepositorRewardMintMultiplier(call) {
    var pool = models_1.DPool.load(call.inputs.pool.toHex());
    if (pool != null) {
        var poolContract = contracts_1.DInterest.bind(call.inputs.pool);
        var stablecoinContract = contracts_2.ERC20.bind(poolContract.stablecoin());
        var stablecoinDecimals = stablecoinContract.decimals();
        pool.mphDepositorRewardMintMultiplier = utils_1.normalize(call.inputs.newMultiplier, 36 - stablecoinDecimals);
        pool.save();
    }
}
exports.handleSetDepositorRewardMintMultiplier = handleSetDepositorRewardMintMultiplier;
function handleSetPoolDepositorRewardTakeBackMultiplier(call) {
    var pool = models_1.DPool.load(call.inputs.pool.toHex());
    if (pool != null) {
        pool.mphDepositorRewardTakeBackMultiplier = utils_1.normalize(call.inputs.newMultiplier);
        pool.save();
    }
}
exports.handleSetPoolDepositorRewardTakeBackMultiplier = handleSetPoolDepositorRewardTakeBackMultiplier;
function handleSetPoolFunderRewardMultiplier(call) {
    var pool = models_1.DPool.load(call.inputs.pool.toHex());
    if (pool != null) {
        var poolContract = contracts_1.DInterest.bind(call.inputs.pool);
        var stablecoinContract = contracts_2.ERC20.bind(poolContract.stablecoin());
        var stablecoinDecimals = stablecoinContract.decimals();
        pool.mphFunderRewardMultiplier = utils_1.normalize(call.inputs.newMultiplier, 36 - stablecoinDecimals);
        pool.save();
    }
}
exports.handleSetPoolFunderRewardMultiplier = handleSetPoolFunderRewardMultiplier;
//# sourceMappingURL=MPHIssuanceModel01.js.map