// import {
//   BigDecimal,
//   BigInt,
//   Address,
//   DataSourceContext,
//   ByteArray,
//   crypto
// } from "@graphprotocol/graph-ts";
import { DInterest } from "../generated/contracts";
import { ERC20 } from "../generated/contracts";
import { IInterestOracle } from "../generated/contracts";
import { MPHIssuanceModel01 } from "../generated/contracts";
import {
  DPoolList,
  DPool,
  User,
  Funder,
  MPH,
  MPHHolder
} from "../generated/models/models";
import { NFT } from "../generated/contracts/NFT";
import { BigNumber, ContractTransaction, BigNumberish, ethers } from "ethers";

const BigDecimal = BigNumber;

export let DPOOLLIST_ID = "0";
export let MPH_ID = "0";
export let ZERO_DEC = BigDecimal.from("0");
export let ONE_DEC = BigDecimal.from("1");
export let NEGONE_DEC = BigDecimal.from("-1");
export let ZERO_INT = BigInt(0);
export let ONE_INT = BigInt(1);
export let YEAR = BigInt(31556952); // One year in seconds
export let ZERO_ADDR = "0x0000000000000000000000000000000000000000";
export let MPH_ISSUANCE_MODEL_ADDR =
  "0x36ad542dadc22078511d64b98aff818abd1ac713";
export let DELIMITER = "---";
export let BLOCK_HANDLER_START_BLOCK = BigInt(11951179 + 1500);
export let BLOCK_HANDLER_INTERVAL = BigInt(20); // call block handler every 20 blocks

export let POOL_ADDRESSES = new Array<string>(0);
POOL_ADDRESSES.push("0x35966201a7724b952455b73a36c8846d8745218e"); // cDAI
POOL_ADDRESSES.push("0x374226dbaa3e44bf3923afb63f5fd83928b7e148"); // cUSDC
POOL_ADDRESSES.push("0x19e10132841616ce4790920d5f94b8571f9b9341"); // cUNI
POOL_ADDRESSES.push("0xe615e59353f70ca2424aa0f24f49c639b8e924d3"); // yUSD
POOL_ADDRESSES.push("0x681aaa7cf3f7e1f110842f0149ba8a4af53ef2fd"); // crvSBTC
POOL_ADDRESSES.push("0x23fa6b36e870ca5753853538d17c3ca7f5269e84"); // Harvest yCRV
POOL_ADDRESSES.push("0xe8c52367b81113ed32bb276184e521c2fbe9393a"); // Aave USDC
POOL_ADDRESSES.push("0xb1abaac351e06d40441cf2cd97f6f0098e6473f2"); // Harvest crvHUSD
POOL_ADDRESSES.push("0x2f3efd1a90a2336ab8fa1b9060380dc37361ca55"); // Harvest 3CRV
POOL_ADDRESSES.push("0x3f5611f7762cc39fc11e10c864ae38526f650e9d"); // Harvest crvHBTC
POOL_ADDRESSES.push("0x6712baab01fa2dc7be6635746ec2da6f8bd73e71"); // Aave sUSD
POOL_ADDRESSES.push("0xdc86ac6140026267e0873b27c8629efe748e7146"); // Aave DAI
POOL_ADDRESSES.push("0xd4837145c7e13d580904e8431cfd481f9794fc41"); // Harvest crvOBTC
POOL_ADDRESSES.push("0x904f81eff3c35877865810cca9a63f2d9cb7d4dd"); // yaLINK
POOL_ADDRESSES.push("0x303cb7ede0c3ad99ce017cdc3abacd65164ff486"); // Harvest CRV:STETH
POOL_ADDRESSES.push("0x22e6b9a65163ce1225d1f65ef7942a979d093039"); // Harvest CRV:RENWBTC

type i32 = number;

