import { useFetch } from "../../lib/DataVertexClient";
//import { TypedDocumentNode } from "@graphql-typed-document-node/core";
// import { TypedDocumentNode } from "@graphql-typed-document-node/core";
// import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import {
  convert,
  parseBigDecimal,
  parseProof,
  parseBigInt,
  parseInt,
  parseNumber,
  parseBigNumber,
  parseString
} from "./utils";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import { BigNumber, BigNumberish } from "ethers";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string | BigInt | BigNumber | BigNumberish;
  Boolean: boolean;
  Int: BigInt | BigNumberish | number;
  Float: number | BigNumber | BigNumberish;
  BigDecimal: BigNumber | BigNumberish;
  BigInt: BigInt;
};

export class DPool {
  __typename?: "DPool";
  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  moneyMarket?: Maybe<Scalars["String"]>;
  stablecoin?: Maybe<Scalars["String"]>;
  interestModel?: Maybe<Scalars["String"]>;
  users?: Maybe<Array<Maybe<User>>>;
  UserIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numUsers?: Maybe<Scalars["BigInt"]>;
  deposits?: Maybe<Array<Maybe<Deposit>>>;
  DepositIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numDeposits?: Maybe<Scalars["BigInt"]>;
  numActiveDeposits?: Maybe<Scalars["BigInt"]>;
  totalActiveDeposit?: Maybe<Scalars["BigDecimal"]>;
  totalHistoricalDeposit?: Maybe<Scalars["BigDecimal"]>;
  totalInterestPaid?: Maybe<Scalars["BigDecimal"]>;
  unfundedDepositAmount?: Maybe<Scalars["BigDecimal"]>;
  funders?: Maybe<Array<Maybe<Funder>>>;
  FunderIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numFunders?: Maybe<Scalars["BigInt"]>;
  fundings?: Maybe<Array<Maybe<Funding>>>;
  FundingIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numFundings?: Maybe<Scalars["BigInt"]>;
  MinDepositPeriod?: Maybe<Scalars["BigInt"]>;
  MaxDepositPeriod?: Maybe<Scalars["BigInt"]>;
  MinDepositAmount?: Maybe<Scalars["BigDecimal"]>;
  MaxDepositAmount?: Maybe<Scalars["BigDecimal"]>;
  mphDepositorRewardMintMultiplier?: Maybe<Scalars["BigDecimal"]>;
  mphDepositorRewardTakeBackMultiplier?: Maybe<Scalars["BigDecimal"]>;
  mphFunderRewardMultiplier?: Maybe<Scalars["BigDecimal"]>;
  oneYearInterestRate?: Maybe<Scalars["BigDecimal"]>;
  surplus?: Maybe<Scalars["BigDecimal"]>;
  moneyMarketIncomeIndex?: Maybe<Scalars["BigInt"]>;
  oracleInterestRate?: Maybe<Scalars["BigDecimal"]>;
  proof?: Maybe<Proof>;

