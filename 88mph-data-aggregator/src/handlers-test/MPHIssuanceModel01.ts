import { DInterest } from "../generated/contracts";
import { ERC20 } from "../generated/contracts";
// import {
//   SetPoolDepositorRewardMintMultiplierCall,
//   SetPoolDepositorRewardTakeBackMultiplierCall,
//   SetPoolFunderRewardMultiplierCall
// } from "../generated/MPHIssuanceModel01/MPHIssuanceModel01";
import { DPool } from "../generated/models/models";
import { normalize } from "./utils";
type SetPoolDepositorRewardMintMultiplierCall = any;
export function handleSetDepositorRewardMintMultiplier(
  call: SetPoolDepositorRewardMintMultiplierCall
): void {
  let pool = DPool.load(call.inputs.pool.toHex());
  if (pool != null) {
    let poolContract = DInterest.bind(call.inputs.pool);
    let stablecoinContract = ERC20.bind(
      (poolContract.stablecoin() as unknown) as string
    );
    let stablecoinDecimals: number = (stablecoinContract.decimals() as unknown) as number;
    pool.mphDepositorRewardMintMultiplier = normalize(
      call.inputs.newMultiplier,
      36 - stablecoinDecimals
    );
    pool.save();
  }
}

type SetPoolDepositorRewardTakeBackMultiplierCall = any;
export function handleSetPoolDepositorRewardTakeBackMultiplier(
  call: SetPoolDepositorRewardTakeBackMultiplierCall
): void {
  let pool = DPool.load(call.inputs.pool.toHex());
  if (pool != null) {
    pool.mphDepositorRewardTakeBackMultiplier = normalize(
      call.inputs.newMultiplier
    );
    pool.save();
  }
}
type SetPoolFunderRewardMultiplierCall = any;
export function handleSetPoolFunderRewardMultiplier(
  call: SetPoolFunderRewardMultiplierCall
): void {
  let pool = DPool.load(call.inputs.pool.toHex());
  if (pool != null) {
    let poolContract = DInterest.bind(call.inputs.pool);
    let stablecoinContract = ERC20.bind(
      (poolContract.stablecoin() as unknown) as string
    );
    let stablecoinDecimals: number = (stablecoinContract.decimals() as unknown) as number;
    pool.mphFunderRewardMultiplier = normalize(
      call.inputs.newMultiplier,
      36 - stablecoinDecimals
    );
    pool.save();
  }
}
