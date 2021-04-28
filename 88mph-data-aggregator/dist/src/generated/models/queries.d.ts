import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
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
export declare class DPool {
    __typename?: 'DPool';
    id?: Maybe<Scalars['ID']>;
    address?: Maybe<Scalars['String']>;
    moneyMarket?: Maybe<Scalars['String']>;
    stablecoin?: Maybe<Scalars['String']>;
    interestModel?: Maybe<Scalars['String']>;
    users?: Maybe<Array<Maybe<User>>>;
    UserIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numUsers?: Maybe<Scalars['BigInt']>;
    deposits?: Maybe<Array<Maybe<Deposit>>>;
    DepositIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numDeposits?: Maybe<Scalars['BigInt']>;
    numActiveDeposits?: Maybe<Scalars['BigInt']>;
    totalActiveDeposit?: Maybe<Scalars['BigDecimal']>;
    totalHistoricalDeposit?: Maybe<Scalars['BigDecimal']>;
    totalInterestPaid?: Maybe<Scalars['BigDecimal']>;
    unfundedDepositAmount?: Maybe<Scalars['BigDecimal']>;
    funders?: Maybe<Array<Maybe<Funder>>>;
    FunderIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numFunders?: Maybe<Scalars['BigInt']>;
    fundings?: Maybe<Array<Maybe<Funding>>>;
    FundingIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numFundings?: Maybe<Scalars['BigInt']>;
    MinDepositPeriod?: Maybe<Scalars['BigInt']>;
    MaxDepositPeriod?: Maybe<Scalars['BigInt']>;
    MinDepositAmount?: Maybe<Scalars['BigDecimal']>;
    MaxDepositAmount?: Maybe<Scalars['BigDecimal']>;
    mphDepositorRewardMintMultiplier?: Maybe<Scalars['BigDecimal']>;
    mphDepositorRewardTakeBackMultiplier?: Maybe<Scalars['BigDecimal']>;
    mphFunderRewardMultiplier?: Maybe<Scalars['BigDecimal']>;
    oneYearInterestRate?: Maybe<Scalars['BigDecimal']>;
    surplus?: Maybe<Scalars['BigDecimal']>;
    moneyMarketIncomeIndex?: Maybe<Scalars['BigInt']>;
    oracleInterestRate?: Maybe<Scalars['BigDecimal']>;
    proof?: Maybe<Proof>;
}
export declare type DPoolInput = {
    id?: Maybe<Scalars['ID']>;
    address?: Maybe<Scalars['String']>;
    moneyMarket?: Maybe<Scalars['String']>;
    stablecoin?: Maybe<Scalars['String']>;
    interestModel?: Maybe<Scalars['String']>;
    UserIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numUsers?: Maybe<Scalars['BigInt']>;
    DepositIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numDeposits?: Maybe<Scalars['BigInt']>;
    numActiveDeposits?: Maybe<Scalars['BigInt']>;
    totalActiveDeposit?: Maybe<Scalars['BigDecimal']>;
    totalHistoricalDeposit?: Maybe<Scalars['BigDecimal']>;
    totalInterestPaid?: Maybe<Scalars['BigDecimal']>;
    unfundedDepositAmount?: Maybe<Scalars['BigDecimal']>;
    FunderIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numFunders?: Maybe<Scalars['BigInt']>;
    FundingIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numFundings?: Maybe<Scalars['BigInt']>;
    MinDepositPeriod?: Maybe<Scalars['BigInt']>;
    MaxDepositPeriod?: Maybe<Scalars['BigInt']>;
    MinDepositAmount?: Maybe<Scalars['BigDecimal']>;
    MaxDepositAmount?: Maybe<Scalars['BigDecimal']>;
    mphDepositorRewardMintMultiplier?: Maybe<Scalars['BigDecimal']>;
    mphDepositorRewardTakeBackMultiplier?: Maybe<Scalars['BigDecimal']>;
    mphFunderRewardMultiplier?: Maybe<Scalars['BigDecimal']>;
    oneYearInterestRate?: Maybe<Scalars['BigDecimal']>;
    surplus?: Maybe<Scalars['BigDecimal']>;
    moneyMarketIncomeIndex?: Maybe<Scalars['BigInt']>;
    oracleInterestRate?: Maybe<Scalars['BigDecimal']>;
};
export declare class DPoolList {
    __typename?: 'DPoolList';
    id?: Maybe<Scalars['ID']>;
    pools?: Maybe<Array<Maybe<DPool>>>;
    DPoolIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numPools?: Maybe<Scalars['BigInt']>;
    numUsers?: Maybe<Scalars['BigInt']>;
    numActiveUsers?: Maybe<Scalars['BigInt']>;
    numFunders?: Maybe<Scalars['BigInt']>;
    proof?: Maybe<Proof>;
}
export declare type DPoolListInput = {
    id?: Maybe<Scalars['ID']>;
    DPoolIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numPools?: Maybe<Scalars['BigInt']>;
    numUsers?: Maybe<Scalars['BigInt']>;
    numActiveUsers?: Maybe<Scalars['BigInt']>;
    numFunders?: Maybe<Scalars['BigInt']>;
};
export declare class Deposit {
    __typename?: 'Deposit';
    id?: Maybe<Scalars['ID']>;
    nftID?: Maybe<Scalars['BigInt']>;
    user?: Maybe<User>;
    UserID?: Maybe<Scalars['String']>;
    pool?: Maybe<DPool>;
    DPoolID?: Maybe<Scalars['String']>;
    amount?: Maybe<Scalars['BigDecimal']>;
    maturationTimestamp?: Maybe<Scalars['BigInt']>;
    active?: Maybe<Scalars['Boolean']>;
    depositTimestamp?: Maybe<Scalars['BigInt']>;
    depositLength?: Maybe<Scalars['BigInt']>;
    interestEarned?: Maybe<Scalars['BigDecimal']>;
    fundingID?: Maybe<Scalars['BigInt']>;
    mintMPHAmount?: Maybe<Scalars['BigDecimal']>;
    takeBackMPHAmount?: Maybe<Scalars['BigDecimal']>;
    initialMoneyMarketIncomeIndex?: Maybe<Scalars['BigInt']>;
    fundingInterestPaid?: Maybe<Scalars['BigDecimal']>;
    fundingRefundAmount?: Maybe<Scalars['BigDecimal']>;
    proof?: Maybe<Proof>;
}
export declare type DepositInput = {
    id?: Maybe<Scalars['ID']>;
    nftID?: Maybe<Scalars['BigInt']>;
    UserID?: Maybe<Scalars['String']>;
    DPoolID?: Maybe<Scalars['String']>;
    amount?: Maybe<Scalars['BigDecimal']>;
    maturationTimestamp?: Maybe<Scalars['BigInt']>;
    active?: Maybe<Scalars['Boolean']>;
    depositTimestamp?: Maybe<Scalars['BigInt']>;
    depositLength?: Maybe<Scalars['BigInt']>;
    interestEarned?: Maybe<Scalars['BigDecimal']>;
    fundingID?: Maybe<Scalars['BigInt']>;
    mintMPHAmount?: Maybe<Scalars['BigDecimal']>;
    takeBackMPHAmount?: Maybe<Scalars['BigDecimal']>;
    initialMoneyMarketIncomeIndex?: Maybe<Scalars['BigInt']>;
    fundingInterestPaid?: Maybe<Scalars['BigDecimal']>;
    fundingRefundAmount?: Maybe<Scalars['BigDecimal']>;
};
export declare class FractionalDeposit {
    __typename?: 'FractionalDeposit';
    id?: Maybe<Scalars['ID']>;
    address?: Maybe<Scalars['String']>;
    zeroCouponBondAddress?: Maybe<Scalars['String']>;
    ownerAddress?: Maybe<Scalars['String']>;
    active?: Maybe<Scalars['Boolean']>;
    deposit?: Maybe<Deposit>;
    DepositID?: Maybe<Scalars['String']>;
    proof?: Maybe<Proof>;
}
export declare type FractionalDepositInput = {
    id?: Maybe<Scalars['ID']>;
    address?: Maybe<Scalars['String']>;
    zeroCouponBondAddress?: Maybe<Scalars['String']>;
    ownerAddress?: Maybe<Scalars['String']>;
    active?: Maybe<Scalars['Boolean']>;
    DepositID?: Maybe<Scalars['String']>;
};
export declare class Funder {
    __typename?: 'Funder';
    id?: Maybe<Scalars['ID']>;
    address?: Maybe<Scalars['String']>;
    pools?: Maybe<Array<Maybe<DPool>>>;
    DPoolIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numPools?: Maybe<Scalars['BigInt']>;
    fundings?: Maybe<Array<Maybe<Funding>>>;
    FundingIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numFundings?: Maybe<Scalars['BigInt']>;
    totalMPHEarned?: Maybe<Scalars['BigDecimal']>;
    totalInterestByPool?: Maybe<Array<Maybe<FunderTotalInterest>>>;
    FunderTotalInterestIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    proof?: Maybe<Proof>;
}
export declare type FunderInput = {
    id?: Maybe<Scalars['ID']>;
    address?: Maybe<Scalars['String']>;
    DPoolIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numPools?: Maybe<Scalars['BigInt']>;
    FundingIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numFundings?: Maybe<Scalars['BigInt']>;
    totalMPHEarned?: Maybe<Scalars['BigDecimal']>;
    FunderTotalInterestIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export declare class FunderTotalInterest {
    __typename?: 'FunderTotalInterest';
    id?: Maybe<Scalars['ID']>;
    funder?: Maybe<Funder>;
    FunderID?: Maybe<Scalars['String']>;
    pool?: Maybe<DPool>;
    DPoolID?: Maybe<Scalars['String']>;
    totalDeficitFunded?: Maybe<Scalars['BigDecimal']>;
    totalHistoricalDeficitFunded?: Maybe<Scalars['BigDecimal']>;
    totalInterestEarned?: Maybe<Scalars['BigDecimal']>;
    totalHistoricalInterestEarned?: Maybe<Scalars['BigDecimal']>;
    totalRecordedFundedDepositAmount?: Maybe<Scalars['BigDecimal']>;
    proof?: Maybe<Proof>;
}
export declare type FunderTotalInterestInput = {
    id?: Maybe<Scalars['ID']>;
    FunderID?: Maybe<Scalars['String']>;
    DPoolID?: Maybe<Scalars['String']>;
    totalDeficitFunded?: Maybe<Scalars['BigDecimal']>;
    totalHistoricalDeficitFunded?: Maybe<Scalars['BigDecimal']>;
    totalInterestEarned?: Maybe<Scalars['BigDecimal']>;
    totalHistoricalInterestEarned?: Maybe<Scalars['BigDecimal']>;
    totalRecordedFundedDepositAmount?: Maybe<Scalars['BigDecimal']>;
};
export declare class Funding {
    __typename?: 'Funding';
    id?: Maybe<Scalars['ID']>;
    nftID?: Maybe<Scalars['BigInt']>;
    funder?: Maybe<Funder>;
    FunderID?: Maybe<Scalars['String']>;
    pool?: Maybe<DPool>;
    DPoolID?: Maybe<Scalars['String']>;
    fromDepositID?: Maybe<Scalars['BigInt']>;
    toDepositID?: Maybe<Scalars['BigInt']>;
    active?: Maybe<Scalars['Boolean']>;
    recordedFundedDepositAmount?: Maybe<Scalars['BigDecimal']>;
    recordedMoneyMarketIncomeIndex?: Maybe<Scalars['BigInt']>;
    initialFundedDepositAmount?: Maybe<Scalars['BigDecimal']>;
    fundedDeficitAmount?: Maybe<Scalars['BigDecimal']>;
    totalInterestEarned?: Maybe<Scalars['BigDecimal']>;
    creationTimestamp?: Maybe<Scalars['BigInt']>;
    mphRewardEarned?: Maybe<Scalars['BigDecimal']>;
    refundAmount?: Maybe<Scalars['BigDecimal']>;
    proof?: Maybe<Proof>;
}
export declare type FundingInput = {
    id?: Maybe<Scalars['ID']>;
    nftID?: Maybe<Scalars['BigInt']>;
    FunderID?: Maybe<Scalars['String']>;
    DPoolID?: Maybe<Scalars['String']>;
    fromDepositID?: Maybe<Scalars['BigInt']>;
    toDepositID?: Maybe<Scalars['BigInt']>;
    active?: Maybe<Scalars['Boolean']>;
    recordedFundedDepositAmount?: Maybe<Scalars['BigDecimal']>;
    recordedMoneyMarketIncomeIndex?: Maybe<Scalars['BigInt']>;
    initialFundedDepositAmount?: Maybe<Scalars['BigDecimal']>;
    fundedDeficitAmount?: Maybe<Scalars['BigDecimal']>;
    totalInterestEarned?: Maybe<Scalars['BigDecimal']>;
    creationTimestamp?: Maybe<Scalars['BigInt']>;
    mphRewardEarned?: Maybe<Scalars['BigDecimal']>;
    refundAmount?: Maybe<Scalars['BigDecimal']>;
};
export declare class MPH {
    __typename?: 'MPH';
    id?: Maybe<Scalars['ID']>;
    totalHistoricalReward?: Maybe<Scalars['BigDecimal']>;
    rewardPerSecond?: Maybe<Scalars['BigDecimal']>;
    rewardPerMPHPerSecond?: Maybe<Scalars['BigDecimal']>;
    proof?: Maybe<Proof>;
}
export declare class MPHHolder {
    __typename?: 'MPHHolder';
    id?: Maybe<Scalars['ID']>;
    address?: Maybe<Scalars['String']>;
    totalHistoricalReward?: Maybe<Scalars['BigDecimal']>;
    proof?: Maybe<Proof>;
}
export declare type MPHHolderInput = {
    id?: Maybe<Scalars['ID']>;
    address?: Maybe<Scalars['String']>;
    totalHistoricalReward?: Maybe<Scalars['BigDecimal']>;
};
export declare type MPHInput = {
    id?: Maybe<Scalars['ID']>;
    totalHistoricalReward?: Maybe<Scalars['BigDecimal']>;
    rewardPerSecond?: Maybe<Scalars['BigDecimal']>;
    rewardPerMPHPerSecond?: Maybe<Scalars['BigDecimal']>;
};
export declare class Mutation {
    __typename?: 'Mutation';
    UpdateDPoolList?: Maybe<Scalars['Boolean']>;
    UpdateDPool?: Maybe<Scalars['Boolean']>;
    UpdateUser?: Maybe<Scalars['Boolean']>;
    UpdateUserTotalDeposit?: Maybe<Scalars['Boolean']>;
    UpdateDeposit?: Maybe<Scalars['Boolean']>;
    UpdateFunder?: Maybe<Scalars['Boolean']>;
    UpdateFunderTotalInterest?: Maybe<Scalars['Boolean']>;
    UpdateFunding?: Maybe<Scalars['Boolean']>;
    UpdateMPHHolder?: Maybe<Scalars['Boolean']>;
    UpdateMPH?: Maybe<Scalars['Boolean']>;
    UpdateVest?: Maybe<Scalars['Boolean']>;
    UpdateFractionalDeposit?: Maybe<Scalars['Boolean']>;
}
export declare type MutationUpdateDPoolListArgs = {
    input: DPoolListInput;
};
export declare type MutationUpdateDPoolArgs = {
    input: DPoolInput;
};
export declare type MutationUpdateUserArgs = {
    input: UserInput;
};
export declare type MutationUpdateUserTotalDepositArgs = {
    input: UserTotalDepositInput;
};
export declare type MutationUpdateDepositArgs = {
    input: DepositInput;
};
export declare type MutationUpdateFunderArgs = {
    input: FunderInput;
};
export declare type MutationUpdateFunderTotalInterestArgs = {
    input: FunderTotalInterestInput;
};
export declare type MutationUpdateFundingArgs = {
    input: FundingInput;
};
export declare type MutationUpdateMPHHolderArgs = {
    input: MPHHolderInput;
};
export declare type MutationUpdateMPHArgs = {
    input: MPHInput;
};
export declare type MutationUpdateVestArgs = {
    input: VestInput;
};
export declare type MutationUpdateFractionalDepositArgs = {
    input: FractionalDepositInput;
};
export declare class Proof {
    __typename?: 'Proof';
    root?: Maybe<Scalars['String']>;
    proof?: Maybe<Scalars['String']>;
}
export declare class Query {
    __typename?: 'Query';
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
export declare type QueryDPoolListArgs = {
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryDPoolListsArgs = {
    where?: Maybe<Scalars['String']>;
    order_by?: Maybe<Scalars['String']>;
    asc?: Maybe<Scalars['Boolean']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryDPoolListSearchArgs = {
    queryText: Scalars['String'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryDPoolArgs = {
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryDPoolsArgs = {
    where?: Maybe<Scalars['String']>;
    order_by?: Maybe<Scalars['String']>;
    asc?: Maybe<Scalars['Boolean']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryDPoolSearchArgs = {
    queryText: Scalars['String'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryUserArgs = {
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryUsersArgs = {
    where?: Maybe<Scalars['String']>;
    order_by?: Maybe<Scalars['String']>;
    asc?: Maybe<Scalars['Boolean']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryUserSearchArgs = {
    queryText: Scalars['String'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryUserTotalDepositArgs = {
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryUserTotalDepositsArgs = {
    where?: Maybe<Scalars['String']>;
    order_by?: Maybe<Scalars['String']>;
    asc?: Maybe<Scalars['Boolean']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryUserTotalDepositSearchArgs = {
    queryText: Scalars['String'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryDepositArgs = {
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryDepositsArgs = {
    where?: Maybe<Scalars['String']>;
    order_by?: Maybe<Scalars['String']>;
    asc?: Maybe<Scalars['Boolean']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryDepositSearchArgs = {
    queryText: Scalars['String'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryFunderArgs = {
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryFundersArgs = {
    where?: Maybe<Scalars['String']>;
    order_by?: Maybe<Scalars['String']>;
    asc?: Maybe<Scalars['Boolean']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryFunderSearchArgs = {
    queryText: Scalars['String'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryFunderTotalInterestArgs = {
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryFunderTotalInterestsArgs = {
    where?: Maybe<Scalars['String']>;
    order_by?: Maybe<Scalars['String']>;
    asc?: Maybe<Scalars['Boolean']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryFunderTotalInterestSearchArgs = {
    queryText: Scalars['String'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryFundingArgs = {
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryFundingsArgs = {
    where?: Maybe<Scalars['String']>;
    order_by?: Maybe<Scalars['String']>;
    asc?: Maybe<Scalars['Boolean']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryFundingSearchArgs = {
    queryText: Scalars['String'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryMPHHolderArgs = {
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryMPHHoldersArgs = {
    where?: Maybe<Scalars['String']>;
    order_by?: Maybe<Scalars['String']>;
    asc?: Maybe<Scalars['Boolean']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryMPHHolderSearchArgs = {
    queryText: Scalars['String'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryMPHArgs = {
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryMPHsArgs = {
    where?: Maybe<Scalars['String']>;
    order_by?: Maybe<Scalars['String']>;
    asc?: Maybe<Scalars['Boolean']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryMPHSearchArgs = {
    queryText: Scalars['String'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryVestArgs = {
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryVestsArgs = {
    where?: Maybe<Scalars['String']>;
    order_by?: Maybe<Scalars['String']>;
    asc?: Maybe<Scalars['Boolean']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryVestSearchArgs = {
    queryText: Scalars['String'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryFractionalDepositArgs = {
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryFractionalDepositsArgs = {
    where?: Maybe<Scalars['String']>;
    order_by?: Maybe<Scalars['String']>;
    asc?: Maybe<Scalars['Boolean']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    prove?: Maybe<Scalars['Boolean']>;
};
export declare type QueryFractionalDepositSearchArgs = {
    queryText: Scalars['String'];
    prove?: Maybe<Scalars['Boolean']>;
};
export declare class User {
    __typename?: 'User';
    id?: Maybe<Scalars['ID']>;
    address?: Maybe<Scalars['String']>;
    pools?: Maybe<Array<Maybe<DPool>>>;
    DPoolIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numPools?: Maybe<Scalars['BigInt']>;
    deposits?: Maybe<Array<Maybe<Deposit>>>;
    DepositIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numDeposits?: Maybe<Scalars['BigInt']>;
    numActiveDeposits?: Maybe<Scalars['BigInt']>;
    totalDepositByPool?: Maybe<Array<Maybe<UserTotalDeposit>>>;
    UserTotalDepositIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    totalMPHEarned?: Maybe<Scalars['BigDecimal']>;
    totalMPHPaidBack?: Maybe<Scalars['BigDecimal']>;
    proof?: Maybe<Proof>;
}
export declare type UserInput = {
    id?: Maybe<Scalars['ID']>;
    address?: Maybe<Scalars['String']>;
    DPoolIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numPools?: Maybe<Scalars['BigInt']>;
    DepositIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    numDeposits?: Maybe<Scalars['BigInt']>;
    numActiveDeposits?: Maybe<Scalars['BigInt']>;
    UserTotalDepositIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
    totalMPHEarned?: Maybe<Scalars['BigDecimal']>;
    totalMPHPaidBack?: Maybe<Scalars['BigDecimal']>;
};
export declare class UserTotalDeposit {
    __typename?: 'UserTotalDeposit';
    id?: Maybe<Scalars['ID']>;
    user?: Maybe<User>;
    UserID?: Maybe<Scalars['String']>;
    pool?: Maybe<DPool>;
    DPoolID?: Maybe<Scalars['String']>;
    totalActiveDeposit?: Maybe<Scalars['BigDecimal']>;
    totalHistoricalDeposit?: Maybe<Scalars['BigDecimal']>;
    totalInterestEarned?: Maybe<Scalars['BigDecimal']>;
    totalHistoricalInterestEarned?: Maybe<Scalars['BigDecimal']>;
    proof?: Maybe<Proof>;
}
export declare type UserTotalDepositInput = {
    id?: Maybe<Scalars['ID']>;
    UserID?: Maybe<Scalars['String']>;
    DPoolID?: Maybe<Scalars['String']>;
    totalActiveDeposit?: Maybe<Scalars['BigDecimal']>;
    totalHistoricalDeposit?: Maybe<Scalars['BigDecimal']>;
    totalInterestEarned?: Maybe<Scalars['BigDecimal']>;
    totalHistoricalInterestEarned?: Maybe<Scalars['BigDecimal']>;
};
export declare class Vest {
    __typename?: 'Vest';
    id?: Maybe<Scalars['ID']>;
    index?: Maybe<Scalars['BigInt']>;
    user?: Maybe<Scalars['String']>;
    amount?: Maybe<Scalars['BigDecimal']>;
    vestPeriodInSeconds?: Maybe<Scalars['BigInt']>;
    creationTimestamp?: Maybe<Scalars['BigInt']>;
    withdrawnAmount?: Maybe<Scalars['BigDecimal']>;
    proof?: Maybe<Proof>;
}
export declare type VestInput = {
    id?: Maybe<Scalars['ID']>;
    index?: Maybe<Scalars['BigInt']>;
    user?: Maybe<Scalars['String']>;
    amount?: Maybe<Scalars['BigDecimal']>;
    vestPeriodInSeconds?: Maybe<Scalars['BigInt']>;
    creationTimestamp?: Maybe<Scalars['BigInt']>;
    withdrawnAmount?: Maybe<Scalars['BigDecimal']>;
};
export declare type DPoolListQueryVariables = Exact<{
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
}>;
export declare type DPoolListQuery = ({
    __typename?: 'Query';
} & {
    DPoolList: ({
        __typename?: 'DPoolList';
    } & Pick<DPoolList, 'id' | 'DPoolIDs'>);
});
export declare type UpdateDPoolListMutationVariables = Exact<{
    input: DPoolListInput;
}>;
export declare type UpdateDPoolListMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'UpdateDPoolList'>);
export declare type DPoolQueryVariables = Exact<{
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
}>;
export declare type DPoolQuery = ({
    __typename?: 'Query';
} & {
    DPool: ({
        __typename?: 'DPool';
    } & Pick<DPool, 'id' | 'address' | 'moneyMarket' | 'stablecoin' | 'interestModel' | 'UserIDs' | 'DepositIDs' | 'FunderIDs' | 'FundingIDs'>);
});
export declare type UpdateDPoolMutationVariables = Exact<{
    input: DPoolInput;
}>;
export declare type UpdateDPoolMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'UpdateDPool'>);
export declare type UserQueryVariables = Exact<{
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
}>;
export declare type UserQuery = ({
    __typename?: 'Query';
} & {
    User: ({
        __typename?: 'User';
    } & Pick<User, 'id' | 'address' | 'DPoolIDs' | 'DepositIDs' | 'UserTotalDepositIDs'>);
});
export declare type UpdateUserMutationVariables = Exact<{
    input: UserInput;
}>;
export declare type UpdateUserMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'UpdateUser'>);
export declare type UserTotalDepositQueryVariables = Exact<{
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
}>;
export declare type UserTotalDepositQuery = ({
    __typename?: 'Query';
} & {
    UserTotalDeposit: ({
        __typename?: 'UserTotalDeposit';
    } & Pick<UserTotalDeposit, 'id' | 'UserID' | 'DPoolID'>);
});
export declare type UpdateUserTotalDepositMutationVariables = Exact<{
    input: UserTotalDepositInput;
}>;
export declare type UpdateUserTotalDepositMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'UpdateUserTotalDeposit'>);
export declare type DepositQueryVariables = Exact<{
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
}>;
export declare type DepositQuery = ({
    __typename?: 'Query';
} & {
    Deposit: ({
        __typename?: 'Deposit';
    } & Pick<Deposit, 'id' | 'UserID' | 'DPoolID' | 'active'>);
});
export declare type UpdateDepositMutationVariables = Exact<{
    input: DepositInput;
}>;
export declare type UpdateDepositMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'UpdateDeposit'>);
export declare type FunderQueryVariables = Exact<{
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
}>;
export declare type FunderQuery = ({
    __typename?: 'Query';
} & {
    Funder: ({
        __typename?: 'Funder';
    } & Pick<Funder, 'id' | 'address' | 'DPoolIDs' | 'FundingIDs' | 'FunderTotalInterestIDs'>);
});
export declare type UpdateFunderMutationVariables = Exact<{
    input: FunderInput;
}>;
export declare type UpdateFunderMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'UpdateFunder'>);
export declare type FunderTotalInterestQueryVariables = Exact<{
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
}>;
export declare type FunderTotalInterestQuery = ({
    __typename?: 'Query';
} & {
    FunderTotalInterest: ({
        __typename?: 'FunderTotalInterest';
    } & Pick<FunderTotalInterest, 'id' | 'FunderID' | 'DPoolID'>);
});
export declare type UpdateFunderTotalInterestMutationVariables = Exact<{
    input: FunderTotalInterestInput;
}>;
export declare type UpdateFunderTotalInterestMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'UpdateFunderTotalInterest'>);
export declare type FundingQueryVariables = Exact<{
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
}>;
export declare type FundingQuery = ({
    __typename?: 'Query';
} & {
    Funding: ({
        __typename?: 'Funding';
    } & Pick<Funding, 'id' | 'FunderID' | 'DPoolID' | 'active'>);
});
export declare type UpdateFundingMutationVariables = Exact<{
    input: FundingInput;
}>;
export declare type UpdateFundingMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'UpdateFunding'>);
export declare type MPHHolderQueryVariables = Exact<{
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
}>;
export declare type MPHHolderQuery = ({
    __typename?: 'Query';
} & {
    MPHHolder: ({
        __typename?: 'MPHHolder';
    } & Pick<MPHHolder, 'id' | 'address'>);
});
export declare type UpdateMPHHolderMutationVariables = Exact<{
    input: MPHHolderInput;
}>;
export declare type UpdateMPHHolderMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'UpdateMPHHolder'>);
export declare type MPHQueryVariables = Exact<{
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
}>;
export declare type MPHQuery = ({
    __typename?: 'Query';
} & {
    MPH: ({
        __typename?: 'MPH';
    } & Pick<MPH, 'id'>);
});
export declare type UpdateMPHMutationVariables = Exact<{
    input: MPHInput;
}>;
export declare type UpdateMPHMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'UpdateMPH'>);
export declare type VestQueryVariables = Exact<{
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
}>;
export declare type VestQuery = ({
    __typename?: 'Query';
} & {
    Vest: ({
        __typename?: 'Vest';
    } & Pick<Vest, 'id' | 'user'>);
});
export declare type UpdateVestMutationVariables = Exact<{
    input: VestInput;
}>;
export declare type UpdateVestMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'UpdateVest'>);
export declare type FractionalDepositQueryVariables = Exact<{
    id: Scalars['ID'];
    prove?: Maybe<Scalars['Boolean']>;
}>;
export declare type FractionalDepositQuery = ({
    __typename?: 'Query';
} & {
    FractionalDeposit: ({
        __typename?: 'FractionalDeposit';
    } & Pick<FractionalDeposit, 'id' | 'address' | 'zeroCouponBondAddress' | 'ownerAddress' | 'active' | 'DepositID'>);
});
export declare type UpdateFractionalDepositMutationVariables = Exact<{
    input: FractionalDepositInput;
}>;
export declare type UpdateFractionalDepositMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'UpdateFractionalDeposit'>);
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
export declare const VestDocument: import("graphql").DocumentNode;
export declare const UpdateVestDocument: import("graphql").DocumentNode;
export declare const FractionalDepositDocument: import("graphql").DocumentNode;
export declare const UpdateFractionalDepositDocument: import("graphql").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
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
    Vest(variables: VestQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<VestQuery>;
    UpdateVest(variables: UpdateVestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateVestMutation>;
    FractionalDeposit(variables: FractionalDepositQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FractionalDepositQuery>;
    UpdateFractionalDeposit(variables: UpdateFractionalDepositMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateFractionalDepositMutation>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
//# sourceMappingURL=queries.d.ts.map