export let POOL_DEPLOY_BLOCKS = new Array<i32>(0);
POOL_DEPLOY_BLOCKS.push(11312644); // cDAI
POOL_DEPLOY_BLOCKS.push(11315763); // cUSDC
POOL_DEPLOY_BLOCKS.push(11315994); // cUNI
POOL_DEPLOY_BLOCKS.push(11316295); // yUSD
POOL_DEPLOY_BLOCKS.push(11316753); // crvSBTC
POOL_DEPLOY_BLOCKS.push(11370919); // Harvest yCRV
POOL_DEPLOY_BLOCKS.push(11410383); // Aave USDC
POOL_DEPLOY_BLOCKS.push(11446987); // Harvest crvHUSD
POOL_DEPLOY_BLOCKS.push(11479937); // Harvest 3CRV
POOL_DEPLOY_BLOCKS.push(11507624); // Harvest crvHBTC
POOL_DEPLOY_BLOCKS.push(11533975); // Aave sUSD
POOL_DEPLOY_BLOCKS.push(11669032); // Aave DAI
POOL_DEPLOY_BLOCKS.push(11669290); // Harvest crvOBTC
POOL_DEPLOY_BLOCKS.push(11871065); // yaLINK
POOL_DEPLOY_BLOCKS.push(11937307); // Harvest CRV:STETH
POOL_DEPLOY_BLOCKS.push(11938573); // Harvest CRV:RENWBTC

export function tenPow(exponent: number): BigNumberish {
  let result = BigInt(1);
  for (let i = 0; i < exponent; i++) {
    result = result * BigInt(10);
  }
  return BigNumber.from(result);
}

export function normalize(i: BigInt, decimals: number = 18): BigNumber {
  return BigDecimal.from(i).div(tenPow(decimals));
}

export function keccak256(s: string): string {
  return ethers.utils.keccak256(s);
}

export function stringEqual(s1: string, s2: string): boolean {
  return keccak256(s1) == keccak256(s2);
}

export function getPoolList(): DPoolList {
  let poolList = DPoolList.load(DPOOLLIST_ID);
  if (poolList == null) {
    // Initialize DPoolList
    poolList = new DPoolList(DPOOLLIST_ID);
    poolList.poolIds = new Array<string>(0);
    poolList.numPools = ZERO_INT;
    poolList.numUsers = ZERO_INT;
    poolList.numActiveUsers = ZERO_INT;
    poolList.numFunders = ZERO_INT;
    poolList.save();
  }
  return poolList as DPoolList;
}

export async function getPool(poolAddress: string): Promise<DPool> {
  let pool = await DPool.load(ethers.utils.getAddress(poolAddress));

  if (pool == null) {
    pool = new DPool(poolAddress);
    console.log(pool);
    let poolContract = DInterest.bind(ethers.utils.getAddress(poolAddress));
    let oracleContract = IInterestOracle.bind(
      ethers.utils.getAddress(await poolContract.interestOracle())
    );
    let stablecoinContract = ERC20.bind(
      ethers.utils.getAddress(await poolContract.stablecoin())
    );
    let stablecoinDecimals: number = await stablecoinContract.decimals();
    let stablecoinPrecision = BigDecimal.from(tenPow(stablecoinDecimals));
    let mphIssuanceModel01Contract = MPHIssuanceModel01.bind(
      MPH_ISSUANCE_MODEL_ADDR
    );
    pool.address = poolAddress;
    pool.moneyMarket = (await poolContract.moneyMarket()) as string;
    pool.stablecoin = (await poolContract.stablecoin()) as string;
    pool.interestModel = (await poolContract.interestModel()) as string;
    pool.numUsers = ZERO_INT;
    pool.numDeposits = ZERO_INT;
    pool.numActiveDeposits = ZERO_INT;
    pool.totalActiveDeposit = ZERO_DEC;
    pool.totalHistoricalDeposit = ZERO_DEC;
    pool.numFunders = ZERO_INT;
    pool.numFundings = ZERO_INT;
    pool.totalInterestPaid = ZERO_DEC;
    pool.unfundedDepositAmount = ZERO_DEC;
    // pool.oneYearInterestRate = normalize(
    //   ((await poolContract.calculateInterestAmount(
    //     tenPow(18),
    //     BigNumber.from(YEAR)
    //   )) as unknown) as bigint
    // );
    pool.surplus = ZERO_DEC;
    pool.moneyMarketIncomeIndex = ZERO_INT;
    // pool.oracleInterestRate = normalize(
    //   ((await oracleContract.updateAndQuery()).value as unknown) as bigint,
    //   36 - stablecoinDecimals
    // );
    pool.MinDepositPeriod = await poolContract.MinDepositPeriod();
    pool.MaxDepositPeriod = await poolContract.MaxDepositPeriod();
    pool.MinDepositAmount = (await poolContract.MinDepositAmount()).div(
      stablecoinPrecision
    );
    pool.MaxDepositAmount = (await poolContract.MaxDepositAmount()).div(
      stablecoinPrecision
    );
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
    await pool.save();

    console.log("Pool");
    console.log(Object.entries(pool));
    // Create NFT templates
    // let depositNFTContext = new DataSourceContext();
    // depositNFTContext.setString("pool", poolAddress);
    // depositNFTContext.setString("type", "deposit");
    // //update template creation
    // //NFT.createWithContext(poolContract.depositNFT(), depositNFTContext);
    // let fundingNFTContext = new DataSourceContext();
    // fundingNFTContext.setString("pool", poolAddress);
    // fundingNFTContext.setString("type", "funding");
    //NFT.createWithContext(poolContract.fundingNFT(), fundingNFTContext);

    // Add pool to DPoolList
    let poolList = await getPoolList();
    let pools = poolList.poolIds;
    if (pools == null) {
      pools = new Array<string>(0);
    }
    pools.push(poolAddress as string);
    //update the
    //poolList.poolIds = poolListPools;
    poolList.numPools = (poolList.numPools as bigint) + ONE_INT;
    await poolList.save();
  }
  return pool as DPool;
}

