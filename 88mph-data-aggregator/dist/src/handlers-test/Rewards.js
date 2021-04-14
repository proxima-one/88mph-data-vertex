"use strict";
//import { BigDecimal, Address, ethereum } from "@graphprotocol/graph-ts";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawnHandler = exports.StakedHandler = exports.RewardPaidHandler = exports.RewardAddedHandler = void 0;
var ethers_1 = require("ethers");
var contracts_1 = require("../generated/contracts");
var utils_1 = require("./utils");
function RewardAddedHandler(event) {
    var mph = utils_1.getMPH();
    var rewards = contracts_1.Rewards.bind(event.address);
    mph.rewardPerSecond = utils_1.normalize(rewards.rewardRate());
    var totalStakedMPHBalance = utils_1.normalize(rewards.totalSupply());
    mph.rewardPerMPHPerSecond =
        totalStakedMPHBalance == utils_1.ZERO_DEC
            ? utils_1.ZERO_DEC
            : mph.rewardPerSecond.div(totalStakedMPHBalance);
    mph.totalHistoricalReward = ethers_1.BigNumber.from(mph.totalHistoricalReward).add(utils_1.normalize(event.params.reward));
    mph.save();
}
exports.RewardAddedHandler = RewardAddedHandler;
function RewardPaidHandler(event) {
    var mph = utils_1.getMPH();
    var mphHolder = utils_1.getMPHHolder(event.params.user);
    if (mphHolder == null) {
        return;
    }
    var rewardAmount = utils_1.normalize(event.params.reward);
    mphHolder.totalHistoricalReward = ethers_1.BigNumber.from(mphHolder.totalHistoricalReward).add(rewardAmount);
    mphHolder.save();
    mph.save();
}
exports.RewardPaidHandler = RewardPaidHandler;
function StakedHandler(event) {
    var mph = utils_1.getMPH();
    var rewards = contracts_1.Rewards.bind(event.address);
    var stakeAmount = utils_1.normalize(event.params.amount);
    var totalStakedMPHBalance = utils_1.normalize(rewards.totalSupply());
    mph.rewardPerSecond = utils_1.normalize(rewards.rewardRate());
    mph.rewardPerMPHPerSecond = mph.rewardPerSecond.div(totalStakedMPHBalance);
    mph.save();
}
exports.StakedHandler = StakedHandler;
function WithdrawnHandler(event) {
    var mph = utils_1.getMPH();
    var rewards = contracts_1.Rewards.bind(event.address);
    var totalStakedMPHBalance = utils_1.normalize(rewards.totalSupply());
    mph.rewardPerSecond = utils_1.normalize(rewards.rewardRate());
    mph.rewardPerMPHPerSecond =
        totalStakedMPHBalance == utils_1.ZERO_DEC
            ? utils_1.ZERO_DEC
            : mph.rewardPerSecond.div(totalStakedMPHBalance);
    mph.save();
}
exports.WithdrawnHandler = WithdrawnHandler;
//attaching multiple handler at the same time
//# sourceMappingURL=Rewards.js.map