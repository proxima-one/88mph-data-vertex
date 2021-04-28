import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import {
  DPool,
  DPoolInput,
  DPoolList,
  DPoolListInput,
  Deposit,
  DepositInput,
  FractionalDeposit,
  FractionalDepositInput,
  Funder,
  FunderInput,
  FunderTotalInterest,
  FunderTotalInterestInput,
  Funding,
  FundingInput,
  MPH,
  MPHHolder,
  MPHHolderInput,
  MPHInput,
  User,
  UserInput,
  UserTotalDeposit,
  UserTotalDepositInput,
  Vest,
  VestInput
} from "./models";
import gql from "graphql-tag";
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

export const DPoolListDocument = gql`
  query DPoolList($id: ID!, $prove: Boolean) {
    DPoolList(id: $id, prove: $prove) {
      id
      DPoolIDs
    }
  }
`;
export const UpdateDPoolListDocument = gql`
  mutation UpdateDPoolList($input: DPoolListInput!) {
    UpdateDPoolList(input: $input)
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
      UserIDs
      DepositIDs
      FunderIDs
      FundingIDs
    }
  }
`;
export const UpdateDPoolDocument = gql`
  mutation UpdateDPool($input: DPoolInput!) {
    UpdateDPool(input: $input)
  }
`;
export const UserDocument = gql`
  query User($id: ID!, $prove: Boolean) {
    User(id: $id, prove: $prove) {
      id
      address
      DPoolIDs
      DepositIDs
      UserTotalDepositIDs
    }
  }
`;
export const UpdateUserDocument = gql`
  mutation UpdateUser($input: UserInput!) {
    UpdateUser(input: $input)
  }
`;
export const UserTotalDepositDocument = gql`
  query UserTotalDeposit($id: ID!, $prove: Boolean) {
    UserTotalDeposit(id: $id, prove: $prove) {
      id
      UserID
      DPoolID
    }
  }
`;
export const UpdateUserTotalDepositDocument = gql`
  mutation UpdateUserTotalDeposit($input: UserTotalDepositInput!) {
    UpdateUserTotalDeposit(input: $input)
  }
`;
export const DepositDocument = gql`
  query Deposit($id: ID!, $prove: Boolean) {
    Deposit(id: $id, prove: $prove) {
      id
      UserID
      DPoolID
      active
    }
  }
`;
export const UpdateDepositDocument = gql`
  mutation UpdateDeposit($input: DepositInput!) {
    UpdateDeposit(input: $input)
  }
`;
export const FunderDocument = gql`
  query Funder($id: ID!, $prove: Boolean) {
    Funder(id: $id, prove: $prove) {
      id
      address
      DPoolIDs
      FundingIDs
      FunderTotalInterestIDs
    }
  }
`;
export const UpdateFunderDocument = gql`
  mutation UpdateFunder($input: FunderInput!) {
    UpdateFunder(input: $input)
  }
`;
export const FunderTotalInterestDocument = gql`
  query FunderTotalInterest($id: ID!, $prove: Boolean) {
    FunderTotalInterest(id: $id, prove: $prove) {
      id
      FunderID
      DPoolID
    }
  }
`;
export const UpdateFunderTotalInterestDocument = gql`
  mutation UpdateFunderTotalInterest($input: FunderTotalInterestInput!) {
    UpdateFunderTotalInterest(input: $input)
  }
`;
export const FundingDocument = gql`
  query Funding($id: ID!, $prove: Boolean) {
    Funding(id: $id, prove: $prove) {
      id
      FunderID
      DPoolID
      active
    }
  }
`;
export const UpdateFundingDocument = gql`
  mutation UpdateFunding($input: FundingInput!) {
    UpdateFunding(input: $input)
  }
`;
export const MPHHolderDocument = gql`
  query MPHHolder($id: ID!, $prove: Boolean) {
    MPHHolder(id: $id, prove: $prove) {
      id
      address
    }
  }
`;
export const UpdateMPHHolderDocument = gql`
  mutation UpdateMPHHolder($input: MPHHolderInput!) {
    UpdateMPHHolder(input: $input)
  }
`;
export const MPHDocument = gql`
  query MPH($id: ID!, $prove: Boolean) {
    MPH(id: $id, prove: $prove) {
      id
    }
  }
`;
export const UpdateMPHDocument = gql`
  mutation UpdateMPH($input: MPHInput!) {
    UpdateMPH(input: $input)
  }
`;
export const VestDocument = gql`
  query Vest($id: ID!, $prove: Boolean) {
    Vest(id: $id, prove: $prove) {
      id
      user
    }
  }
`;
export const UpdateVestDocument = gql`
  mutation UpdateVest($input: VestInput!) {
    UpdateVest(input: $input)
  }
`;
export const FractionalDepositDocument = gql`
  query FractionalDeposit($id: ID!, $prove: Boolean) {
    FractionalDeposit(id: $id, prove: $prove) {
      id
      address
      zeroCouponBondAddress
      ownerAddress
      active
      DepositID
    }
  }
`;
export const UpdateFractionalDepositDocument = gql`
  mutation UpdateFractionalDeposit($input: FractionalDepositInput!) {
    UpdateFractionalDeposit(input: $input)
  }
`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
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
    },
    Vest(
      variables: VestQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<VestQuery> {
      return withWrapper(() =>
        client.request<VestQuery>(VestDocument, variables, requestHeaders)
      );
    },
    UpdateVest(
      variables: UpdateVestMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdateVestMutation> {
      return withWrapper(() =>
        client.request<UpdateVestMutation>(
          UpdateVestDocument,
          variables,
          requestHeaders
        )
      );
    },
    FractionalDeposit(
      variables: FractionalDepositQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<FractionalDepositQuery> {
      return withWrapper(() =>
        client.request<FractionalDepositQuery>(
          FractionalDepositDocument,
          variables,
          requestHeaders
        )
      );
    },
    UpdateFractionalDeposit(
      variables: UpdateFractionalDepositMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdateFractionalDepositMutation> {
      return withWrapper(() =>
        client.request<UpdateFractionalDepositMutation>(
          UpdateFractionalDepositDocument,
          variables,
          requestHeaders
        )
      );
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