  constructor(id?: string) {
    this.__typename = "DPool";
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<DPool> {
    var operationDocument = DPoolDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (result && result.data != undefined && result.data.DPool != undefined) {
      let value = result.data.DPool;
      return toDPool(value);
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateDPoolDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }
  _getSaveArgs(): DPoolInput {
    return toDPoolInput(this);
  }
}

export function toDPool(objInput: DPoolInput): DPool {
  let obj: DPool = new DPool();
  obj.__typename = "DPool";
  obj.id = objInput.id;
  obj.address = objInput.address;
  obj.moneyMarket = parseString(objInput.moneyMarket);
  obj.stablecoin = parseString(objInput.stablecoin);
  obj.interestModel = parseString(objInput.interestModel);
  obj.UserIDs = objInput.UserIDs;
  obj.DepositIDs = objInput.DepositIDs;
  obj.FunderIDs = objInput.FunderIDs;
  obj.FundingIDs = objInput.FundingIDs;
  return obj;
}

export function toDPoolInput(obj: DPool): DPoolInput {
  let objInput: DPoolInput = {
    __typename: "DPoolInput",
    id: obj.id,
    address: obj.address,
    moneyMarket: parseString(obj.moneyMarket),
    stablecoin: parseString(obj.stablecoin),
    interestModel: parseString(obj.interestModel),
    UserIDs: obj.UserIDs,
    DepositIDs: obj.DepositIDs,
    FunderIDs: obj.FunderIDs,
    FundingIDs: obj.FundingIDs
  };
  return objInput;
}

export type DPoolInput = {
  __typename?: "DPoolInput";

  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  moneyMarket?: Maybe<Scalars["String"]>;
  stablecoin?: Maybe<Scalars["String"]>;
  interestModel?: Maybe<Scalars["String"]>;
  UserIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numUsers?: Maybe<Scalars["BigInt"]>;
  DepositIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numDeposits?: Maybe<Scalars["BigInt"]>;
  numActiveDeposits?: Maybe<Scalars["BigInt"]>;
  totalActiveDeposit?: Maybe<Scalars["BigDecimal"]>;
  totalHistoricalDeposit?: Maybe<Scalars["BigDecimal"]>;
  totalInterestPaid?: Maybe<Scalars["BigDecimal"]>;
  unfundedDepositAmount?: Maybe<Scalars["BigDecimal"]>;
  FunderIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numFunders?: Maybe<Scalars["BigInt"]>;
  FundingIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numFundings?: Maybe<Scalars["BigInt"]>;
  MinDepositPeriod?: Maybe<Scalars["BigInt"]>;
  MaxDepositPeriod?: Maybe<Scalars["BigInt"]>;
  MinDepositAmount?: Maybe<Scalars["BigDecimal"]>;
  MaxDepositAmount?: Maybe<Scalars["BigDecimal"]>;
  mphDepositorRewardMintMultiplier?: Maybe<Scalars["BigDecimal"]>;
  mphDepositorRewardTakeBackMultiplier?: Maybe<Scalars["BigDecimal"]>;
  mphFunderRewardMultiplier?: Maybe<Scalars["BigDecimal"]>;
  oneYearInterestRate?: Maybe<Scalars["BigDecimal"]>;
  surplus?: Maybe<Scalars["BigDecimal"]>;
  moneyMarketIncomeIndex?: Maybe<Scalars["BigInt"]>;
  oracleInterestRate?: Maybe<Scalars["BigDecimal"]>;
};

export class DPoolList {
  __typename?: "DPoolList";
  id?: Maybe<Scalars["ID"]>;
  pools?: Maybe<Array<Maybe<DPool>>>;
  DPoolIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numPools?: Maybe<Scalars["BigInt"]>;
  numUsers?: Maybe<Scalars["BigInt"]>;
  numActiveUsers?: Maybe<Scalars["BigInt"]>;
  numFunders?: Maybe<Scalars["BigInt"]>;
  proof?: Maybe<Proof>;

  constructor(id?: string) {
    this.__typename = "DPoolList";
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<DPoolList> {
    var operationDocument = DPoolListDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (
      result &&
      result.data != undefined &&
      result.data.DPoolList != undefined
    ) {
      let value = result.data.DPoolList;
      return toDPoolList(value);
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateDPoolListDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }
  _getSaveArgs(): DPoolListInput {
    return toDPoolListInput(this);
  }
}

export function toDPoolList(objInput: DPoolListInput): DPoolList {
  let obj: DPoolList = new DPoolList();
  obj.__typename = "DPoolList";
  obj.id = objInput.id;
  obj.DPoolIDs = objInput.DPoolIDs;
  return obj;
}

export function toDPoolListInput(obj: DPoolList): DPoolListInput {
  let objInput: DPoolListInput = {
    __typename: "DPoolListInput",
    id: obj.id,
    DPoolIDs: obj.DPoolIDs
  };
  return objInput;
}

export type DPoolListInput = {
  __typename?: "DPoolListInput";

  id?: Maybe<Scalars["ID"]>;
  DPoolIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numPools?: Maybe<Scalars["BigInt"]>;
  numUsers?: Maybe<Scalars["BigInt"]>;
  numActiveUsers?: Maybe<Scalars["BigInt"]>;
  numFunders?: Maybe<Scalars["BigInt"]>;
};

export class Deposit {
  __typename?: "Deposit";
  id?: Maybe<Scalars["ID"]>;
  nftID?: Maybe<Scalars["BigInt"]>;
  user?: Maybe<User>;
  UserID?: Maybe<Scalars["String"]>;
  pool?: Maybe<DPool>;
  DPoolID?: Maybe<Scalars["String"]>;
  amount?: Maybe<Scalars["BigDecimal"]>;
  maturationTimestamp?: Maybe<Scalars["BigInt"]>;
  active?: Maybe<Scalars["Boolean"]>;
  depositTimestamp?: Maybe<Scalars["BigInt"]>;
  depositLength?: Maybe<Scalars["BigInt"]>;
  interestEarned?: Maybe<Scalars["BigDecimal"]>;
  fundingID?: Maybe<Scalars["BigInt"]>;
  mintMPHAmount?: Maybe<Scalars["BigDecimal"]>;
  takeBackMPHAmount?: Maybe<Scalars["BigDecimal"]>;
  initialMoneyMarketIncomeIndex?: Maybe<Scalars["BigInt"]>;
  fundingInterestPaid?: Maybe<Scalars["BigDecimal"]>;
  fundingRefundAmount?: Maybe<Scalars["BigDecimal"]>;
  proof?: Maybe<Proof>;

  constructor(id?: string) {
    this.__typename = "Deposit";
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<Deposit> {
    var operationDocument = DepositDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (
      result &&
      result.data != undefined &&
      result.data.Deposit != undefined
    ) {
      let value = result.data.Deposit;
      return toDeposit(value);
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateDepositDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }
  _getSaveArgs(): DepositInput {
    return toDepositInput(this);
  }
}

export function toDeposit(objInput: DepositInput): Deposit {
  let obj: Deposit = new Deposit();
  obj.__typename = "Deposit";
  obj.id = objInput.id;
  obj.UserID = parseString(objInput.UserID);
  obj.DPoolID = parseString(objInput.DPoolID);
  obj.active = objInput.active;
  return obj;
}

export function toDepositInput(obj: Deposit): DepositInput {
  let objInput: DepositInput = {
    __typename: "DepositInput",
    id: obj.id,
    UserID: parseString(obj.UserID),
    DPoolID: parseString(obj.DPoolID),
    active: obj.active
  };
  return objInput;
}

export type DepositInput = {
  __typename?: "DepositInput";

  id?: Maybe<Scalars["ID"]>;
  nftID?: Maybe<Scalars["BigInt"]>;
  UserID?: Maybe<Scalars["String"]>;
  DPoolID?: Maybe<Scalars["String"]>;
  amount?: Maybe<Scalars["BigDecimal"]>;
  maturationTimestamp?: Maybe<Scalars["BigInt"]>;
  active?: Maybe<Scalars["Boolean"]>;
  depositTimestamp?: Maybe<Scalars["BigInt"]>;
  depositLength?: Maybe<Scalars["BigInt"]>;
  interestEarned?: Maybe<Scalars["BigDecimal"]>;
  fundingID?: Maybe<Scalars["BigInt"]>;
  mintMPHAmount?: Maybe<Scalars["BigDecimal"]>;
  takeBackMPHAmount?: Maybe<Scalars["BigDecimal"]>;
  initialMoneyMarketIncomeIndex?: Maybe<Scalars["BigInt"]>;
  fundingInterestPaid?: Maybe<Scalars["BigDecimal"]>;
  fundingRefundAmount?: Maybe<Scalars["BigDecimal"]>;
};

export class FractionalDeposit {
  __typename?: "FractionalDeposit";
  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  zeroCouponBondAddress?: Maybe<Scalars["String"]>;
  ownerAddress?: Maybe<Scalars["String"]>;
  active?: Maybe<Scalars["Boolean"]>;
  deposit?: Maybe<Deposit>;
  DepositID?: Maybe<Scalars["String"]>;
  proof?: Maybe<Proof>;

  constructor(id?: string) {
    this.__typename = "FractionalDeposit";
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<FractionalDeposit> {
    var operationDocument = FractionalDepositDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (
      result &&
      result.data != undefined &&
      result.data.FractionalDeposit != undefined
    ) {
      let value = result.data.FractionalDeposit;
      return toFractionalDeposit(value);
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateFractionalDepositDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }
  _getSaveArgs(): FractionalDepositInput {
    return toFractionalDepositInput(this);
  }
}

export function toFractionalDeposit(
  objInput: FractionalDepositInput
): FractionalDeposit {
  let obj: FractionalDeposit = new FractionalDeposit();
  obj.__typename = "FractionalDeposit";
  obj.id = objInput.id;
  obj.address = objInput.address;
  obj.zeroCouponBondAddress = objInput.zeroCouponBondAddress;
  obj.ownerAddress = objInput.ownerAddress;
  obj.active = objInput.active;
  obj.DepositID = parseString(objInput.DepositID);
  return obj;
}

export function toFractionalDepositInput(
  obj: FractionalDeposit
): FractionalDepositInput {
  let objInput: FractionalDepositInput = {
    __typename: "FractionalDepositInput",
    id: obj.id,
    address: obj.address,
    zeroCouponBondAddress: obj.zeroCouponBondAddress,
    ownerAddress: obj.ownerAddress,
    active: obj.active,
    DepositID: parseString(obj.DepositID)
  };
  return objInput;
}

export type FractionalDepositInput = {
  __typename?: "FractionalDepositInput";

  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  zeroCouponBondAddress?: Maybe<Scalars["String"]>;
  ownerAddress?: Maybe<Scalars["String"]>;
  active?: Maybe<Scalars["Boolean"]>;
  DepositID?: Maybe<Scalars["String"]>;
};

export class Funder {
  __typename?: "Funder";
  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  pools?: Maybe<Array<Maybe<DPool>>>;
  DPoolIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numPools?: Maybe<Scalars["BigInt"]>;
  fundings?: Maybe<Array<Maybe<Funding>>>;
  FundingIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numFundings?: Maybe<Scalars["BigInt"]>;
  totalMPHEarned?: Maybe<Scalars["BigDecimal"]>;
  totalInterestByPool?: Maybe<Array<Maybe<FunderTotalInterest>>>;
  FunderTotalInterestIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  proof?: Maybe<Proof>;

  constructor(id?: string) {
    this.__typename = "Funder";
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<Funder> {
    var operationDocument = FunderDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (result && result.data != undefined && result.data.Funder != undefined) {
      let value = result.data.Funder;
      return toFunder(value);
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateFunderDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }
  _getSaveArgs(): FunderInput {
    return toFunderInput(this);
  }
}

export function toFunder(objInput: FunderInput): Funder {
  let obj: Funder = new Funder();
  obj.__typename = "Funder";
  obj.id = objInput.id;
  obj.address = objInput.address;
  obj.DPoolIDs = objInput.DPoolIDs;
  obj.FundingIDs = objInput.FundingIDs;
  obj.FunderTotalInterestIDs = objInput.FunderTotalInterestIDs;
  return obj;
}

export function toFunderInput(obj: Funder): FunderInput {
  let objInput: FunderInput = {
    __typename: "FunderInput",
    id: obj.id,
    address: obj.address,
    DPoolIDs: obj.DPoolIDs,
    FundingIDs: obj.FundingIDs,
    FunderTotalInterestIDs: obj.FunderTotalInterestIDs
  };
  return objInput;
}

export type FunderInput = {
  __typename?: "FunderInput";

  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  DPoolIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numPools?: Maybe<Scalars["BigInt"]>;
  FundingIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numFundings?: Maybe<Scalars["BigInt"]>;
  totalMPHEarned?: Maybe<Scalars["BigDecimal"]>;
  FunderTotalInterestIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export class FunderTotalInterest {
  __typename?: "FunderTotalInterest";
  id?: Maybe<Scalars["ID"]>;
  funder?: Maybe<Funder>;
  FunderID?: Maybe<Scalars["String"]>;
  pool?: Maybe<DPool>;
  DPoolID?: Maybe<Scalars["String"]>;
  totalDeficitFunded?: Maybe<Scalars["BigDecimal"]>;
  totalHistoricalDeficitFunded?: Maybe<Scalars["BigDecimal"]>;
  totalInterestEarned?: Maybe<Scalars["BigDecimal"]>;
  totalHistoricalInterestEarned?: Maybe<Scalars["BigDecimal"]>;
  totalRecordedFundedDepositAmount?: Maybe<Scalars["BigDecimal"]>;
  proof?: Maybe<Proof>;

  constructor(id?: string) {
    this.__typename = "FunderTotalInterest";
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<FunderTotalInterest> {
    var operationDocument = FunderTotalInterestDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (
      result &&
      result.data != undefined &&
      result.data.FunderTotalInterest != undefined
    ) {
      let value = result.data.FunderTotalInterest;
      return toFunderTotalInterest(value);
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateFunderTotalInterestDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }
  _getSaveArgs(): FunderTotalInterestInput {
    return toFunderTotalInterestInput(this);
  }
}

export function toFunderTotalInterest(
  objInput: FunderTotalInterestInput
): FunderTotalInterest {
  let obj: FunderTotalInterest = new FunderTotalInterest();
  obj.__typename = "FunderTotalInterest";
  obj.id = objInput.id;
  obj.FunderID = parseString(objInput.FunderID);
  obj.DPoolID = parseString(objInput.DPoolID);
  return obj;
}

export function toFunderTotalInterestInput(
  obj: FunderTotalInterest
): FunderTotalInterestInput {
  let objInput: FunderTotalInterestInput = {
    __typename: "FunderTotalInterestInput",
    id: obj.id,
    FunderID: parseString(obj.FunderID),
    DPoolID: parseString(obj.DPoolID)
  };
  return objInput;
}

export type FunderTotalInterestInput = {
  __typename?: "FunderTotalInterestInput";

  id?: Maybe<Scalars["ID"]>;
  FunderID?: Maybe<Scalars["String"]>;
  DPoolID?: Maybe<Scalars["String"]>;
  totalDeficitFunded?: Maybe<Scalars["BigDecimal"]>;
  totalHistoricalDeficitFunded?: Maybe<Scalars["BigDecimal"]>;
  totalInterestEarned?: Maybe<Scalars["BigDecimal"]>;
  totalHistoricalInterestEarned?: Maybe<Scalars["BigDecimal"]>;
  totalRecordedFundedDepositAmount?: Maybe<Scalars["BigDecimal"]>;
};

export class Funding {
  __typename?: "Funding";
  id?: Maybe<Scalars["ID"]>;
  nftID?: Maybe<Scalars["BigInt"]>;
  funder?: Maybe<Funder>;
  FunderID?: Maybe<Scalars["String"]>;
  pool?: Maybe<DPool>;
  DPoolID?: Maybe<Scalars["String"]>;
  fromDepositID?: Maybe<Scalars["BigInt"]>;
  toDepositID?: Maybe<Scalars["BigInt"]>;
  active?: Maybe<Scalars["Boolean"]>;
  recordedFundedDepositAmount?: Maybe<Scalars["BigDecimal"]>;
  recordedMoneyMarketIncomeIndex?: Maybe<Scalars["BigInt"]>;
  initialFundedDepositAmount?: Maybe<Scalars["BigDecimal"]>;
  fundedDeficitAmount?: Maybe<Scalars["BigDecimal"]>;
  totalInterestEarned?: Maybe<Scalars["BigDecimal"]>;
  creationTimestamp?: Maybe<Scalars["BigInt"]>;
  mphRewardEarned?: Maybe<Scalars["BigDecimal"]>;
  refundAmount?: Maybe<Scalars["BigDecimal"]>;
  proof?: Maybe<Proof>;

  constructor(id?: string) {
    this.__typename = "Funding";
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<Funding> {
    var operationDocument = FundingDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (
      result &&
      result.data != undefined &&
      result.data.Funding != undefined
    ) {
      let value = result.data.Funding;
      return toFunding(value);
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateFundingDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }
  _getSaveArgs(): FundingInput {
    return toFundingInput(this);
  }
}

export function toFunding(objInput: FundingInput): Funding {
  let obj: Funding = new Funding();
  obj.__typename = "Funding";
  obj.id = objInput.id;
  obj.FunderID = parseString(objInput.FunderID);
  obj.DPoolID = parseString(objInput.DPoolID);
  obj.active = objInput.active;
  return obj;
}

export function toFundingInput(obj: Funding): FundingInput {
  let objInput: FundingInput = {
    __typename: "FundingInput",
    id: obj.id,
    FunderID: parseString(obj.FunderID),
    DPoolID: parseString(obj.DPoolID),
    active: obj.active
  };
  return objInput;
}

export type FundingInput = {
  __typename?: "FundingInput";

  id?: Maybe<Scalars["ID"]>;
  nftID?: Maybe<Scalars["BigInt"]>;
  FunderID?: Maybe<Scalars["String"]>;
  DPoolID?: Maybe<Scalars["String"]>;
  fromDepositID?: Maybe<Scalars["BigInt"]>;
  toDepositID?: Maybe<Scalars["BigInt"]>;
  active?: Maybe<Scalars["Boolean"]>;
  recordedFundedDepositAmount?: Maybe<Scalars["BigDecimal"]>;
  recordedMoneyMarketIncomeIndex?: Maybe<Scalars["BigInt"]>;
  initialFundedDepositAmount?: Maybe<Scalars["BigDecimal"]>;
  fundedDeficitAmount?: Maybe<Scalars["BigDecimal"]>;
  totalInterestEarned?: Maybe<Scalars["BigDecimal"]>;
  creationTimestamp?: Maybe<Scalars["BigInt"]>;
  mphRewardEarned?: Maybe<Scalars["BigDecimal"]>;
  refundAmount?: Maybe<Scalars["BigDecimal"]>;
};

export class MPH {
  __typename?: "MPH";
  id?: Maybe<Scalars["ID"]>;
  totalHistoricalReward?: Maybe<Scalars["BigDecimal"]>;
  rewardPerSecond?: Maybe<Scalars["BigDecimal"]>;
  rewardPerMPHPerSecond?: Maybe<Scalars["BigDecimal"]>;
  proof?: Maybe<Proof>;

  constructor(id?: string) {
    this.__typename = "MPH";
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<MPH> {
    var operationDocument = MPHDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (result && result.data != undefined && result.data.MPH != undefined) {
      let value = result.data.MPH;
      return toMPH(value);
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateMPHDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }
  _getSaveArgs(): MPHInput {
    return toMPHInput(this);
  }
}

export function toMPH(objInput: MPHInput): MPH {
  let obj: MPH = new MPH();
  obj.__typename = "MPH";
  obj.id = objInput.id;
  return obj;
}

export function toMPHInput(obj: MPH): MPHInput {
  let objInput: MPHInput = {
    __typename: "MPHInput",
    id: obj.id
  };
  return objInput;
}

export class MPHHolder {
  __typename?: "MPHHolder";
  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  totalHistoricalReward?: Maybe<Scalars["BigDecimal"]>;
  proof?: Maybe<Proof>;

  constructor(id?: string) {
    this.__typename = "MPHHolder";
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<MPHHolder> {
    var operationDocument = MPHHolderDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (
      result &&
      result.data != undefined &&
      result.data.MPHHolder != undefined
    ) {
      let value = result.data.MPHHolder;
      return toMPHHolder(value);
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateMPHHolderDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }
  _getSaveArgs(): MPHHolderInput {
    return toMPHHolderInput(this);
  }
}

export function toMPHHolder(objInput: MPHHolderInput): MPHHolder {
  let obj: MPHHolder = new MPHHolder();
  obj.__typename = "MPHHolder";
  obj.id = objInput.id;
  obj.address = objInput.address;
  return obj;
}

export function toMPHHolderInput(obj: MPHHolder): MPHHolderInput {
  let objInput: MPHHolderInput = {
    __typename: "MPHHolderInput",
    id: obj.id,
    address: obj.address
  };
  return objInput;
}

export type MPHHolderInput = {
  __typename?: "MPHHolderInput";

  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  totalHistoricalReward?: Maybe<Scalars["BigDecimal"]>;
};

export type MPHInput = {
  __typename?: "MPHInput";

  id?: Maybe<Scalars["ID"]>;
  totalHistoricalReward?: Maybe<Scalars["BigDecimal"]>;
  rewardPerSecond?: Maybe<Scalars["BigDecimal"]>;
  rewardPerMPHPerSecond?: Maybe<Scalars["BigDecimal"]>;
};

export class Mutation {
  __typename?: "Mutation";
  UpdateDPoolList?: Maybe<Scalars["Boolean"]>;
  UpdateDPool?: Maybe<Scalars["Boolean"]>;
  UpdateUser?: Maybe<Scalars["Boolean"]>;
  UpdateUserTotalDeposit?: Maybe<Scalars["Boolean"]>;
  UpdateDeposit?: Maybe<Scalars["Boolean"]>;
  UpdateFunder?: Maybe<Scalars["Boolean"]>;
  UpdateFunderTotalInterest?: Maybe<Scalars["Boolean"]>;
  UpdateFunding?: Maybe<Scalars["Boolean"]>;
  UpdateMPHHolder?: Maybe<Scalars["Boolean"]>;
  UpdateMPH?: Maybe<Scalars["Boolean"]>;
  UpdateVest?: Maybe<Scalars["Boolean"]>;
  UpdateFractionalDeposit?: Maybe<Scalars["Boolean"]>;
}

export type MutationUpdateDPoolListArgs = {
  input: DPoolListInput;
};

export type MutationUpdateDPoolArgs = {
  input: DPoolInput;
};

export type MutationUpdateUserArgs = {
  input: UserInput;
};

export type MutationUpdateUserTotalDepositArgs = {
  input: UserTotalDepositInput;
};

export type MutationUpdateDepositArgs = {
  input: DepositInput;
};

export type MutationUpdateFunderArgs = {
  input: FunderInput;
};

export type MutationUpdateFunderTotalInterestArgs = {
  input: FunderTotalInterestInput;
};

export type MutationUpdateFundingArgs = {
  input: FundingInput;
};

export type MutationUpdateMPHHolderArgs = {
  input: MPHHolderInput;
};

export type MutationUpdateMPHArgs = {
  input: MPHInput;
};

export type MutationUpdateVestArgs = {
  input: VestInput;
};

export type MutationUpdateFractionalDepositArgs = {
  input: FractionalDepositInput;
};

export class Proof {
  __typename?: "Proof";
  root?: Maybe<Scalars["String"]>;
  proof?: Maybe<Scalars["String"]>;
}

export class Query {
  __typename?: "Query";
  DPoolList: DPoolList;
  DPoolLists: Array<Maybe<DPoolList>>;
  DPoolListSearch: Array<Maybe<DPoolList>>;
  DPool: DPool;
  DPools: Array<Maybe<DPool>>;
  DPoolSearch: Array<Maybe<DPool>>;
  User: User;
  Users: Array<Maybe<User>>;
  UserSearch: Array<Maybe<User>>;
  UserTotalDeposit: UserTotalDeposit;
  UserTotalDeposits: Array<Maybe<UserTotalDeposit>>;
  UserTotalDepositSearch: Array<Maybe<UserTotalDeposit>>;
  Deposit: Deposit;
  Deposits: Array<Maybe<Deposit>>;
  DepositSearch: Array<Maybe<Deposit>>;
  Funder: Funder;
  Funders: Array<Maybe<Funder>>;
  FunderSearch: Array<Maybe<Funder>>;
  FunderTotalInterest: FunderTotalInterest;
  FunderTotalInterests: Array<Maybe<FunderTotalInterest>>;
  FunderTotalInterestSearch: Array<Maybe<FunderTotalInterest>>;
  Funding: Funding;
  Fundings: Array<Maybe<Funding>>;
  FundingSearch: Array<Maybe<Funding>>;
  MPHHolder: MPHHolder;
  MPHHolders: Array<Maybe<MPHHolder>>;
  MPHHolderSearch: Array<Maybe<MPHHolder>>;
  MPH: MPH;
  MPHs: Array<Maybe<MPH>>;
  MPHSearch: Array<Maybe<MPH>>;
  Vest: Vest;
  Vests: Array<Maybe<Vest>>;
  VestSearch: Array<Maybe<Vest>>;
  FractionalDeposit: FractionalDeposit;
  FractionalDeposits: Array<Maybe<FractionalDeposit>>;
  FractionalDepositSearch: Array<Maybe<FractionalDeposit>>;
}

export type QueryDPoolListArgs = {
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryDPoolListsArgs = {
  where?: Maybe<Scalars["String"]>;
  order_by?: Maybe<Scalars["String"]>;
  asc?: Maybe<Scalars["Boolean"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryDPoolListSearchArgs = {
  queryText: Scalars["String"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryDPoolArgs = {
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryDPoolsArgs = {
  where?: Maybe<Scalars["String"]>;
  order_by?: Maybe<Scalars["String"]>;
  asc?: Maybe<Scalars["Boolean"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryDPoolSearchArgs = {
  queryText: Scalars["String"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryUsersArgs = {
  where?: Maybe<Scalars["String"]>;
  order_by?: Maybe<Scalars["String"]>;
  asc?: Maybe<Scalars["Boolean"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryUserSearchArgs = {
  queryText: Scalars["String"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryUserTotalDepositArgs = {
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryUserTotalDepositsArgs = {
  where?: Maybe<Scalars["String"]>;
  order_by?: Maybe<Scalars["String"]>;
  asc?: Maybe<Scalars["Boolean"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryUserTotalDepositSearchArgs = {
  queryText: Scalars["String"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryDepositArgs = {
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryDepositsArgs = {
  where?: Maybe<Scalars["String"]>;
  order_by?: Maybe<Scalars["String"]>;
  asc?: Maybe<Scalars["Boolean"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryDepositSearchArgs = {
  queryText: Scalars["String"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryFunderArgs = {
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryFundersArgs = {
  where?: Maybe<Scalars["String"]>;
  order_by?: Maybe<Scalars["String"]>;
  asc?: Maybe<Scalars["Boolean"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryFunderSearchArgs = {
  queryText: Scalars["String"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryFunderTotalInterestArgs = {
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryFunderTotalInterestsArgs = {
  where?: Maybe<Scalars["String"]>;
  order_by?: Maybe<Scalars["String"]>;
  asc?: Maybe<Scalars["Boolean"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryFunderTotalInterestSearchArgs = {
  queryText: Scalars["String"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryFundingArgs = {
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryFundingsArgs = {
  where?: Maybe<Scalars["String"]>;
  order_by?: Maybe<Scalars["String"]>;
  asc?: Maybe<Scalars["Boolean"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryFundingSearchArgs = {
  queryText: Scalars["String"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryMPHHolderArgs = {
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryMPHHoldersArgs = {
  where?: Maybe<Scalars["String"]>;
  order_by?: Maybe<Scalars["String"]>;
  asc?: Maybe<Scalars["Boolean"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryMPHHolderSearchArgs = {
  queryText: Scalars["String"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryMPHArgs = {
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryMPHsArgs = {
  where?: Maybe<Scalars["String"]>;
  order_by?: Maybe<Scalars["String"]>;
  asc?: Maybe<Scalars["Boolean"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryMPHSearchArgs = {
  queryText: Scalars["String"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryVestArgs = {
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryVestsArgs = {
  where?: Maybe<Scalars["String"]>;
  order_by?: Maybe<Scalars["String"]>;
  asc?: Maybe<Scalars["Boolean"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryVestSearchArgs = {
  queryText: Scalars["String"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryFractionalDepositArgs = {
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryFractionalDepositsArgs = {
  where?: Maybe<Scalars["String"]>;
  order_by?: Maybe<Scalars["String"]>;
  asc?: Maybe<Scalars["Boolean"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryFractionalDepositSearchArgs = {
  queryText: Scalars["String"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export class User {
  __typename?: "User";
  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  pools?: Maybe<Array<Maybe<DPool>>>;
  DPoolIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numPools?: Maybe<Scalars["BigInt"]>;
  deposits?: Maybe<Array<Maybe<Deposit>>>;
  DepositIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numDeposits?: Maybe<Scalars["BigInt"]>;
  numActiveDeposits?: Maybe<Scalars["BigInt"]>;
  totalDepositByPool?: Maybe<Array<Maybe<UserTotalDeposit>>>;
  UserTotalDepositIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  totalMPHEarned?: Maybe<Scalars["BigDecimal"]>;
  totalMPHPaidBack?: Maybe<Scalars["BigDecimal"]>;
  proof?: Maybe<Proof>;

  constructor(id?: string) {
    this.__typename = "User";
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<User> {
    var operationDocument = UserDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (result && result.data != undefined && result.data.User != undefined) {
      let value = result.data.User;
      return toUser(value);
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateUserDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }
  _getSaveArgs(): UserInput {
    return toUserInput(this);
  }
}

export function toUser(objInput: UserInput): User {
  let obj: User = new User();
  obj.__typename = "User";
  obj.id = objInput.id;
  obj.address = objInput.address;
  obj.DPoolIDs = objInput.DPoolIDs;
  obj.DepositIDs = objInput.DepositIDs;
  obj.UserTotalDepositIDs = objInput.UserTotalDepositIDs;
  return obj;
}

export function toUserInput(obj: User): UserInput {
  let objInput: UserInput = {
    __typename: "UserInput",
    id: obj.id,
    address: obj.address,
    DPoolIDs: obj.DPoolIDs,
    DepositIDs: obj.DepositIDs,
    UserTotalDepositIDs: obj.UserTotalDepositIDs
  };
  return objInput;
}

export type UserInput = {
  __typename?: "UserInput";

  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  DPoolIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numPools?: Maybe<Scalars["BigInt"]>;
  DepositIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numDeposits?: Maybe<Scalars["BigInt"]>;
  numActiveDeposits?: Maybe<Scalars["BigInt"]>;
  UserTotalDepositIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  totalMPHEarned?: Maybe<Scalars["BigDecimal"]>;
  totalMPHPaidBack?: Maybe<Scalars["BigDecimal"]>;
};

export class UserTotalDeposit {
  __typename?: "UserTotalDeposit";
  id?: Maybe<Scalars["ID"]>;
  user?: Maybe<User>;
  UserID?: Maybe<Scalars["String"]>;
  pool?: Maybe<DPool>;
  DPoolID?: Maybe<Scalars["String"]>;
  totalActiveDeposit?: Maybe<Scalars["BigDecimal"]>;
  totalHistoricalDeposit?: Maybe<Scalars["BigDecimal"]>;
  totalInterestEarned?: Maybe<Scalars["BigDecimal"]>;
  totalHistoricalInterestEarned?: Maybe<Scalars["BigDecimal"]>;
  proof?: Maybe<Proof>;

  constructor(id?: string) {
    this.__typename = "UserTotalDeposit";
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<UserTotalDeposit> {
    var operationDocument = UserTotalDepositDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (
      result &&
      result.data != undefined &&
      result.data.UserTotalDeposit != undefined
    ) {
      let value = result.data.UserTotalDeposit;
      return toUserTotalDeposit(value);
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateUserTotalDepositDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }
  _getSaveArgs(): UserTotalDepositInput {
    return toUserTotalDepositInput(this);
  }
}

export function toUserTotalDeposit(
  objInput: UserTotalDepositInput
): UserTotalDeposit {
  let obj: UserTotalDeposit = new UserTotalDeposit();
  obj.__typename = "UserTotalDeposit";
  obj.id = objInput.id;
  obj.UserID = parseString(objInput.UserID);
  obj.DPoolID = parseString(objInput.DPoolID);
  return obj;
}

export function toUserTotalDepositInput(
  obj: UserTotalDeposit
): UserTotalDepositInput {
  let objInput: UserTotalDepositInput = {
    __typename: "UserTotalDepositInput",
    id: obj.id,
    UserID: parseString(obj.UserID),
    DPoolID: parseString(obj.DPoolID)
  };
  return objInput;
}

export type UserTotalDepositInput = {
  __typename?: "UserTotalDepositInput";

  id?: Maybe<Scalars["ID"]>;
  UserID?: Maybe<Scalars["String"]>;
  DPoolID?: Maybe<Scalars["String"]>;
  totalActiveDeposit?: Maybe<Scalars["BigDecimal"]>;
  totalHistoricalDeposit?: Maybe<Scalars["BigDecimal"]>;
  totalInterestEarned?: Maybe<Scalars["BigDecimal"]>;
  totalHistoricalInterestEarned?: Maybe<Scalars["BigDecimal"]>;
};

export class Vest {
  __typename?: "Vest";
  id?: Maybe<Scalars["ID"]>;
  index?: Maybe<Scalars["BigInt"]>;
  user?: Maybe<Scalars["String"]>;
  amount?: Maybe<Scalars["BigDecimal"]>;
  vestPeriodInSeconds?: Maybe<Scalars["BigInt"]>;
  creationTimestamp?: Maybe<Scalars["BigInt"]>;
  withdrawnAmount?: Maybe<Scalars["BigDecimal"]>;
  proof?: Maybe<Proof>;

  constructor(id?: string) {
    this.__typename = "Vest";
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<Vest> {
    var operationDocument = VestDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (result && result.data != undefined && result.data.Vest != undefined) {
      let value = result.data.Vest;
      return toVest(value);
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateVestDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }
  _getSaveArgs(): VestInput {
    return toVestInput(this);
  }
}

export function toVest(objInput: VestInput): Vest {
  let obj: Vest = new Vest();
  obj.__typename = "Vest";
  obj.id = objInput.id;
  obj.user = parseString(objInput.user);
  return obj;
}

export function toVestInput(obj: Vest): VestInput {
  let objInput: VestInput = {
    __typename: "VestInput",
    id: obj.id,
    user: parseString(obj.user)
  };
  return objInput;
}

export type VestInput = {
  __typename?: "VestInput";

  id?: Maybe<Scalars["ID"]>;
  index?: Maybe<Scalars["BigInt"]>;
  user?: Maybe<Scalars["String"]>;
  amount?: Maybe<Scalars["BigDecimal"]>;
  vestPeriodInSeconds?: Maybe<Scalars["BigInt"]>;
  creationTimestamp?: Maybe<Scalars["BigInt"]>;
  withdrawnAmount?: Maybe<Scalars["BigDecimal"]>;
};

export type DPoolListQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type DPoolListQuery = { __typename?: "Query" } & {
  DPoolList: { __typename?: "DPoolList" } & Pick<DPoolList, "id" | "DPoolIDs">;
};

export type UpdateDPoolListMutationVariables = Exact<{
  input: DPoolListInput;
}>;

export type UpdateDPoolListMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "UpdateDPoolList"
>;

export type DPoolQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type DPoolQuery = { __typename?: "Query" } & {
  DPool: { __typename?: "DPool" } & Pick<
    DPool,
    | "id"
    | "address"
    | "moneyMarket"
    | "stablecoin"
    | "interestModel"
    | "UserIDs"
    | "DepositIDs"
    | "FunderIDs"
    | "FundingIDs"
  >;
};

export type UpdateDPoolMutationVariables = Exact<{
  input: DPoolInput;
}>;

export type UpdateDPoolMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "UpdateDPool"
>;

export type UserQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type UserQuery = { __typename?: "Query" } & {
  User: { __typename?: "User" } & Pick<
    User,
    "id" | "address" | "DPoolIDs" | "DepositIDs" | "UserTotalDepositIDs"
  >;
};

export type UpdateUserMutationVariables = Exact<{
  input: UserInput;
}>;

export type UpdateUserMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "UpdateUser"
>;

export type UserTotalDepositQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type UserTotalDepositQuery = { __typename?: "Query" } & {
  UserTotalDeposit: { __typename?: "UserTotalDeposit" } & Pick<
    UserTotalDeposit,
    "id" | "UserID" | "DPoolID"
  >;
};

export type UpdateUserTotalDepositMutationVariables = Exact<{
  input: UserTotalDepositInput;
}>;

export type UpdateUserTotalDepositMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "UpdateUserTotalDeposit"
>;

export type DepositQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type DepositQuery = { __typename?: "Query" } & {
  Deposit: { __typename?: "Deposit" } & Pick<
    Deposit,
    "id" | "UserID" | "DPoolID" | "active"
  >;
};

export type UpdateDepositMutationVariables = Exact<{
  input: DepositInput;
}>;

export type UpdateDepositMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "UpdateDeposit"
>;

export type FunderQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type FunderQuery = { __typename?: "Query" } & {
  Funder: { __typename?: "Funder" } & Pick<
    Funder,
    "id" | "address" | "DPoolIDs" | "FundingIDs" | "FunderTotalInterestIDs"
  >;
};

export type UpdateFunderMutationVariables = Exact<{
  input: FunderInput;
}>;

export type UpdateFunderMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "UpdateFunder"
>;

export type FunderTotalInterestQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type FunderTotalInterestQuery = { __typename?: "Query" } & {
  FunderTotalInterest: { __typename?: "FunderTotalInterest" } & Pick<
    FunderTotalInterest,
    "id" | "FunderID" | "DPoolID"
  >;
};

export type UpdateFunderTotalInterestMutationVariables = Exact<{
  input: FunderTotalInterestInput;
}>;

export type UpdateFunderTotalInterestMutation = {
  __typename?: "Mutation";
} & Pick<Mutation, "UpdateFunderTotalInterest">;

export type FundingQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type FundingQuery = { __typename?: "Query" } & {
  Funding: { __typename?: "Funding" } & Pick<
    Funding,
    "id" | "FunderID" | "DPoolID" | "active"
  >;
};

export type UpdateFundingMutationVariables = Exact<{
  input: FundingInput;
}>;

export type UpdateFundingMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "UpdateFunding"
>;

export type MPHHolderQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type MPHHolderQuery = { __typename?: "Query" } & {
  MPHHolder: { __typename?: "MPHHolder" } & Pick<MPHHolder, "id" | "address">;
};

export type UpdateMPHHolderMutationVariables = Exact<{
  input: MPHHolderInput;
}>;

export type UpdateMPHHolderMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "UpdateMPHHolder"
>;

export type MPHQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type MPHQuery = { __typename?: "Query" } & {
  MPH: { __typename?: "MPH" } & Pick<MPH, "id">;
};

export type UpdateMPHMutationVariables = Exact<{
  input: MPHInput;
}>;

export type UpdateMPHMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "UpdateMPH"
>;

export type VestQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type VestQuery = { __typename?: "Query" } & {
  Vest: { __typename?: "Vest" } & Pick<Vest, "id" | "user">;
};

export type UpdateVestMutationVariables = Exact<{
  input: VestInput;
}>;

export type UpdateVestMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "UpdateVest"
>;

export type FractionalDepositQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type FractionalDepositQuery = { __typename?: "Query" } & {
  FractionalDeposit: { __typename?: "FractionalDeposit" } & Pick<
    FractionalDeposit,
    | "id"
    | "address"
    | "zeroCouponBondAddress"
    | "ownerAddress"
    | "active"
    | "DepositID"
  >;
};

export type UpdateFractionalDepositMutationVariables = Exact<{
  input: FractionalDepositInput;
}>;

export type UpdateFractionalDepositMutation = {
  __typename?: "Mutation";
} & Pick<Mutation, "UpdateFractionalDeposit">;

export const DPoolListDocument: DocumentNode<
  DPoolListQuery,
  DPoolListQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "DPoolList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prove" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "DPoolList" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "prove" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prove" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "DPoolIDs" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const UpdateDPoolListDocument: DocumentNode<
  UpdateDPoolListMutation,
  UpdateDPoolListMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateDPoolList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "DPoolListInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "UpdateDPoolList" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ]
          }
        ]
      }
    }
  ]
};
export const DPoolDocument: DocumentNode<DPoolQuery, DPoolQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "DPool" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prove" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "DPool" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "prove" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prove" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "address" } },
                { kind: "Field", name: { kind: "Name", value: "moneyMarket" } },
                { kind: "Field", name: { kind: "Name", value: "stablecoin" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "interestModel" }
                },
                { kind: "Field", name: { kind: "Name", value: "UserIDs" } },
                { kind: "Field", name: { kind: "Name", value: "DepositIDs" } },
                { kind: "Field", name: { kind: "Name", value: "FunderIDs" } },
                { kind: "Field", name: { kind: "Name", value: "FundingIDs" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const UpdateDPoolDocument: DocumentNode<
  UpdateDPoolMutation,
  UpdateDPoolMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateDPool" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "DPoolInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "UpdateDPool" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ]
          }
        ]
      }
    }
  ]
};
export const UserDocument: DocumentNode<UserQuery, UserQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "User" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prove" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "User" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "prove" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prove" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "address" } },
                { kind: "Field", name: { kind: "Name", value: "DPoolIDs" } },
                { kind: "Field", name: { kind: "Name", value: "DepositIDs" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "UserTotalDepositIDs" }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const UpdateUserDocument: DocumentNode<
  UpdateUserMutation,
  UpdateUserMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UserInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "UpdateUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ]
          }
        ]
      }
    }
  ]
};
export const UserTotalDepositDocument: DocumentNode<
  UserTotalDepositQuery,
  UserTotalDepositQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "UserTotalDeposit" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prove" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "UserTotalDeposit" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "prove" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prove" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "UserID" } },
                { kind: "Field", name: { kind: "Name", value: "DPoolID" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const UpdateUserTotalDepositDocument: DocumentNode<
  UpdateUserTotalDepositMutation,
  UpdateUserTotalDepositMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateUserTotalDeposit" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UserTotalDepositInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "UpdateUserTotalDeposit" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ]
          }
        ]
      }
    }
  ]
};
export const DepositDocument: DocumentNode<
  DepositQuery,
  DepositQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Deposit" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prove" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "Deposit" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "prove" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prove" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "UserID" } },
                { kind: "Field", name: { kind: "Name", value: "DPoolID" } },
                { kind: "Field", name: { kind: "Name", value: "active" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const UpdateDepositDocument: DocumentNode<
  UpdateDepositMutation,
  UpdateDepositMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateDeposit" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "DepositInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "UpdateDeposit" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ]
          }
        ]
      }
    }
  ]
};
export const FunderDocument: DocumentNode<FunderQuery, FunderQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Funder" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prove" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "Funder" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "prove" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prove" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "address" } },
                { kind: "Field", name: { kind: "Name", value: "DPoolIDs" } },
                { kind: "Field", name: { kind: "Name", value: "FundingIDs" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "FunderTotalInterestIDs" }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const UpdateFunderDocument: DocumentNode<
  UpdateFunderMutation,
  UpdateFunderMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateFunder" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FunderInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "UpdateFunder" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ]
          }
        ]
      }
    }
  ]
};
export const FunderTotalInterestDocument: DocumentNode<
  FunderTotalInterestQuery,
  FunderTotalInterestQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FunderTotalInterest" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prove" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "FunderTotalInterest" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "prove" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prove" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "FunderID" } },
                { kind: "Field", name: { kind: "Name", value: "DPoolID" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const UpdateFunderTotalInterestDocument: DocumentNode<
  UpdateFunderTotalInterestMutation,
  UpdateFunderTotalInterestMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateFunderTotalInterest" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FunderTotalInterestInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "UpdateFunderTotalInterest" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ]
          }
        ]
      }
    }
  ]
};
export const FundingDocument: DocumentNode<
  FundingQuery,
  FundingQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Funding" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prove" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "Funding" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "prove" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prove" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "FunderID" } },
                { kind: "Field", name: { kind: "Name", value: "DPoolID" } },
                { kind: "Field", name: { kind: "Name", value: "active" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const UpdateFundingDocument: DocumentNode<
  UpdateFundingMutation,
  UpdateFundingMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateFunding" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FundingInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "UpdateFunding" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ]
          }
        ]
      }
    }
  ]
};
export const MPHHolderDocument: DocumentNode<
  MPHHolderQuery,
  MPHHolderQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "MPHHolder" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prove" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "MPHHolder" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "prove" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prove" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "address" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const UpdateMPHHolderDocument: DocumentNode<
  UpdateMPHHolderMutation,
  UpdateMPHHolderMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateMPHHolder" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "MPHHolderInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "UpdateMPHHolder" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ]
          }
        ]
      }
    }
  ]
};
export const MPHDocument: DocumentNode<MPHQuery, MPHQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "MPH" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prove" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "MPH" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "prove" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prove" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const UpdateMPHDocument: DocumentNode<
  UpdateMPHMutation,
  UpdateMPHMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateMPH" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "MPHInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "UpdateMPH" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ]
          }
        ]
      }
    }
  ]
};
export const VestDocument: DocumentNode<VestQuery, VestQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Vest" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prove" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "Vest" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "prove" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prove" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "user" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const UpdateVestDocument: DocumentNode<
  UpdateVestMutation,
  UpdateVestMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateVest" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "VestInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "UpdateVest" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ]
          }
        ]
      }
    }
  ]
};
export const FractionalDepositDocument: DocumentNode<
  FractionalDepositQuery,
  FractionalDepositQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FractionalDeposit" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prove" }
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "FractionalDeposit" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "prove" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prove" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "address" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "zeroCouponBondAddress" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "ownerAddress" }
                },
                { kind: "Field", name: { kind: "Name", value: "active" } },
                { kind: "Field", name: { kind: "Name", value: "DepositID" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const UpdateFractionalDepositDocument: DocumentNode<
  UpdateFractionalDepositMutation,
  UpdateFractionalDepositMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateFractionalDeposit" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FractionalDepositInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "UpdateFractionalDeposit" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ]
          }
        ]
      }
    }
  ]
};
type GqlFetchResult<TData = any> = {
  data?: TData;
  errors?: Error[];
};
function gqlFetch<TData = any, TVariables = Record<string, any>>(
  operation: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
): GqlFetchResult<TData>;
function gqlFetch<TData = any, TVariables = Record<string, any>>(
  operation: DocumentNode,
  variables?: TVariables
): GqlFetchResult<TData> {
  //return useGQLFetch(operation, variables);
  return useFetch<TData, TVariables>(operation, variables);
}
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
}
function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}
function lowercaseFirstLetter(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
