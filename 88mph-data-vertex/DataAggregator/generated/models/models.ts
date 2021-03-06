export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export class DPool {
  __typename?: 'DPool';
constructor(?id: string): this {  this.id = id }
load(id: string): this { return Load(this, id) }
save(): void {  Save(this) }
  id?: Maybe<Scalars['ID']>;
  String?: Maybe<Scalars['String']>;
  moneyMarket?: Maybe<Scalars['String']>;
  stablecoin?: Maybe<Scalars['String']>;
  interestModel?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
  numUsers?: Maybe<Scalars['String']>;
  deposits?: Maybe<Array<Maybe<Deposit>>>;
  numDeposits?: Maybe<Scalars['String']>;
  numActiveDeposits?: Maybe<Scalars['String']>;
  totalActiveDeposit?: Maybe<Scalars['String']>;
  totalHistoricalDeposit?: Maybe<Scalars['String']>;
  totalInterestPaid?: Maybe<Scalars['String']>;
  unfundedDepositAmount?: Maybe<Scalars['String']>;
  funders?: Maybe<Array<Maybe<Funder>>>;
  numFunders?: Maybe<Scalars['String']>;
  fundings?: Maybe<Array<Maybe<Funding>>>;
  numFundings?: Maybe<Scalars['String']>;
  MinDepositPeriod?: Maybe<Scalars['String']>;
  MaxDepositPeriod?: Maybe<Scalars['String']>;
  MinDepositAmount?: Maybe<Scalars['String']>;
  MaxDepositAmount?: Maybe<Scalars['String']>;
  mphMintingMultiplier?: Maybe<Scalars['String']>;
  mphDepositorRewardMultiplier?: Maybe<Scalars['String']>;
  mphFunderRewardMultiplier?: Maybe<Scalars['String']>;
  oneYearInterestRate?: Maybe<Scalars['String']>;
  surplus?: Maybe<Scalars['String']>;
  moneyMarketIncomeIndex?: Maybe<Scalars['String']>;
  oracleInterestRate?: Maybe<Scalars['String']>;
};

export class DPoolInput {
  id?: Maybe<Scalars['ID']>;
  String?: Maybe<Scalars['String']>;
  moneyMarket?: Maybe<Scalars['String']>;
  stablecoin?: Maybe<Scalars['String']>;
  interestModel?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
  numUsers?: Maybe<Scalars['String']>;
  deposits?: Maybe<Array<Maybe<Deposit>>>;
  numDeposits?: Maybe<Scalars['String']>;
  numActiveDeposits?: Maybe<Scalars['String']>;
  totalActiveDeposit?: Maybe<Scalars['String']>;
  totalHistoricalDeposit?: Maybe<Scalars['String']>;
  totalInterestPaid?: Maybe<Scalars['String']>;
  unfundedDepositAmount?: Maybe<Scalars['String']>;
  funders?: Maybe<Array<Maybe<Funder>>>;
  numFunders?: Maybe<Scalars['String']>;
  fundings?: Maybe<Array<Maybe<Funding>>>;
  numFundings?: Maybe<Scalars['String']>;
  MinDepositPeriod?: Maybe<Scalars['String']>;
  MaxDepositPeriod?: Maybe<Scalars['String']>;
  MinDepositAmount?: Maybe<Scalars['String']>;
  MaxDepositAmount?: Maybe<Scalars['String']>;
  mphMintingMultiplier?: Maybe<Scalars['String']>;
  mphDepositorRewardMultiplier?: Maybe<Scalars['String']>;
  mphFunderRewardMultiplier?: Maybe<Scalars['String']>;
  oneYearInterestRate?: Maybe<Scalars['String']>;
  surplus?: Maybe<Scalars['String']>;
  moneyMarketIncomeIndex?: Maybe<Scalars['String']>;
  oracleInterestRate?: Maybe<Scalars['String']>;
};

export class DPoolList {
  __typename?: 'DPoolList';
constructor(?id: string): this {  this.id = id }
load(id: string): this { return Load(this, id) }
save(): void {  Save(this) }
  id?: Maybe<Scalars['ID']>;
  pools?: Maybe<Array<Maybe<DPool>>>;
  numPools?: Maybe<Scalars['String']>;
  numUsers?: Maybe<Scalars['String']>;
  numActiveUsers?: Maybe<Scalars['String']>;
  numFunders?: Maybe<Scalars['String']>;
};

