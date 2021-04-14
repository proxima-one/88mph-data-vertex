//import { BigDecimal, Address, ethereum } from "@graphprotocol/graph-ts";

import { BigNumber } from "ethers";
import { Rewards } from "../generated/contracts";
import { getMPH, getMPHHolder, normalize, ZERO_DEC } from "./utils";

//import { DPoolList, DPool, User, UserTotalDeposit, Deposit, Funder, FunderTotalInterest, Funding, MPHHolder, MPH } from '../generated/models/models'
// type OwnershipTransferred = any;
// export function OwnershipTransferredHandler(event: OwnershipTransferred): void {
//   //test template (importing into the handler files)
//   console.log(event);
// }

//attaching multiple handler at the same time
type RewardAdded = any;
export function RewardAddedHandler(event: RewardAdded): void {
  let mph = getMPH();
  let rewards = Rewards.bind(event.address);

  mph.rewardPerSecond = normalize((rewards.rewardRate() as unknown) as bigint);
  let totalStakedMPHBalance = normalize(
    (rewards.totalSupply() as unknown) as bigint
  );
  mph.rewardPerMPHPerSecond =
    totalStakedMPHBalance == ZERO_DEC
      ? ZERO_DEC
      : mph.rewardPerSecond.div(totalStakedMPHBalance);
  mph.totalHistoricalReward = BigNumber.from(mph.totalHistoricalReward).add(
    normalize(event.params.reward)
  );

  mph.save();
}

//attaching multiple handler at the same time
type RewardPaid = any;
export function RewardPaidHandler(event: RewardPaid): void {
  let mph = getMPH();
  let mphHolder = getMPHHolder(event.params.user);
  if (mphHolder == null) {
    return;
  }

  let rewardAmount = normalize(event.params.reward);
  mphHolder.totalHistoricalReward = BigNumber.from(
    mphHolder.totalHistoricalReward
  ).add(rewardAmount);

  mphHolder.save();
  mph.save();
}

//attaching multiple handler at the same time
type Staked = any;
export function StakedHandler(event: Staked): void {
  let mph = getMPH();
  let rewards = Rewards.bind(event.address);

  let stakeAmount = normalize(event.params.amount);
  let totalStakedMPHBalance = normalize(
    (rewards.totalSupply() as unknown) as bigint
  );
  mph.rewardPerSecond = normalize((rewards.rewardRate() as unknown) as bigint);
  mph.rewardPerMPHPerSecond = mph.rewardPerSecond.div(totalStakedMPHBalance);

  mph.save();
}

//attaching multiple handler at the same time
type Withdrawn = any;
export function WithdrawnHandler(event: Withdrawn): void {
  let mph = getMPH();
  let rewards = Rewards.bind(event.address);

  let totalStakedMPHBalance = normalize(
    (rewards.totalSupply() as unknown) as bigint
  );
  mph.rewardPerSecond = normalize((rewards.rewardRate() as unknown) as bigint);
  mph.rewardPerMPHPerSecond =
    totalStakedMPHBalance == ZERO_DEC
      ? ZERO_DEC
      : mph.rewardPerSecond.div(totalStakedMPHBalance);

  mph.save();
}

//attaching multiple handler at the same time
