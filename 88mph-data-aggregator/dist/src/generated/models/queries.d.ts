import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
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
export declare type QueryDPoolListArgs = {
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryDPoolListsArgs = {
    where?: Maybe<Scalars["String"]>;
    order_by?: Maybe<Scalars["String"]>;
    asc?: Maybe<Scalars["Int"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryDPoolListSearchArgs = {
    queryText: Scalars["String"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryDPoolArgs = {
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryDPoolsArgs = {
    where?: Maybe<Scalars["String"]>;
    order_by?: Maybe<Scalars["String"]>;
    asc?: Maybe<Scalars["Int"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryDPoolSearchArgs = {
    queryText: Scalars["String"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryUserArgs = {
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryUsersArgs = {
    where?: Maybe<Scalars["String"]>;
    order_by?: Maybe<Scalars["String"]>;
    asc?: Maybe<Scalars["Int"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryUserSearchArgs = {
    queryText: Scalars["String"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryUserTotalDepositArgs = {
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryUserTotalDepositsArgs = {
    where?: Maybe<Scalars["String"]>;
    order_by?: Maybe<Scalars["String"]>;
    asc?: Maybe<Scalars["Int"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryUserTotalDepositSearchArgs = {
    queryText: Scalars["String"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryDepositArgs = {
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryDepositsArgs = {
    where?: Maybe<Scalars["String"]>;
    order_by?: Maybe<Scalars["String"]>;
    asc?: Maybe<Scalars["Int"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryDepositSearchArgs = {
    queryText: Scalars["String"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryFunderArgs = {
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryFundersArgs = {
    where?: Maybe<Scalars["String"]>;
    order_by?: Maybe<Scalars["String"]>;
    asc?: Maybe<Scalars["Int"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryFunderSearchArgs = {
    queryText: Scalars["String"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryFunderTotalInterestArgs = {
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryFunderTotalInterestsArgs = {
    where?: Maybe<Scalars["String"]>;
    order_by?: Maybe<Scalars["String"]>;
    asc?: Maybe<Scalars["Int"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryFunderTotalInterestSearchArgs = {
    queryText: Scalars["String"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryFundingArgs = {
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryFundingsArgs = {
    where?: Maybe<Scalars["String"]>;
    order_by?: Maybe<Scalars["String"]>;
    asc?: Maybe<Scalars["Int"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryFundingSearchArgs = {
    queryText: Scalars["String"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryMPHHolderArgs = {
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryMPHHoldersArgs = {
    where?: Maybe<Scalars["String"]>;
    order_by?: Maybe<Scalars["String"]>;
    asc?: Maybe<Scalars["Int"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryMPHHolderSearchArgs = {
    queryText: Scalars["String"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryMPHArgs = {
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryMPHsArgs = {
    where?: Maybe<Scalars["String"]>;
    order_by?: Maybe<Scalars["String"]>;
    asc?: Maybe<Scalars["Int"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare type QueryMPHSearchArgs = {
    queryText: Scalars["String"];
    prove?: Maybe<Scalars["Boolean"]>;
};
export declare class Mutation {
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
export declare type MutationupdateDPoolListArgs = {
    input: DPoolListInput;
};
export declare type MutationupdateDPoolArgs = {
    input: DPoolInput;
};
export declare type MutationupdateUserArgs = {
    input: UserInput;
};
export declare type MutationupdateUserTotalDepositArgs = {
    input: UserTotalDepositInput;
};
export declare type MutationupdateDepositArgs = {
    input: DepositInput;
};
export declare type MutationupdateFunderArgs = {
    input: FunderInput;
};
export declare type MutationupdateFunderTotalInterestArgs = {
    input: FunderTotalInterestInput;
};
export declare type MutationupdateFundingArgs = {
    input: FundingInput;
};
export declare type MutationupdateMPHHolderArgs = {
    input: MPHHolderInput;
};
export declare type MutationupdateMPHArgs = {
    input: MPHInput;
};
export declare class DPoolList {
    __typename?: "DPoolList";
    id?: Maybe<Scalars["ID"]>;
    pools?: Maybe<Array<Maybe<DPool>>>;
    numPools?: Maybe<Scalars["Int"]>;
    numUsers?: Maybe<Scalars["Int"]>;
    numActiveUsers?: Maybe<Scalars["Int"]>;
    numFunders?: Maybe<Scalars["Int"]>;
    proof?: Maybe<Proof>;
}
export declare type DPoolListInput = {
    id?: Maybe<Scalars["ID"]>;
    DPoolIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    numPools?: Maybe<Scalars["Int"]>;
    numUsers?: Maybe<Scalars["Int"]>;
    numActiveUsers?: Maybe<Scalars["Int"]>;
    numFunders?: Maybe<Scalars["Int"]>;
};
export declare class DPool {
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
export declare type DPoolInput = {
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
export declare class User {
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
export declare type UserInput = {
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
export declare class UserTotalDeposit {
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
export declare type UserTotalDepositInput = {
    id?: Maybe<Scalars["ID"]>;
    UserID?: Maybe<Scalars["String"]>;
    DPoolID?: Maybe<Scalars["String"]>;
    totalActiveDeposit?: Maybe<Scalars["String"]>;
    totalHistoricalDeposit?: Maybe<Scalars["String"]>;
    totalInterestEarned?: Maybe<Scalars["String"]>;
    totalHistoricalInterestEarned?: Maybe<Scalars["String"]>;
};
export declare class Deposit {
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
export declare type DepositInput = {
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
export declare type FunderInput = {
    id?: Maybe<Scalars["ID"]>;
    address?: Maybe<Scalars["String"]>;
    DPoolIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    numPools?: Maybe<Scalars["String"]>;
    FundingIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    numFundings?: Maybe<Scalars["String"]>;
    totalMPHEarned?: Maybe<Scalars["String"]>;
    FunderTotalInterestIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
};
export declare class FunderTotalInterest {
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
export declare type FunderTotalInterestInput = {
    id?: Maybe<Scalars["ID"]>;
    FunderID?: Maybe<Scalars["String"]>;
    DPoolID?: Maybe<Scalars["String"]>;
    totalDeficitFunded?: Maybe<Scalars["String"]>;
    totalHistoricalDeficitFunded?: Maybe<Scalars["String"]>;
    totalInterestEarned?: Maybe<Scalars["String"]>;
    totalHistoricalInterestEarned?: Maybe<Scalars["String"]>;
    totalRecordedFundedDepositAmount?: Maybe<Scalars["String"]>;
};
export declare class Funding {
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
export declare type FundingInput = {
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
export declare class MPHHolder {
    __typename?: "MPHHolder";
    id?: Maybe<Scalars["ID"]>;
    address?: Maybe<Scalars["String"]>;
    mphBalance?: Maybe<Scalars["String"]>;
    stakedMPHBalance?: Maybe<Scalars["String"]>;
    totalHistoricalReward?: Maybe<Scalars["String"]>;
    proof?: Maybe<Proof>;
}
export declare type MPHHolderInput = {
    id?: Maybe<Scalars["ID"]>;
    address?: Maybe<Scalars["String"]>;
    mphBalance?: Maybe<Scalars["String"]>;
    stakedMPHBalance?: Maybe<Scalars["String"]>;
    totalHistoricalReward?: Maybe<Scalars["String"]>;
};
export declare class MPH {
    __typename?: "MPH";
    id?: Maybe<Scalars["ID"]>;
    totalSupply?: Maybe<Scalars["String"]>;
    totalStakedMPHBalance?: Maybe<Scalars["String"]>;
    totalHistoricalReward?: Maybe<Scalars["String"]>;
    rewardPerSecond?: Maybe<Scalars["String"]>;
    rewardPerMPHPerSecond?: Maybe<Scalars["String"]>;
    proof?: Maybe<Proof>;
}
export declare type MPHInput = {
    id?: Maybe<Scalars["ID"]>;
    totalSupply?: Maybe<Scalars["String"]>;
    totalStakedMPHBalance?: Maybe<Scalars["String"]>;
    totalHistoricalReward?: Maybe<Scalars["String"]>;
    rewardPerSecond?: Maybe<Scalars["String"]>;
    rewardPerMPHPerSecond?: Maybe<Scalars["String"]>;
};
export declare class Proof {
    __typename?: "Proof";
    root?: Maybe<Scalars["String"]>;
    proof?: Maybe<Scalars["String"]>;
}
export declare class Funder {
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
export declare type userQueryVariables = Exact<{
    id: Scalars["ID"];
}>;
export declare type userQuery = {
    __typename?: "Query";
} & {
    User: {
        __typename?: "User";
    } & Pick<User, "totalMPHEarned" | "totalMPHPaidBack"> & {
        pools?: Maybe<Array<Maybe<{
            __typename?: "DPool";
        } & Pick<DPool, "id" | "address" | "mphDepositorRewardMultiplier">>>>;
        totalDepositByPool?: Maybe<Array<Maybe<{
            __typename?: "UserTotalDeposit";
        } & Pick<UserTotalDeposit, "totalActiveDeposit" | "totalInterestEarned"> & {
            pool?: Maybe<{
                __typename?: "DPool";
            } & Pick<DPool, "address" | "stablecoin">>;
        }>>>;
    };
};
export declare type dpoolsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type dpoolsQuery = {
    __typename?: "Query";
} & {
    DPools: Array<Maybe<{
        __typename?: "DPool";
    } & Pick<DPool, "id" | "address" | "totalActiveDeposit" | "oneYearInterestRate" | "mphDepositorRewardMultiplier">>>;
};
export declare type funderQueryVariables = Exact<{
    id: Scalars["ID"];
}>;
export declare type funderQuery = {
    __typename?: "Query";
} & {
    Funder: {
        __typename?: "Funder";
    } & Pick<Funder, "totalMPHEarned"> & {
        pools?: Maybe<Array<Maybe<{
            __typename?: "DPool";
        } & Pick<DPool, "id" | "address"> & {
            fundings?: Maybe<Array<Maybe<{
                __typename?: "Funding";
            } & Pick<Funding, "id" | "fromDepositID" | "toDepositID" | "nftID" | "recordedFundedDepositAmount" | "recordedMoneyMarketIncomeIndex" | "initialFundedDepositAmount" | "fundedDeficitAmount" | "totalInterestEarned"> & {
                pool?: Maybe<{
                    __typename?: "DPool";
                } & Pick<DPool, "address" | "oracleInterestRate" | "moneyMarketIncomeIndex">>;
            }>>>;
        }>>>;
        totalInterestByPool?: Maybe<Array<Maybe<{
            __typename?: "FunderTotalInterest";
        } & Pick<FunderTotalInterest, "totalDeficitFunded" | "totalRecordedFundedDepositAmount" | "totalInterestEarned"> & {
            pool?: Maybe<{
                __typename?: "DPool";
            } & Pick<DPool, "id" | "stablecoin">>;
        }>>>;
    };
};
export declare type dpoolsLatestQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type dpoolsLatestQuery = {
    __typename?: "Query";
} & {
    DPools: Array<Maybe<{
        __typename?: "DPool";
    } & Pick<DPool, "id" | "address" | "surplus" | "unfundedDepositAmount" | "oneYearInterestRate" | "oracleInterestRate" | "mphFunderRewardMultiplier"> & {
        deposits?: Maybe<Array<Maybe<{
            __typename?: "Deposit";
        } & Pick<Deposit, "nftID" | "id">>>>;
    }>>;
};
export declare type dpoolsLatestDepositsQueryVariables = Exact<{
    id: Scalars["ID"];
}>;
export declare type dpoolsLatestDepositsQuery = {
    __typename?: "Query";
} & {
    DPool: {
        __typename?: "DPool";
    } & Pick<DPool, "id" | "moneyMarketIncomeIndex"> & {
        deposits?: Maybe<Array<Maybe<{
            __typename?: "Deposit";
        } & Pick<Deposit, "nftID" | "amount" | "active" | "maturationTimestamp" | "interestEarned" | "initialMoneyMarketIncomeIndex">>>>;
    };
};
export declare type DPoolListQueryVariables = Exact<{
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
}>;
export declare type DPoolListQuery = {
    __typename?: "Query";
} & {
    DPoolList: {
        __typename?: "DPoolList";
    } & Pick<DPoolList, "id" | "numPools" | "numUsers" | "numActiveUsers" | "numFunders">;
};
export declare type UpdateDPoolListMutationVariables = Exact<{
    input: DPoolListInput;
}>;
export declare type UpdateDPoolListMutation = {
    __typename?: "Mutation";
} & Pick<Mutation, "updateDPoolList">;
export declare type DPoolQueryVariables = Exact<{
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
}>;
export declare type DPoolQuery = {
    __typename?: "Query";
} & {
    DPool: {
        __typename?: "DPool";
    } & Pick<DPool, "id" | "address" | "moneyMarket" | "stablecoin" | "interestModel" | "numUsers" | "numDeposits" | "numActiveDeposits" | "totalActiveDeposit" | "totalHistoricalDeposit" | "totalInterestPaid" | "unfundedDepositAmount" | "numFunders" | "numFundings" | "MinDepositPeriod" | "MaxDepositPeriod" | "MinDepositAmount" | "MaxDepositAmount" | "mphMintingMultiplier" | "mphDepositorRewardMultiplier" | "mphFunderRewardMultiplier" | "oneYearInterestRate" | "surplus" | "moneyMarketIncomeIndex" | "oracleInterestRate">;
};
export declare type UpdateDPoolMutationVariables = Exact<{
    input: DPoolInput;
}>;
export declare type UpdateDPoolMutation = {
    __typename?: "Mutation";
} & Pick<Mutation, "updateDPool">;
export declare type UserQueryVariables = Exact<{
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
}>;
export declare type UserQuery = {
    __typename?: "Query";
} & {
    User: {
        __typename?: "User";
    } & Pick<User, "id" | "address" | "numPools" | "numDeposits" | "numActiveDeposits" | "totalMPHEarned" | "totalMPHPaidBack">;
};
export declare type UpdateUserMutationVariables = Exact<{
    input: UserInput;
}>;
export declare type UpdateUserMutation = {
    __typename?: "Mutation";
} & Pick<Mutation, "updateUser">;
export declare type UserTotalDepositQueryVariables = Exact<{
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
}>;
export declare type UserTotalDepositQuery = {
    __typename?: "Query";
} & {
    UserTotalDeposit: {
        __typename?: "UserTotalDeposit";
    } & Pick<UserTotalDeposit, "id" | "totalActiveDeposit" | "totalHistoricalDeposit" | "totalInterestEarned" | "totalHistoricalInterestEarned">;
};
export declare type UpdateUserTotalDepositMutationVariables = Exact<{
    input: UserTotalDepositInput;
}>;
export declare type UpdateUserTotalDepositMutation = {
    __typename?: "Mutation";
} & Pick<Mutation, "updateUserTotalDeposit">;
export declare type DepositQueryVariables = Exact<{
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
}>;
export declare type DepositQuery = {
    __typename?: "Query";
} & {
    Deposit: {
        __typename?: "Deposit";
    } & Pick<Deposit, "id" | "nftID" | "amount" | "maturationTimestamp" | "active" | "depositTimestamp" | "interestEarned" | "fundingID" | "mintMPHAmount" | "takeBackMPHAmount" | "initialMoneyMarketIncomeIndex">;
};
export declare type UpdateDepositMutationVariables = Exact<{
    input: DepositInput;
}>;
export declare type UpdateDepositMutation = {
    __typename?: "Mutation";
} & Pick<Mutation, "updateDeposit">;
export declare type FunderQueryVariables = Exact<{
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
}>;
export declare type FunderQuery = {
    __typename?: "Query";
} & {
    Funder: {
        __typename?: "Funder";
    } & Pick<Funder, "id" | "address" | "numPools" | "numFundings" | "totalMPHEarned">;
};
export declare type UpdateFunderMutationVariables = Exact<{
    input: FunderInput;
}>;
export declare type UpdateFunderMutation = {
    __typename?: "Mutation";
} & Pick<Mutation, "updateFunder">;
export declare type FunderTotalInterestQueryVariables = Exact<{
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
}>;
export declare type FunderTotalInterestQuery = {
    __typename?: "Query";
} & {
    FunderTotalInterest: {
        __typename?: "FunderTotalInterest";
    } & Pick<FunderTotalInterest, "id" | "totalDeficitFunded" | "totalHistoricalDeficitFunded" | "totalInterestEarned" | "totalHistoricalInterestEarned" | "totalRecordedFundedDepositAmount">;
};
export declare type UpdateFunderTotalInterestMutationVariables = Exact<{
    input: FunderTotalInterestInput;
}>;
export declare type UpdateFunderTotalInterestMutation = {
    __typename?: "Mutation";
} & Pick<Mutation, "updateFunderTotalInterest">;
export declare type FundingQueryVariables = Exact<{
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
}>;
export declare type FundingQuery = {
    __typename?: "Query";
} & {
    Funding: {
        __typename?: "Funding";
    } & Pick<Funding, "id" | "nftID" | "fromDepositID" | "toDepositID" | "active" | "recordedFundedDepositAmount" | "recordedMoneyMarketIncomeIndex" | "initialFundedDepositAmount" | "fundedDeficitAmount" | "totalInterestEarned" | "mintMPHAmount">;
};
export declare type UpdateFundingMutationVariables = Exact<{
    input: FundingInput;
}>;
export declare type UpdateFundingMutation = {
    __typename?: "Mutation";
} & Pick<Mutation, "updateFunding">;
export declare type MPHHolderQueryVariables = Exact<{
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
}>;
export declare type MPHHolderQuery = {
    __typename?: "Query";
} & {
    MPHHolder: {
        __typename?: "MPHHolder";
    } & Pick<MPHHolder, "id" | "address" | "mphBalance" | "stakedMPHBalance" | "totalHistoricalReward">;
};
export declare type UpdateMPHHolderMutationVariables = Exact<{
    input: MPHHolderInput;
}>;
export declare type UpdateMPHHolderMutation = {
    __typename?: "Mutation";
} & Pick<Mutation, "updateMPHHolder">;
export declare type MPHQueryVariables = Exact<{
    id: Scalars["ID"];
    prove?: Maybe<Scalars["Boolean"]>;
}>;
export declare type MPHQuery = {
    __typename?: "Query";
} & {
    MPH: {
        __typename?: "MPH";
    } & Pick<MPH, "id" | "totalSupply" | "totalStakedMPHBalance" | "totalHistoricalReward" | "rewardPerSecond" | "rewardPerMPHPerSecond">;
};
export declare type UpdateMPHMutationVariables = Exact<{
    input: MPHInput;
}>;
export declare type UpdateMPHMutation = {
    __typename?: "Mutation";
} & Pick<Mutation, "updateMPH">;
export declare const userDocument: import("graphql").DocumentNode;
export declare const dpoolsDocument: import("graphql").DocumentNode;
export declare const funderDocument: import("graphql").DocumentNode;
export declare const dpoolsLatestDocument: import("graphql").DocumentNode;
export declare const dpoolsLatestDepositsDocument: import("graphql").DocumentNode;
export declare const DPoolListDocument: import("graphql").DocumentNode;
export declare const UpdateDPoolListDocument: import("graphql").DocumentNode;
export declare const DPoolDocument: import("graphql").DocumentNode;
export declare const UpdateDPoolDocument: import("graphql").DocumentNode;
export declare const UserDocument: import("graphql").DocumentNode;
export declare const UpdateUserDocument: import("graphql").DocumentNode;
export declare const UserTotalDepositDocument: import("graphql").DocumentNode;
export declare const UpdateUserTotalDepositDocument: import("graphql").DocumentNode;
export declare const DepositDocument: import("graphql").DocumentNode;
export declare const UpdateDepositDocument: import("graphql").DocumentNode;
export declare const FunderDocument: import("graphql").DocumentNode;
export declare const UpdateFunderDocument: import("graphql").DocumentNode;
export declare const FunderTotalInterestDocument: import("graphql").DocumentNode;
export declare const UpdateFunderTotalInterestDocument: import("graphql").DocumentNode;
export declare const FundingDocument: import("graphql").DocumentNode;
export declare const UpdateFundingDocument: import("graphql").DocumentNode;
export declare const MPHHolderDocument: import("graphql").DocumentNode;
export declare const UpdateMPHHolderDocument: import("graphql").DocumentNode;
export declare const MPHDocument: import("graphql").DocumentNode;
export declare const UpdateMPHDocument: import("graphql").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    user(variables: userQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<userQuery>;
    dpools(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<dpoolsQuery>;
    funder(variables: funderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<funderQuery>;
    dpoolsLatest(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<dpoolsLatestQuery>;
    dpoolsLatestDeposits(variables: dpoolsLatestDepositsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<dpoolsLatestDepositsQuery>;
    DPoolList(variables: DPoolListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DPoolListQuery>;
    UpdateDPoolList(variables: UpdateDPoolListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateDPoolListMutation>;
    DPool(variables: DPoolQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DPoolQuery>;
    UpdateDPool(variables: UpdateDPoolMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateDPoolMutation>;
    User(variables: UserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserQuery>;
    UpdateUser(variables: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserMutation>;
    UserTotalDeposit(variables: UserTotalDepositQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserTotalDepositQuery>;
    UpdateUserTotalDeposit(variables: UpdateUserTotalDepositMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserTotalDepositMutation>;
    Deposit(variables: DepositQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DepositQuery>;
    UpdateDeposit(variables: UpdateDepositMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateDepositMutation>;
    Funder(variables: FunderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FunderQuery>;
    UpdateFunder(variables: UpdateFunderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateFunderMutation>;
    FunderTotalInterest(variables: FunderTotalInterestQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FunderTotalInterestQuery>;
    UpdateFunderTotalInterest(variables: UpdateFunderTotalInterestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateFunderTotalInterestMutation>;
    Funding(variables: FundingQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FundingQuery>;
    UpdateFunding(variables: UpdateFundingMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateFundingMutation>;
    MPHHolder(variables: MPHHolderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MPHHolderQuery>;
    UpdateMPHHolder(variables: UpdateMPHHolderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateMPHHolderMutation>;
    MPH(variables: MPHQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MPHQuery>;
    UpdateMPH(variables: UpdateMPHMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateMPHMutation>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
//# sourceMappingURL=queries.d.ts.map