export async function getUser(address: string, pool: DPool): Promise<User> {
  let user = await User.load(address);
  console.log("User");
  if (user == null) {
    let poolList = await getPoolList();
    poolList.numUsers = (poolList.numUsers as bigint) + ONE_INT;
    await poolList.save();

    user = new User(address);
    user.address = address;
    let pools = new Array<string>(0); //here
    pools.push(pool.id as string);
    user.poolIds = pools;
    user.numPools = ZERO_INT;
    user.numDeposits = ZERO_INT;
    user.numActiveDeposits = ZERO_INT;
    user.totalMPHEarned = ZERO_DEC;
    user.totalMPHPaidBack = ZERO_DEC;
    await user.save();

    pool.numUsers = (pool.numUsers as bigint) + ONE_INT;
    await pool.save();
  }
  console.log(user.toString());
  return user as User;
}

export async function getFunder(address: string, pool: DPool): Promise<Funder> {
  let user = await Funder.load(address);
  if (user == null) {
    user = new Funder(address);
    user.address = address;
    let pools = new Array<string>(0);
    pools.push(pool.address as string);
    user.poolIds = pools;
    user.numPools = ZERO_INT;
    user.numFundings = ZERO_INT;
    user.totalMPHEarned = ZERO_DEC;
    user.save();

    pool.numFunders = (pool.numFunders as bigint) + ONE_INT;
    pool.save();

    let poolList = getPoolList();
    poolList.numFunders = (poolList.numFunders as bigint) + ONE_INT;
    poolList.save();
  }
  return user as Funder;
}

export function getMPH(): MPH {
  let entity = MPH.load(MPH_ID);
  if (entity == null) {
    entity = new MPH(MPH_ID);
    entity.totalHistoricalReward = ZERO_DEC;
    entity.rewardPerMPHPerSecond = ZERO_DEC;
    entity.rewardPerSecond = ZERO_DEC;
    entity.save();
  }
  return entity as MPH;
}

export function getMPHHolder(address: string): MPHHolder | null {
  if (address == ZERO_ADDR) {
    return null;
  }
  let entity = MPHHolder.load(address);
  if (entity == null) {
    entity = new MPHHolder(address);
    entity.address = address;
    entity.totalHistoricalReward = ZERO_DEC;
    entity.save();
  }
  return entity as MPHHolder;
}
function as(
  arg0: Promise<ContractTransaction>,
  as: any,
  ContractTransaction: any
) {
  throw new Error("Function not implemented.");
}