export class DPoolListInput {
  id?: Maybe<Scalars['ID']>;
  pools?: Maybe<Array<Maybe<DPool>>>;
  numPools?: Maybe<Scalars['String']>;
  numUsers?: Maybe<Scalars['String']>;
  numActiveUsers?: Maybe<Scalars['String']>;
  numFunders?: Maybe<Scalars['String']>;
};

export class Deposit {
  __typename?: 'Deposit';
constructor(?id: string): this {  this.id = id }
load(id: string): this { return Load(this, id) }
save(): void {  Save(this) }
  id?: Maybe<Scalars['ID']>;
  nftID?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  pool?: Maybe<DPool>;
  amount?: Maybe<Scalars['String']>;
  maturationTimestamp?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  depositTimestamp?: Maybe<Scalars['String']>;
  interestEarned?: Maybe<Scalars['String']>;
  fundingID?: Maybe<Scalars['String']>;
  mintMPHAmount?: Maybe<Scalars['String']>;
  takeBackMPHAmount?: Maybe<Scalars['String']>;
  initialMoneyMarketIncomeIndex?: Maybe<Scalars['String']>;
};

export class DepositInput {
  id?: Maybe<Scalars['ID']>;
  nftID?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  pool?: Maybe<DPool>;
  amount?: Maybe<Scalars['String']>;
  maturationTimestamp?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  depositTimestamp?: Maybe<Scalars['String']>;
  interestEarned?: Maybe<Scalars['String']>;
  fundingID?: Maybe<Scalars['String']>;
  mintMPHAmount?: Maybe<Scalars['String']>;
  takeBackMPHAmount?: Maybe<Scalars['String']>;
  initialMoneyMarketIncomeIndex?: Maybe<Scalars['String']>;
};

export class Funder {
  __typename?: 'Funder';
constructor(?id: string): this {  this.id = id }
load(id: string): this { return Load(this, id) }
save(): void {  Save(this) }
  id?: Maybe<Scalars['ID']>;
  String?: Maybe<Scalars['String']>;
  pools?: Maybe<Array<Maybe<DPool>>>;
  numPools?: Maybe<Scalars['String']>;
  fundings?: Maybe<Array<Maybe<Funding>>>;
  numFundings?: Maybe<Scalars['String']>;
  totalMPHEarned?: Maybe<Scalars['String']>;
  totalInterestByPool?: Maybe<Array<Maybe<FunderTotalInterest>>>;
};

export class FunderInput {
  id?: Maybe<Scalars['ID']>;
  String?: Maybe<Scalars['String']>;
  pools?: Maybe<Array<Maybe<DPool>>>;
  numPools?: Maybe<Scalars['String']>;
  fundings?: Maybe<Array<Maybe<Funding>>>;
  numFundings?: Maybe<Scalars['String']>;
  totalMPHEarned?: Maybe<Scalars['String']>;
  totalInterestByPool?: Maybe<Array<Maybe<FunderTotalInterest>>>;
};

export class FunderTotalInterest {
  __typename?: 'FunderTotalInterest';
constructor(?id: string): this {  this.id = id }
load(id: string): this { return Load(this, id) }
save(): void {  Save(this) }
  id?: Maybe<Scalars['ID']>;
  funder?: Maybe<Funder>;
  pool?: Maybe<DPool>;
  totalDeficitFunded?: Maybe<Scalars['String']>;
  totalHistoricalDeficitFunded?: Maybe<Scalars['String']>;
  totalInterestEarned?: Maybe<Scalars['String']>;
  totalHistoricalInterestEarned?: Maybe<Scalars['String']>;
  totalRecordedFundedDepositAmount?: Maybe<Scalars['String']>;
};

export class FunderTotalInterestInput {
  id?: Maybe<Scalars['ID']>;
  funder?: Maybe<Funder>;
  pool?: Maybe<DPool>;
  totalDeficitFunded?: Maybe<Scalars['String']>;
  totalHistoricalDeficitFunded?: Maybe<Scalars['String']>;
  totalInterestEarned?: Maybe<Scalars['String']>;
  totalHistoricalInterestEarned?: Maybe<Scalars['String']>;
  totalRecordedFundedDepositAmount?: Maybe<Scalars['String']>;
};

export class Funding {
  __typename?: 'Funding';
constructor(?id: string): this {  this.id = id }
load(id: string): this { return Load(this, id) }
save(): void {  Save(this) }
  id?: Maybe<Scalars['ID']>;
  nftID?: Maybe<Scalars['String']>;
  funder?: Maybe<Funder>;
  pool?: Maybe<DPool>;
  fromDepositID?: Maybe<Scalars['String']>;
  toDepositID?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  recordedFundedDepositAmount?: Maybe<Scalars['String']>;
  recordedMoneyMarketIncomeIndex?: Maybe<Scalars['String']>;
  initialFundedDepositAmount?: Maybe<Scalars['String']>;
  fundedDeficitAmount?: Maybe<Scalars['String']>;
  totalInterestEarned?: Maybe<Scalars['String']>;
  mintMPHAmount?: Maybe<Scalars['String']>;
};

