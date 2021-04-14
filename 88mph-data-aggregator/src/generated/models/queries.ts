import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";
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
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
};

export interface Query {
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
}

export type QueryDPoolListArgs = {
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryDPoolListsArgs = {
  where?: Maybe<Scalars["String"]>;
  order_by?: Maybe<Scalars["String"]>;
  asc?: Maybe<Scalars["Int"]>;
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
  asc?: Maybe<Scalars["Int"]>;
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
  asc?: Maybe<Scalars["Int"]>;
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
  asc?: Maybe<Scalars["Int"]>;
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
  asc?: Maybe<Scalars["Int"]>;
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
  asc?: Maybe<Scalars["Int"]>;
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
  asc?: Maybe<Scalars["Int"]>;
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
  asc?: Maybe<Scalars["Int"]>;
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
  asc?: Maybe<Scalars["Int"]>;
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
  asc?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  prove?: Maybe<Scalars["Boolean"]>;
};

export type QueryMPHSearchArgs = {
  queryText: Scalars["String"];
  prove?: Maybe<Scalars["Boolean"]>;
};

export class Mutation {
  __typename?: "Mutation";
  updateDPoolList?: Maybe<Scalars["Boolean"]>;
  updateDPool?: Maybe<Scalars["Boolean"]>;
  updateUser?: Maybe<Scalars["Boolean"]>;
  updateUserTotalDeposit?: Maybe<Scalars["Boolean"]>;
  updateDeposit?: Maybe<Scalars["Boolean"]>;
  updateFunder?: Maybe<Scalars["Boolean"]>;
  updateFunderTotalInterest?: Maybe<Scalars["Boolean"]>;
  updateFunding?: Maybe<Scalars["Boolean"]>;
  updateMPHHolder?: Maybe<Scalars["Boolean"]>;
  updateMPH?: Maybe<Scalars["Boolean"]>;
}

export type MutationupdateDPoolListArgs = {
  input: DPoolListInput;
};

export type MutationupdateDPoolArgs = {
  input: DPoolInput;
};

export type MutationupdateUserArgs = {
  input: UserInput;
};

export type MutationupdateUserTotalDepositArgs = {
  input: UserTotalDepositInput;
};

export type MutationupdateDepositArgs = {
  input: DepositInput;
};

export type MutationupdateFunderArgs = {
  input: FunderInput;
};

export type MutationupdateFunderTotalInterestArgs = {
  input: FunderTotalInterestInput;
};

export type MutationupdateFundingArgs = {
  input: FundingInput;
};

export type MutationupdateMPHHolderArgs = {
  input: MPHHolderInput;
};

export type MutationupdateMPHArgs = {
  input: MPHInput;
};

export class DPoolList {
  __typename?: "DPoolList";
  id?: Maybe<Scalars["ID"]>;
  pools?: Maybe<Array<Maybe<DPool>>>;
  numPools?: Maybe<Scalars["Int"]>;
  numUsers?: Maybe<Scalars["Int"]>;
  numActiveUsers?: Maybe<Scalars["Int"]>;
  numFunders?: Maybe<Scalars["Int"]>;
  proof?: Maybe<Proof>;
}

export type DPoolListInput = {
  id?: Maybe<Scalars["ID"]>;
  DPoolIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numPools?: Maybe<Scalars["Int"]>;
  numUsers?: Maybe<Scalars["Int"]>;
  numActiveUsers?: Maybe<Scalars["Int"]>;
  numFunders?: Maybe<Scalars["Int"]>;
};

export class DPool {
  __typename?: "DPool";
  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  moneyMarket?: Maybe<Scalars["String"]>;
  stablecoin?: Maybe<Scalars["String"]>;
  interestModel?: Maybe<Scalars["String"]>;
  users?: Maybe<Array<Maybe<User>>>;
  numUsers?: Maybe<Scalars["Int"]>;
  deposits?: Maybe<Array<Maybe<Deposit>>>;
  numDeposits?: Maybe<Scalars["Int"]>;
  numActiveDeposits?: Maybe<Scalars["String"]>;
  totalActiveDeposit?: Maybe<Scalars["String"]>;
  totalHistoricalDeposit?: Maybe<Scalars["String"]>;
  totalInterestPaid?: Maybe<Scalars["String"]>;
  unfundedDepositAmount?: Maybe<Scalars["String"]>;
  funders?: Maybe<Array<Maybe<Funder>>>;
  numFunders?: Maybe<Scalars["String"]>;
  fundings?: Maybe<Array<Maybe<Funding>>>;
  numFundings?: Maybe<Scalars["String"]>;
  MinDepositPeriod?: Maybe<Scalars["Float"]>;
  MaxDepositPeriod?: Maybe<Scalars["Float"]>;
  MinDepositAmount?: Maybe<Scalars["Float"]>;
  MaxDepositAmount?: Maybe<Scalars["Float"]>;
  mphMintingMultiplier?: Maybe<Scalars["Float"]>;
  mphDepositorRewardMultiplier?: Maybe<Scalars["Float"]>;
  mphFunderRewardMultiplier?: Maybe<Scalars["Float"]>;
  oneYearInterestRate?: Maybe<Scalars["Float"]>;
  surplus?: Maybe<Scalars["String"]>;
  moneyMarketIncomeIndex?: Maybe<Scalars["String"]>;
  oracleInterestRate?: Maybe<Scalars["String"]>;
  proof?: Maybe<Proof>;
}

export type DPoolInput = {
  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  moneyMarket?: Maybe<Scalars["String"]>;
  stablecoin?: Maybe<Scalars["String"]>;
  interestModel?: Maybe<Scalars["String"]>;
  UserIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numUsers?: Maybe<Scalars["Int"]>;
  DepositIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numDeposits?: Maybe<Scalars["Int"]>;
  numActiveDeposits?: Maybe<Scalars["String"]>;
  totalActiveDeposit?: Maybe<Scalars["String"]>;
  totalHistoricalDeposit?: Maybe<Scalars["String"]>;
  totalInterestPaid?: Maybe<Scalars["String"]>;
  unfundedDepositAmount?: Maybe<Scalars["String"]>;
  FunderIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numFunders?: Maybe<Scalars["String"]>;
  FundingIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numFundings?: Maybe<Scalars["String"]>;
  MinDepositPeriod?: Maybe<Scalars["Float"]>;
  MaxDepositPeriod?: Maybe<Scalars["Float"]>;
  MinDepositAmount?: Maybe<Scalars["Float"]>;
  MaxDepositAmount?: Maybe<Scalars["Float"]>;
  mphMintingMultiplier?: Maybe<Scalars["Float"]>;
  mphDepositorRewardMultiplier?: Maybe<Scalars["Float"]>;
  mphFunderRewardMultiplier?: Maybe<Scalars["Float"]>;
  oneYearInterestRate?: Maybe<Scalars["Float"]>;
  surplus?: Maybe<Scalars["String"]>;
  moneyMarketIncomeIndex?: Maybe<Scalars["String"]>;
  oracleInterestRate?: Maybe<Scalars["String"]>;
};

export class User {
  __typename?: "User";
  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  pools?: Maybe<Array<Maybe<DPool>>>;
  numPools?: Maybe<Scalars["String"]>;
  deposits?: Maybe<Array<Maybe<Deposit>>>;
  numDeposits?: Maybe<Scalars["String"]>;
  numActiveDeposits?: Maybe<Scalars["String"]>;
  totalDepositByPool?: Maybe<Array<Maybe<UserTotalDeposit>>>;
  totalMPHEarned?: Maybe<Scalars["String"]>;
  totalMPHPaidBack?: Maybe<Scalars["String"]>;
  proof?: Maybe<Proof>;
}

export type UserInput = {
  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  DPoolIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numPools?: Maybe<Scalars["String"]>;
  DepositIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numDeposits?: Maybe<Scalars["String"]>;
  numActiveDeposits?: Maybe<Scalars["String"]>;
  UserTotalDepositIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  totalMPHEarned?: Maybe<Scalars["String"]>;
  totalMPHPaidBack?: Maybe<Scalars["String"]>;
};

export class UserTotalDeposit {
  __typename?: "UserTotalDeposit";
  id?: Maybe<Scalars["ID"]>;
  user?: Maybe<User>;
  pool?: Maybe<DPool>;
  totalActiveDeposit?: Maybe<Scalars["String"]>;
  totalHistoricalDeposit?: Maybe<Scalars["String"]>;
  totalInterestEarned?: Maybe<Scalars["String"]>;
  totalHistoricalInterestEarned?: Maybe<Scalars["String"]>;
  proof?: Maybe<Proof>;
}

export type UserTotalDepositInput = {
  id?: Maybe<Scalars["ID"]>;
  UserID?: Maybe<Scalars["String"]>;
  DPoolID?: Maybe<Scalars["String"]>;
  totalActiveDeposit?: Maybe<Scalars["String"]>;
  totalHistoricalDeposit?: Maybe<Scalars["String"]>;
  totalInterestEarned?: Maybe<Scalars["String"]>;
  totalHistoricalInterestEarned?: Maybe<Scalars["String"]>;
};

export class Deposit {
  __typename?: "Deposit";
  id?: Maybe<Scalars["ID"]>;
  nftID?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  pool?: Maybe<DPool>;
  amount?: Maybe<Scalars["String"]>;
  maturationTimestamp?: Maybe<Scalars["String"]>;
  active?: Maybe<Scalars["Boolean"]>;
  depositTimestamp?: Maybe<Scalars["String"]>;
  interestEarned?: Maybe<Scalars["String"]>;
  fundingID?: Maybe<Scalars["String"]>;
  mintMPHAmount?: Maybe<Scalars["String"]>;
  takeBackMPHAmount?: Maybe<Scalars["String"]>;
  initialMoneyMarketIncomeIndex?: Maybe<Scalars["String"]>;
  proof?: Maybe<Proof>;
}

export type DepositInput = {
  id?: Maybe<Scalars["ID"]>;
  nftID?: Maybe<Scalars["String"]>;
  UserID?: Maybe<Scalars["String"]>;
  DPoolID?: Maybe<Scalars["String"]>;
  amount?: Maybe<Scalars["String"]>;
  maturationTimestamp?: Maybe<Scalars["String"]>;
  active?: Maybe<Scalars["Boolean"]>;
  depositTimestamp?: Maybe<Scalars["String"]>;
  interestEarned?: Maybe<Scalars["String"]>;
  fundingID?: Maybe<Scalars["String"]>;
  mintMPHAmount?: Maybe<Scalars["String"]>;
  takeBackMPHAmount?: Maybe<Scalars["String"]>;
  initialMoneyMarketIncomeIndex?: Maybe<Scalars["String"]>;
};

export type FunderInput = {
  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  DPoolIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numPools?: Maybe<Scalars["String"]>;
  FundingIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numFundings?: Maybe<Scalars["String"]>;
  totalMPHEarned?: Maybe<Scalars["String"]>;
  FunderTotalInterestIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export class FunderTotalInterest {
  __typename?: "FunderTotalInterest";
  id?: Maybe<Scalars["ID"]>;
  funder?: Maybe<Funder>;
  pool?: Maybe<DPool>;
  totalDeficitFunded?: Maybe<Scalars["String"]>;
  totalHistoricalDeficitFunded?: Maybe<Scalars["String"]>;
  totalInterestEarned?: Maybe<Scalars["String"]>;
  totalHistoricalInterestEarned?: Maybe<Scalars["String"]>;
  totalRecordedFundedDepositAmount?: Maybe<Scalars["String"]>;
  proof?: Maybe<Proof>;
}

export type FunderTotalInterestInput = {
  id?: Maybe<Scalars["ID"]>;
  FunderID?: Maybe<Scalars["String"]>;
  DPoolID?: Maybe<Scalars["String"]>;
  totalDeficitFunded?: Maybe<Scalars["String"]>;
  totalHistoricalDeficitFunded?: Maybe<Scalars["String"]>;
  totalInterestEarned?: Maybe<Scalars["String"]>;
  totalHistoricalInterestEarned?: Maybe<Scalars["String"]>;
  totalRecordedFundedDepositAmount?: Maybe<Scalars["String"]>;
};

export class Funding {
  __typename?: "Funding";
  id?: Maybe<Scalars["ID"]>;
  nftID?: Maybe<Scalars["String"]>;
  funder?: Maybe<Funder>;
  pool?: Maybe<DPool>;
  fromDepositID?: Maybe<Scalars["String"]>;
  toDepositID?: Maybe<Scalars["String"]>;
  active?: Maybe<Scalars["Boolean"]>;
  recordedFundedDepositAmount?: Maybe<Scalars["String"]>;
  recordedMoneyMarketIncomeIndex?: Maybe<Scalars["String"]>;
  initialFundedDepositAmount?: Maybe<Scalars["String"]>;
  fundedDeficitAmount?: Maybe<Scalars["String"]>;
  totalInterestEarned?: Maybe<Scalars["String"]>;
  mintMPHAmount?: Maybe<Scalars["String"]>;
  proof?: Maybe<Proof>;
}

export type FundingInput = {
  id?: Maybe<Scalars["ID"]>;
  nftID?: Maybe<Scalars["String"]>;
  FunderID?: Maybe<Scalars["String"]>;
  DPoolID?: Maybe<Scalars["String"]>;
  fromDepositID?: Maybe<Scalars["String"]>;
  toDepositID?: Maybe<Scalars["String"]>;
  active?: Maybe<Scalars["Boolean"]>;
  recordedFundedDepositAmount?: Maybe<Scalars["String"]>;
  recordedMoneyMarketIncomeIndex?: Maybe<Scalars["String"]>;
  initialFundedDepositAmount?: Maybe<Scalars["String"]>;
  fundedDeficitAmount?: Maybe<Scalars["String"]>;
  totalInterestEarned?: Maybe<Scalars["String"]>;
  mintMPHAmount?: Maybe<Scalars["String"]>;
};

export class MPHHolder {
  __typename?: "MPHHolder";
  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  mphBalance?: Maybe<Scalars["String"]>;
  stakedMPHBalance?: Maybe<Scalars["String"]>;
  totalHistoricalReward?: Maybe<Scalars["String"]>;
  proof?: Maybe<Proof>;
}

export type MPHHolderInput = {
  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  mphBalance?: Maybe<Scalars["String"]>;
  stakedMPHBalance?: Maybe<Scalars["String"]>;
  totalHistoricalReward?: Maybe<Scalars["String"]>;
};

export class MPH {
  __typename?: "MPH";
  id?: Maybe<Scalars["ID"]>;
  totalSupply?: Maybe<Scalars["String"]>;
  totalStakedMPHBalance?: Maybe<Scalars["String"]>;
  totalHistoricalReward?: Maybe<Scalars["String"]>;
  rewardPerSecond?: Maybe<Scalars["String"]>;
  rewardPerMPHPerSecond?: Maybe<Scalars["String"]>;
  proof?: Maybe<Proof>;
}

export type MPHInput = {
  id?: Maybe<Scalars["ID"]>;
  totalSupply?: Maybe<Scalars["String"]>;
  totalStakedMPHBalance?: Maybe<Scalars["String"]>;
  totalHistoricalReward?: Maybe<Scalars["String"]>;
  rewardPerSecond?: Maybe<Scalars["String"]>;
  rewardPerMPHPerSecond?: Maybe<Scalars["String"]>;
};

export class Proof {
  __typename?: "Proof";
  root?: Maybe<Scalars["String"]>;
  proof?: Maybe<Scalars["String"]>;
}

export class Funder {
  __typename?: "Funder";
  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  pools?: Maybe<Array<Maybe<DPool>>>;
  numPools?: Maybe<Scalars["String"]>;
  fundings?: Maybe<Array<Maybe<Funding>>>;
  numFundings?: Maybe<Scalars["String"]>;
  totalMPHEarned?: Maybe<Scalars["String"]>;
  totalInterestByPool?: Maybe<Array<Maybe<FunderTotalInterest>>>;
  proof?: Maybe<Proof>;
}

export type userQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type userQuery = { __typename?: "Query" } & {
  User: { __typename?: "User" } & Pick<
    User,
    "totalMPHEarned" | "totalMPHPaidBack"
  > & {
      pools?: Maybe<
        Array<
          Maybe<
            { __typename?: "DPool" } & Pick<
              DPool,
              "id" | "address" | "mphDepositorRewardMultiplier"
            >
          >
        >
      >;
      totalDepositByPool?: Maybe<
        Array<
          Maybe<
            { __typename?: "UserTotalDeposit" } & Pick<
              UserTotalDeposit,
              "totalActiveDeposit" | "totalInterestEarned"
            > & {
                pool?: Maybe<
                  { __typename?: "DPool" } & Pick<
                    DPool,
                    "address" | "stablecoin"
                  >
                >;
              }
          >
        >
      >;
    };
};

export type dpoolsQueryVariables = Exact<{ [key: string]: never }>;

export type dpoolsQuery = { __typename?: "Query" } & {
  DPools: Array<
    Maybe<
      { __typename?: "DPool" } & Pick<
        DPool,
        | "id"
        | "address"
        | "totalActiveDeposit"
        | "oneYearInterestRate"
        | "mphDepositorRewardMultiplier"
      >
    >
  >;
};

export type funderQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type funderQuery = { __typename?: "Query" } & {
  Funder: { __typename?: "Funder" } & Pick<Funder, "totalMPHEarned"> & {
      pools?: Maybe<
        Array<
          Maybe<
            { __typename?: "DPool" } & Pick<DPool, "id" | "address"> & {
                fundings?: Maybe<
                  Array<
                    Maybe<
                      { __typename?: "Funding" } & Pick<
                        Funding,
                        | "id"
                        | "fromDepositID"
                        | "toDepositID"
                        | "nftID"
                        | "recordedFundedDepositAmount"
                        | "recordedMoneyMarketIncomeIndex"
                        | "initialFundedDepositAmount"
                        | "fundedDeficitAmount"
                        | "totalInterestEarned"
                      > & {
                          pool?: Maybe<
                            { __typename?: "DPool" } & Pick<
                              DPool,
                              | "address"
                              | "oracleInterestRate"
                              | "moneyMarketIncomeIndex"
                            >
                          >;
                        }
                    >
                  >
                >;
              }
          >
        >
      >;
      totalInterestByPool?: Maybe<
        Array<
          Maybe<
            { __typename?: "FunderTotalInterest" } & Pick<
              FunderTotalInterest,
              | "totalDeficitFunded"
              | "totalRecordedFundedDepositAmount"
              | "totalInterestEarned"
            > & {
                pool?: Maybe<
                  { __typename?: "DPool" } & Pick<DPool, "id" | "stablecoin">
                >;
              }
          >
        >
      >;
    };
};

export type dpoolsLatestQueryVariables = Exact<{ [key: string]: never }>;

export type dpoolsLatestQuery = { __typename?: "Query" } & {
  DPools: Array<
    Maybe<
      { __typename?: "DPool" } & Pick<
        DPool,
        | "id"
        | "address"
        | "surplus"
        | "unfundedDepositAmount"
        | "oneYearInterestRate"
        | "oracleInterestRate"
        | "mphFunderRewardMultiplier"
      > & {
          deposits?: Maybe<
            Array<
              Maybe<{ __typename?: "Deposit" } & Pick<Deposit, "nftID" | "id">>
            >
          >;
        }
    >
  >;
};

export type dpoolsLatestDepositsQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type dpoolsLatestDepositsQuery = { __typename?: "Query" } & {
  DPool: { __typename?: "DPool" } & Pick<
    DPool,
    "id" | "moneyMarketIncomeIndex"
  > & {
      deposits?: Maybe<
        Array<
          Maybe<
            { __typename?: "Deposit" } & Pick<
              Deposit,
              | "nftID"
              | "amount"
              | "active"
              | "maturationTimestamp"
              | "interestEarned"
              | "initialMoneyMarketIncomeIndex"
            >
          >
        >
      >;
    };
};

export type DPoolListQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type DPoolListQuery = { __typename?: "Query" } & {
  DPoolList: { __typename?: "DPoolList" } & Pick<
    DPoolList,
    "id" | "numPools" | "numUsers" | "numActiveUsers" | "numFunders"
  >;
};

export type UpdateDPoolListMutationVariables = Exact<{
  input: DPoolListInput;
}>;

export type UpdateDPoolListMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "updateDPoolList"
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
    | "numUsers"
    | "numDeposits"
    | "numActiveDeposits"
    | "totalActiveDeposit"
    | "totalHistoricalDeposit"
    | "totalInterestPaid"
    | "unfundedDepositAmount"
    | "numFunders"
    | "numFundings"
    | "MinDepositPeriod"
    | "MaxDepositPeriod"
    | "MinDepositAmount"
    | "MaxDepositAmount"
    | "mphMintingMultiplier"
    | "mphDepositorRewardMultiplier"
    | "mphFunderRewardMultiplier"
    | "oneYearInterestRate"
    | "surplus"
    | "moneyMarketIncomeIndex"
    | "oracleInterestRate"
  >;
};

export type UpdateDPoolMutationVariables = Exact<{
  input: DPoolInput;
}>;

export type UpdateDPoolMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "updateDPool"
>;

export type UserQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type UserQuery = { __typename?: "Query" } & {
  User: { __typename?: "User" } & Pick<
    User,
    | "id"
    | "address"
    | "numPools"
    | "numDeposits"
    | "numActiveDeposits"
    | "totalMPHEarned"
    | "totalMPHPaidBack"
  >;
};

export type UpdateUserMutationVariables = Exact<{
  input: UserInput;
}>;

export type UpdateUserMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "updateUser"
>;

export type UserTotalDepositQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type UserTotalDepositQuery = { __typename?: "Query" } & {
  UserTotalDeposit: { __typename?: "UserTotalDeposit" } & Pick<
    UserTotalDeposit,
    | "id"
    | "totalActiveDeposit"
    | "totalHistoricalDeposit"
    | "totalInterestEarned"
    | "totalHistoricalInterestEarned"
  >;
};

export type UpdateUserTotalDepositMutationVariables = Exact<{
  input: UserTotalDepositInput;
}>;

export type UpdateUserTotalDepositMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "updateUserTotalDeposit"
>;

export type DepositQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type DepositQuery = { __typename?: "Query" } & {
  Deposit: { __typename?: "Deposit" } & Pick<
    Deposit,
    | "id"
    | "nftID"
    | "amount"
    | "maturationTimestamp"
    | "active"
    | "depositTimestamp"
    | "interestEarned"
    | "fundingID"
    | "mintMPHAmount"
    | "takeBackMPHAmount"
    | "initialMoneyMarketIncomeIndex"
  >;
};

export type UpdateDepositMutationVariables = Exact<{
  input: DepositInput;
}>;

export type UpdateDepositMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "updateDeposit"
>;

export type FunderQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type FunderQuery = { __typename?: "Query" } & {
  Funder: { __typename?: "Funder" } & Pick<
    Funder,
    "id" | "address" | "numPools" | "numFundings" | "totalMPHEarned"
  >;
};

export type UpdateFunderMutationVariables = Exact<{
  input: FunderInput;
}>;

export type UpdateFunderMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "updateFunder"
>;

export type FunderTotalInterestQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type FunderTotalInterestQuery = { __typename?: "Query" } & {
  FunderTotalInterest: { __typename?: "FunderTotalInterest" } & Pick<
    FunderTotalInterest,
    | "id"
    | "totalDeficitFunded"
    | "totalHistoricalDeficitFunded"
    | "totalInterestEarned"
    | "totalHistoricalInterestEarned"
    | "totalRecordedFundedDepositAmount"
  >;
};

export type UpdateFunderTotalInterestMutationVariables = Exact<{
  input: FunderTotalInterestInput;
}>;

export type UpdateFunderTotalInterestMutation = {
  __typename?: "Mutation";
} & Pick<Mutation, "updateFunderTotalInterest">;

export type FundingQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type FundingQuery = { __typename?: "Query" } & {
  Funding: { __typename?: "Funding" } & Pick<
    Funding,
    | "id"
    | "nftID"
    | "fromDepositID"
    | "toDepositID"
    | "active"
    | "recordedFundedDepositAmount"
    | "recordedMoneyMarketIncomeIndex"
    | "initialFundedDepositAmount"
    | "fundedDeficitAmount"
    | "totalInterestEarned"
    | "mintMPHAmount"
  >;
};

export type UpdateFundingMutationVariables = Exact<{
  input: FundingInput;
}>;

export type UpdateFundingMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "updateFunding"
>;

export type MPHHolderQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type MPHHolderQuery = { __typename?: "Query" } & {
  MPHHolder: { __typename?: "MPHHolder" } & Pick<
    MPHHolder,
    | "id"
    | "address"
    | "mphBalance"
    | "stakedMPHBalance"
    | "totalHistoricalReward"
  >;
};

export type UpdateMPHHolderMutationVariables = Exact<{
  input: MPHHolderInput;
}>;

export type UpdateMPHHolderMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "updateMPHHolder"
>;

export type MPHQueryVariables = Exact<{
  id: Scalars["ID"];
  prove?: Maybe<Scalars["Boolean"]>;
}>;

export type MPHQuery = { __typename?: "Query" } & {
  MPH: { __typename?: "MPH" } & Pick<
    MPH,
    | "id"
    | "totalSupply"
    | "totalStakedMPHBalance"
    | "totalHistoricalReward"
    | "rewardPerSecond"
    | "rewardPerMPHPerSecond"
  >;
};

export type UpdateMPHMutationVariables = Exact<{
  input: MPHInput;
}>;

export type UpdateMPHMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "updateMPH"
>;

export const userDocument = gql`
  query user($id: ID!) {
    User(id: $id) {
      totalMPHEarned
      totalMPHPaidBack
      pools {
        id
        address
        mphDepositorRewardMultiplier
      }
      totalDepositByPool {
        pool {
          address
          stablecoin
        }
        totalActiveDeposit
        totalInterestEarned
      }
    }
  }
`;
export const dpoolsDocument = gql`
  query dpools {
    DPools {
      id
      address
      totalActiveDeposit
      oneYearInterestRate
      mphDepositorRewardMultiplier
    }
  }
`;
export const funderDocument = gql`
  query funder($id: ID!) {
    Funder(id: $id) {
      totalMPHEarned
      pools {
        id
        address
        fundings {
          id
          pool {
            address
            oracleInterestRate
            moneyMarketIncomeIndex
          }
          fromDepositID
          toDepositID
          nftID
          recordedFundedDepositAmount
          recordedMoneyMarketIncomeIndex
          initialFundedDepositAmount
          fundedDeficitAmount
          totalInterestEarned
        }
      }
      totalInterestByPool {
        pool {
          id
          stablecoin
        }
        totalDeficitFunded
        totalRecordedFundedDepositAmount
        totalInterestEarned
      }
    }
  }
`;
export const dpoolsLatestDocument = gql`
  query dpoolsLatest {
    DPools {
      id
      address
      surplus
      unfundedDepositAmount
      oneYearInterestRate
      oracleInterestRate
      mphFunderRewardMultiplier
      deposits {
        nftID
        id
      }
    }
  }
`;
export const dpoolsLatestDepositsDocument = gql`
  query dpoolsLatestDeposits($id: ID!) {
    DPool(id: $id) {
      id
      moneyMarketIncomeIndex
      deposits {
        nftID
        amount
        active
        maturationTimestamp
        interestEarned
        initialMoneyMarketIncomeIndex
      }
    }
  }
`;
export const DPoolListDocument = gql`
  query DPoolList($id: ID!, $prove: Boolean) {
    DPoolList(id: $id, prove: $prove) {
      id
      numPools
      numUsers
      numActiveUsers
      numFunders
    }
  }
`;
export const UpdateDPoolListDocument = gql`
  mutation UpdateDPoolList($input: DPoolListInput!) {
    updateDPoolList(input: $input)
  }
`;
export const DPoolDocument = gql`
  query DPool($id: ID!, $prove: Boolean) {
    DPool(id: $id, prove: $prove) {
      id
      address
      moneyMarket
      stablecoin
      interestModel
      numUsers
      numDeposits
      numActiveDeposits
      totalActiveDeposit
      totalHistoricalDeposit
      totalInterestPaid
      unfundedDepositAmount
      numFunders
      numFundings
      MinDepositPeriod
      MaxDepositPeriod
      MinDepositAmount
      MaxDepositAmount
      mphMintingMultiplier
      mphDepositorRewardMultiplier
      mphFunderRewardMultiplier
      oneYearInterestRate
      surplus
      moneyMarketIncomeIndex
      oracleInterestRate
    }
  }
`;
export const UpdateDPoolDocument = gql`
  mutation UpdateDPool($input: DPoolInput!) {
    updateDPool(input: $input)
  }
`;
export const UserDocument = gql`
  query User($id: ID!, $prove: Boolean) {
    User(id: $id, prove: $prove) {
      id
      address
      numPools
      numDeposits
      numActiveDeposits
      totalMPHEarned
      totalMPHPaidBack
    }
  }
`;
export const UpdateUserDocument = gql`
  mutation UpdateUser($input: UserInput!) {
    updateUser(input: $input)
  }
`;
export const UserTotalDepositDocument = gql`
  query UserTotalDeposit($id: ID!, $prove: Boolean) {
    UserTotalDeposit(id: $id, prove: $prove) {
      id
      totalActiveDeposit
      totalHistoricalDeposit
      totalInterestEarned
      totalHistoricalInterestEarned
    }
  }
`;
export const UpdateUserTotalDepositDocument = gql`
  mutation UpdateUserTotalDeposit($input: UserTotalDepositInput!) {
    updateUserTotalDeposit(input: $input)
  }
`;
export const DepositDocument = gql`
  query Deposit($id: ID!, $prove: Boolean) {
    Deposit(id: $id, prove: $prove) {
      id
      nftID
      amount
      maturationTimestamp
      active
      depositTimestamp
      interestEarned
      fundingID
      mintMPHAmount
      takeBackMPHAmount
      initialMoneyMarketIncomeIndex
    }
  }
`;
export const UpdateDepositDocument = gql`
  mutation UpdateDeposit($input: DepositInput!) {
    updateDeposit(input: $input)
  }
`;
export const FunderDocument = gql`
  query Funder($id: ID!, $prove: Boolean) {
    Funder(id: $id, prove: $prove) {
      id
      address
      numPools
      numFundings
      totalMPHEarned
    }
  }
`;
export const UpdateFunderDocument = gql`
  mutation UpdateFunder($input: FunderInput!) {
    updateFunder(input: $input)
  }
`;
export const FunderTotalInterestDocument = gql`
  query FunderTotalInterest($id: ID!, $prove: Boolean) {
    FunderTotalInterest(id: $id, prove: $prove) {
      id
      totalDeficitFunded
      totalHistoricalDeficitFunded
      totalInterestEarned
      totalHistoricalInterestEarned
      totalRecordedFundedDepositAmount
    }
  }
`;
export const UpdateFunderTotalInterestDocument = gql`
  mutation UpdateFunderTotalInterest($input: FunderTotalInterestInput!) {
    updateFunderTotalInterest(input: $input)
  }
`;
export const FundingDocument = gql`
  query Funding($id: ID!, $prove: Boolean) {
    Funding(id: $id, prove: $prove) {
      id
      nftID
      fromDepositID
      toDepositID
      active
      recordedFundedDepositAmount
      recordedMoneyMarketIncomeIndex
      initialFundedDepositAmount
      fundedDeficitAmount
      totalInterestEarned
      mintMPHAmount
    }
  }
`;
export const UpdateFundingDocument = gql`
  mutation UpdateFunding($input: FundingInput!) {
    updateFunding(input: $input)
  }
`;
export const MPHHolderDocument = gql`
  query MPHHolder($id: ID!, $prove: Boolean) {
    MPHHolder(id: $id, prove: $prove) {
      id
      address
      mphBalance
      stakedMPHBalance
      totalHistoricalReward
    }
  }
`;
export const UpdateMPHHolderDocument = gql`
  mutation UpdateMPHHolder($input: MPHHolderInput!) {
    updateMPHHolder(input: $input)
  }
`;
export const MPHDocument = gql`
  query MPH($id: ID!, $prove: Boolean) {
    MPH(id: $id, prove: $prove) {
      id
      totalSupply
      totalStakedMPHBalance
      totalHistoricalReward
      rewardPerSecond
      rewardPerMPHPerSecond
    }
  }
`;
export const UpdateMPHDocument = gql`
  mutation UpdateMPH($input: MPHInput!) {
    updateMPH(input: $input)
  }
`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    user(
      variables: userQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<userQuery> {
      return withWrapper(() =>
        client.request<userQuery>(userDocument, variables, requestHeaders)
      );
    },
    dpools(
      variables?: dpoolsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<dpoolsQuery> {
      return withWrapper(() =>
        client.request<dpoolsQuery>(dpoolsDocument, variables, requestHeaders)
      );
    },
    funder(
      variables: funderQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<funderQuery> {
      return withWrapper(() =>
        client.request<funderQuery>(funderDocument, variables, requestHeaders)
      );
    },
    dpoolsLatest(
      variables?: dpoolsLatestQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<dpoolsLatestQuery> {
      return withWrapper(() =>
        client.request<dpoolsLatestQuery>(
          dpoolsLatestDocument,
          variables,
          requestHeaders
        )
      );
    },
    dpoolsLatestDeposits(
      variables: dpoolsLatestDepositsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<dpoolsLatestDepositsQuery> {
      return withWrapper(() =>
        client.request<dpoolsLatestDepositsQuery>(
          dpoolsLatestDepositsDocument,
          variables,
          requestHeaders
        )
      );
    },
    DPoolList(
      variables: DPoolListQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<DPoolListQuery> {
      return withWrapper(() =>
        client.request<DPoolListQuery>(
          DPoolListDocument,
          variables,
          requestHeaders
        )
      );
    },
    UpdateDPoolList(
      variables: UpdateDPoolListMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdateDPoolListMutation> {
      return withWrapper(() =>
        client.request<UpdateDPoolListMutation>(
          UpdateDPoolListDocument,
          variables,
          requestHeaders
        )
      );
    },
    DPool(
      variables: DPoolQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<DPoolQuery> {
      return withWrapper(() =>
        client.request<DPoolQuery>(DPoolDocument, variables, requestHeaders)
      );
    },
    UpdateDPool(
      variables: UpdateDPoolMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdateDPoolMutation> {
      return withWrapper(() =>
        client.request<UpdateDPoolMutation>(
          UpdateDPoolDocument,
          variables,
          requestHeaders
        )
      );
    },
    User(
      variables: UserQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UserQuery> {
      return withWrapper(() =>
        client.request<UserQuery>(UserDocument, variables, requestHeaders)
      );
    },
    UpdateUser(
      variables: UpdateUserMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdateUserMutation> {
      return withWrapper(() =>
        client.request<UpdateUserMutation>(
          UpdateUserDocument,
          variables,
          requestHeaders
        )
      );
    },
    UserTotalDeposit(
      variables: UserTotalDepositQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UserTotalDepositQuery> {
      return withWrapper(() =>
        client.request<UserTotalDepositQuery>(
          UserTotalDepositDocument,
          variables,
          requestHeaders
        )
      );
    },
    UpdateUserTotalDeposit(
      variables: UpdateUserTotalDepositMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdateUserTotalDepositMutation> {
      return withWrapper(() =>
        client.request<UpdateUserTotalDepositMutation>(
          UpdateUserTotalDepositDocument,
          variables,
          requestHeaders
        )
      );
    },
    Deposit(
      variables: DepositQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<DepositQuery> {
      return withWrapper(() =>
        client.request<DepositQuery>(DepositDocument, variables, requestHeaders)
      );
    },
    UpdateDeposit(
      variables: UpdateDepositMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdateDepositMutation> {
      return withWrapper(() =>
        client.request<UpdateDepositMutation>(
          UpdateDepositDocument,
          variables,
          requestHeaders
        )
      );
    },
    Funder(
      variables: FunderQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<FunderQuery> {
      return withWrapper(() =>
        client.request<FunderQuery>(FunderDocument, variables, requestHeaders)
      );
    },
    UpdateFunder(
      variables: UpdateFunderMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdateFunderMutation> {
      return withWrapper(() =>
        client.request<UpdateFunderMutation>(
          UpdateFunderDocument,
          variables,
          requestHeaders
        )
      );
    },
    FunderTotalInterest(
      variables: FunderTotalInterestQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<FunderTotalInterestQuery> {
      return withWrapper(() =>
        client.request<FunderTotalInterestQuery>(
          FunderTotalInterestDocument,
          variables,
          requestHeaders
        )
      );
    },
    UpdateFunderTotalInterest(
      variables: UpdateFunderTotalInterestMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdateFunderTotalInterestMutation> {
      return withWrapper(() =>
        client.request<UpdateFunderTotalInterestMutation>(
          UpdateFunderTotalInterestDocument,
          variables,
          requestHeaders
        )
      );
    },
    Funding(
      variables: FundingQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<FundingQuery> {
      return withWrapper(() =>
        client.request<FundingQuery>(FundingDocument, variables, requestHeaders)
      );
    },
    UpdateFunding(
      variables: UpdateFundingMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdateFundingMutation> {
      return withWrapper(() =>
        client.request<UpdateFundingMutation>(
          UpdateFundingDocument,
          variables,
          requestHeaders
        )
      );
    },
    MPHHolder(
      variables: MPHHolderQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<MPHHolderQuery> {
      return withWrapper(() =>
        client.request<MPHHolderQuery>(
          MPHHolderDocument,
          variables,
          requestHeaders
        )
      );
    },
    UpdateMPHHolder(
      variables: UpdateMPHHolderMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdateMPHHolderMutation> {
      return withWrapper(() =>
        client.request<UpdateMPHHolderMutation>(
          UpdateMPHHolderDocument,
          variables,
          requestHeaders
        )
      );
    },
    MPH(
      variables: MPHQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<MPHQuery> {
      return withWrapper(() =>
        client.request<MPHQuery>(MPHDocument, variables, requestHeaders)
      );
    },
    UpdateMPH(
      variables: UpdateMPHMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdateMPHMutation> {
      return withWrapper(() =>
        client.request<UpdateMPHMutation>(
          UpdateMPHDocument,
          variables,
          requestHeaders
        )
      );
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