export class FundingInput {
  id?: Maybe<Scalars['ID']>;
  nftID?: Maybe<Scalars['String']>;
  funder?: Maybe<Funder>;
  pool?: Maybe<DPool>;
  fromDepositID?: Maybe<Scalars['String']>;
  toDepositID?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  recordedFundedDepositAmount?: Maybe<Scalars['String']>;
  recordedMoneyMarketIncomeIndex?: Maybe<Scalars['String']>;
  initialFundedDepositAmount?: Maybe<Scalars['String']>;
  fundedDeficitAmount?: Maybe<Scalars['String']>;
  totalInterestEarned?: Maybe<Scalars['String']>;
  mintMPHAmount?: Maybe<Scalars['String']>;
};

export class MPH {
  __typename?: 'MPH';
constructor(?id: string): this {  this.id = id }
load(id: string): this { return Load(this, id) }
save(): void {  Save(this) }
  id?: Maybe<Scalars['ID']>;
  totalSupply?: Maybe<Scalars['String']>;
  totalStakedMPHBalance?: Maybe<Scalars['String']>;
  totalHistoricalReward?: Maybe<Scalars['String']>;
  rewardPerSecond?: Maybe<Scalars['String']>;
  rewardPerMPHPerSecond?: Maybe<Scalars['String']>;
};

export class MPHHolder {
  __typename?: 'MPHHolder';
constructor(?id: string): this {  this.id = id }
load(id: string): this { return Load(this, id) }
save(): void {  Save(this) }
  id?: Maybe<Scalars['ID']>;
  String?: Maybe<Scalars['String']>;
  mphBalance?: Maybe<Scalars['String']>;
  stakedMPHBalance?: Maybe<Scalars['String']>;
  totalHistoricalReward?: Maybe<Scalars['String']>;
};

export class MPHHolderInput {
  id?: Maybe<Scalars['ID']>;
  String?: Maybe<Scalars['String']>;
  mphBalance?: Maybe<Scalars['String']>;
  stakedMPHBalance?: Maybe<Scalars['String']>;
  totalHistoricalReward?: Maybe<Scalars['String']>;
};

export class MPHInput {
  id?: Maybe<Scalars['ID']>;
  totalSupply?: Maybe<Scalars['String']>;
  totalStakedMPHBalance?: Maybe<Scalars['String']>;
  totalHistoricalReward?: Maybe<Scalars['String']>;
  rewardPerSecond?: Maybe<Scalars['String']>;
  rewardPerMPHPerSecond?: Maybe<Scalars['String']>;
};

export class Mutation {
  __typename?: 'Mutation';
  putDPoolList?: Maybe<Scalars['Boolean']>;
  putDPool?: Maybe<Scalars['Boolean']>;
  putUser?: Maybe<Scalars['Boolean']>;
  putUserTotalDeposit?: Maybe<Scalars['Boolean']>;
  putDeposit?: Maybe<Scalars['Boolean']>;
  putFunder?: Maybe<Scalars['Boolean']>;
  putFunderTotalInterest?: Maybe<Scalars['Boolean']>;
  putFunding?: Maybe<Scalars['Boolean']>;
  putMPHHolder?: Maybe<Scalars['Boolean']>;
  putMPH?: Maybe<Scalars['Boolean']>;
};


export type MutationputDPoolListArgs = {
  input: DPoolListInput;
};


export type MutationputDPoolArgs = {
  input: DPoolInput;
};


export type MutationputUserArgs = {
  input: UserInput;
};


export type MutationputUserTotalDepositArgs = {
  input: UserTotalDepositInput;
};


export type MutationputDepositArgs = {
  input: DepositInput;
};


export type MutationputFunderArgs = {
  input: FunderInput;
};


export type MutationputFunderTotalInterestArgs = {
  input: FunderTotalInterestInput;
};


export type MutationputFundingArgs = {
  input: FundingInput;
};


export type MutationputMPHHolderArgs = {
  input: MPHHolderInput;
};


export type MutationputMPHArgs = {
  input: MPHInput;
};

export class Query {
  __typename?: 'Query';
  DPoolList: DPoolList;
  DPoolLists: Array<DPoolList>;
  DPool: DPool;
  DPools: Array<DPool>;
  User: User;
  Users: Array<User>;
  UserTotalDeposit: UserTotalDeposit;
  UserTotalDeposits: Array<UserTotalDeposit>;
  Deposit: Deposit;
  Deposits: Array<Deposit>;
  Funder: Funder;
  Funders: Array<Funder>;
  FunderTotalInterest: FunderTotalInterest;
  FunderTotalInterests: Array<FunderTotalInterest>;
  Funding: Funding;
  Fundings: Array<Funding>;
  MPHHolder: MPHHolder;
  MPHHolders: Array<MPHHolder>;
  MPH: MPH;
  MPHs: Array<MPH>;
};


export type QueryDPoolListArgs = {
  id: Scalars['ID'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryDPoolListsArgs = {
  queryString: Scalars['String'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryDPoolArgs = {
  id: Scalars['ID'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryDPoolsArgs = {
  queryString: Scalars['String'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryUsersArgs = {
  queryString: Scalars['String'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryUserTotalDepositArgs = {
  id: Scalars['ID'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryUserTotalDepositsArgs = {
  queryString: Scalars['String'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryDepositArgs = {
  id: Scalars['ID'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryDepositsArgs = {
  queryString: Scalars['String'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryFunderArgs = {
  id: Scalars['ID'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryFundersArgs = {
  queryString: Scalars['String'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryFunderTotalInterestArgs = {
  id: Scalars['ID'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryFunderTotalInterestsArgs = {
  queryString: Scalars['String'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryFundingArgs = {
  id: Scalars['ID'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryFundingsArgs = {
  queryString: Scalars['String'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryMPHHolderArgs = {
  id: Scalars['ID'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryMPHHoldersArgs = {
  queryString: Scalars['String'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryMPHArgs = {
  id: Scalars['ID'];
  prove?: Maybe<Scalars['Boolean']>;
};


export type QueryMPHsArgs = {
  queryString: Scalars['String'];
  prove?: Maybe<Scalars['Boolean']>;
};

export class User {
  __typename?: 'User';
constructor(?id: string): this {  this.id = id }
load(id: string): this { return Load(this, id) }
save(): void {  Save(this) }
  id?: Maybe<Scalars['ID']>;
  String?: Maybe<Scalars['String']>;
  pools?: Maybe<Array<Maybe<DPool>>>;
  numPools?: Maybe<Scalars['String']>;
  deposits?: Maybe<Array<Maybe<Deposit>>>;
  numDeposits?: Maybe<Scalars['String']>;
  numActiveDeposits?: Maybe<Scalars['String']>;
  totalDepositByPool?: Maybe<Array<Maybe<UserTotalDeposit>>>;
  totalMPHEarned?: Maybe<Scalars['String']>;
  totalMPHPaidBack?: Maybe<Scalars['String']>;
};

export class UserInput {
  id?: Maybe<Scalars['ID']>;
  String?: Maybe<Scalars['String']>;
  pools?: Maybe<Array<Maybe<DPool>>>;
  numPools?: Maybe<Scalars['String']>;
  deposits?: Maybe<Array<Maybe<Deposit>>>;
  numDeposits?: Maybe<Scalars['String']>;
  numActiveDeposits?: Maybe<Scalars['String']>;
  totalDepositByPool?: Maybe<Array<Maybe<UserTotalDeposit>>>;
  totalMPHEarned?: Maybe<Scalars['String']>;
  totalMPHPaidBack?: Maybe<Scalars['String']>;
};

export class UserTotalDeposit {
  __typename?: 'UserTotalDeposit';
constructor(?id: string): this {  this.id = id }
load(id: string): this { return Load(this, id) }
save(): void {  Save(this) }
  id?: Maybe<Scalars['ID']>;
  user?: Maybe<User>;
  pool?: Maybe<DPool>;
  totalActiveDeposit?: Maybe<Scalars['String']>;
  totalHistoricalDeposit?: Maybe<Scalars['String']>;
  totalInterestEarned?: Maybe<Scalars['String']>;
  totalHistoricalInterestEarned?: Maybe<Scalars['String']>;
};

export class UserTotalDepositInput {
  id?: Maybe<Scalars['ID']>;
  user?: Maybe<User>;
  pool?: Maybe<DPool>;
  totalActiveDeposit?: Maybe<Scalars['String']>;
  totalHistoricalDeposit?: Maybe<Scalars['String']>;
  totalInterestEarned?: Maybe<Scalars['String']>;
  totalHistoricalInterestEarned?: Maybe<Scalars['String']>;
};
