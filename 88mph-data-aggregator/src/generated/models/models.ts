import { useFetch } from "../../lib/DataVertexClient";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

import {
  convert,
  parseBigInt,
  parseInt,
  parseNumber,
  parseBigNumber,
  parseString
} from "./utils";
//import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
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
  String: string;
  Boolean: boolean;
  Int: BigInt | BigNumberish;
  Float: number | BigNumber | BigNumberish;
  BigDecimal: BigNumberish;
  BigInt: BigInt;
};
//
// type ReturnTypeName<T> = T extends Scalars["String"]
//   ? "string"
//   : T extends Scalars["Int"]
//   ? "number"
//   : T extends Scalars["Boolean"]
//   ? "boolean"
//   : T extends undefined
//   ? "undefined"
//   : T extends Function
//   ? "function"
//   : "object";

//get type name

// type Proxy<T, U> = {
//   setLoadArgs(value: T): void;
//   setSaveArgs(value: U): void;
//   getSaveArgs(): U;
//   getLoadArgs(): T;
//   //extra values
//   //
// };

declare function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;

type Filter<T, U> = T extends U ? T : never;

type ProxyValue<T> = NonNullable<T>;

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T];

type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

//toDPoolLoadArgs {
//map all of the values in DPool
//parseInt()
//}

//toDPoolInput

// type Proxify<T, U> = {
//   [P in keyof T]?: P extends keyof U
//     ? Proxy<NonNullable<T[P]>, NonNullable<U[P]>>
//     : never
// };
//
// function parse<T, U>(o: T, opname?: string): Proxify<T, U> {
//   let result = {} as Proxify<T, U>;
//   let u = {} as U;
//   //new Proxify
//
//   let u = {} as U;
//   let t = {} as T;
//   const entries = Object.entries(o);
//
//   for (const p of entries) {
//     //check that it is in proxy, and results
//     if (p[0] && p[1]) {
//       let m = u[p[0] as keyof U]; //pick
//       type M = typeof m;
//       let l = t[p[0] as keyof T];
//       type L = typeof l;
//
//       //check if nonnullable != never
//       //type P = ReturnType<f>;
//       //filter non nullable and defined
//       //let L pick
//       //ThisParameterType<typeof toHex>
//       //ReturnType<>
//       //if there are any opcodes
//       var pVal: Proxy<NonNullable<L>, NonNullable<M>> = parseProxy<
//         NonNullable<L>,
//         NonNullable<M>
//       >(p[1]);
//       setProperty(result, p[0] as keyof T, pVal);
//     }
//   }
//   return result;
// }

//function parseRecords<Record<...>>()
//
// function parseProxy<L, M>(o: L | M, opname?: string): Proxy<L, M> {
//   let m = {} as M;
//   let l = {} as L;
//   let parsed = {} as Proxy<L, M>;
//   parsed.getLoadArgs = (): L => l;
//   parsed.getSaveArgs = (): M => m;
//   parsed.setLoadArgs = (l: L) => {
//     l = l;
//     m = convert<L, M>(l) as M;
//   };
//   parsed.setSaveArgs = (m: M) => {
//     m = m;
//     l = convert<M, L>(m) as L;
//   };
//   if (opname != undefined) {
//     parsed.setLoadArgs(o as L);
//   } else {
//     parsed.setSaveArgs(o as M);
//   }
//   return parsed;
// }

//getTypeFromScalars(T, "loadOrSave") {
//load is the integers/numbers
//save is the strings
//
//}

// function convert<F, T>(from: F): Maybe<T> {
//   //type
//   let to = "string";
//   switch (to) {
//     case "string":
//       return parseString(from) as Maybe<T>;
//     case "bigint":
//       return parseBigInt(from) as Maybe<T>;
//     case "number":
//       return parseNumber(from) as Maybe<T>;
//     case "float":
//       return parseNumber(from) as Maybe<T>;
//     default:
//       return null;
//   }
// }
//
// function parseNumber(val: any): Maybe<BigNumberish> {
//   switch (typeof val) {
//     case "string":
//       return BigNumber.from(val);
//     case "bigint":
//       return BigNumber.from(val); //int
//     case "number":
//       return BigNumber.from(val);
//     case "boolean":
//       return BigNumber.from(val);
//     default:
//       return null;
//   }
// }
//
// function parseString(val: any): Maybe<String> {
//   switch (typeof val) {
//     case "string":
//       return val;
//     case "bigint":
//       return val.toString(); //int
//     case "number":
//       return val.toString();
//     case "object":
//       return val.toString();
//     default:
//       return null;
//   }
// }
//
// function parseBigInt(val: any): Maybe<bigint> {
//   switch (typeof val) {
//     case "string":
//       let c = BigInt(val);
//       return c;
//     case "bigint":
//       return val; //int
//     case "number":
//       return BigInt(val);
//     default:
//       return null;
//   }
// }

//
// const parseInteger = (s: string): CellParse<number> => {
//   const n = Number(s);
//   if (Number.isNaN(n)) {
//     return { parsed: false, reason: "does not contain a number" };
//   }
//   if (!Number.isInteger(n)) {
//     return { parsed: false, reason: "must be a whole number" };
//   }
//   return { parsed: true, value: n };
// };

//convert

///

// //parse to proxy,

// function toSaveArgs<T extends Scalars>(o: ): U {
//   let result = {} as U;
//   //filtered keys
//   for (const k in o) {
//     result[k] = o[k].getSaveArgs();
//   }
//   return result;
// }

// function toLoadArgs<T, U>(o: Proxify<T, U>): T {
//   let result = {} as T;
//   //filtered keys
//   for (const k in o) {
//     result[k] = o[k].getLoadArgs();
//   }
//   return result;
// }
//parse
// //const parse : (row: ProductStrings) => ProductParsing = (row) => {
//   return {
//     name: parseName(row.name),
//     price: parsePrice(row.price),
//     unitOfMeasure: parseUnitOfMeasure(row.unitOfMeasure),
//     quantityPerUnit: parseInteger(row.quantityPerUnit),
//     brandName: parseString(row.brandName),
//     productType: parseString(row.productType),
//     category: parseString(row.category),
//   };
// };

// function convertArray<T, U>(valueArr: Array<T>, newValue: Array<U>): Array<U> {
//   return (valueArr.map(prop => {
//     convert<T, U>(prop) as U;
//   }) as unknown) as Array<U>;
// }

// function convert<T, U>(value: T, newValue?: U): U {
//   // if (value instanceof Array) {
//   //   return convertArray(value, newValue)
//   // }
//   console.log("Values");
//   console.log(value);
//   //check if new value is a class
//   if (value) {
//     return newValue as U;
//   }
//
//   type K1 = keyof U;
//
//   //check if value has id
//   //if value has id
//
//   //convert to string
//   //if type is string
//   //toString
//
//   //check numbers
//   //
//
//   //check
//   return (null as unknown) as U;
// }
//
// function getNameInSaveArgs<T>(name: string, args: T): string {
//   //name
//   //determine the name and type that the value should be.
//   //convert to the type needed...
//   let plural = "";
//   if (name.lastIndexOf("s") == name.length - 1) {
//     plural = "s";
//     name = name.slice(name.length - 1);
//   }
//   //get new name and set plural
//   let fieldIdName = lowercaseFirstLetter(name + "ID" + plural);
//   let fieldIDName = lowercaseFirstLetter(name + "Id" + plural);
//   let fieldReplaceIdwithID = lowercaseFirstLetter(name.replace("Id", "ID"));
//   let names = [name, fieldIdName, fieldIDName, fieldReplaceIdwithID];
//   //add to the save args value
//   //right here
//   for (const n of names) {
//     if (n in args) {
//       return n;
//     }
//   }
//   return "";
// }

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

export type DPoolListInput = {
  __typename?: "DPoolListInput";
  id?: Maybe<Scalars["ID"]>;
  DPoolIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numPools?: Maybe<Scalars["Int"]>;
  numUsers?: Maybe<Scalars["Int"]>;
  numActiveUsers?: Maybe<Scalars["Int"]>;
  numFunders?: Maybe<Scalars["Int"]>;
};

//pick and convert

export function toDPoolListInput(pool: DPoolList): DPoolListInput {
  let dpoolListInput: DPoolListInput = {
    __typename: "DPoolListInput",
    id: pool.id,
    numActiveUsers: parseInt(pool.numActiveUsers) || null,
    numPools: parseInt(pool.numPools), //int
    numUsers: parseInt(pool.numUsers), // convert to Int
    numFunders: parseInt(pool.numFunders),
    DPoolIDs: pool.poolIds
  };
  return dpoolListInput as DPoolListInput;
}

export function toDPoolList(poolInput: DPoolListInput): DPoolList {
  //pick args, and convert to the correct number
  let dpoolList: DPoolList = new DPoolList();
  //inputPoolList if isInput
  dpoolList.__typename = "DPoolList";
  dpoolList.id = poolInput.id;
  dpoolList.numActiveUsers = parseBigInt(poolInput.numActiveUsers);
  dpoolList.numUsers = parseBigInt(poolInput.numUsers);
  dpoolList.numFunders = parseBigInt(poolInput.numFunders);
  dpoolList.numPools = parseBigInt(poolInput.numFunders);
  dpoolList.poolIds = poolInput.DPoolIDs;

  //load
  //dpool.numActiveUsers = parseInt(poolInput, "load"),
  //dpool.numActiveDeposits = parseInt(poolInput, "load"),
  //"save"
  return dpoolList;
}

export class DPoolList {
  __typename?: "DPoolList";
  id?: Maybe<Scalars["ID"]>;
  pools?: Maybe<Array<Maybe<DPool>>>;
  numPools?: Maybe<Scalars["Int"]>;
  numUsers?: Maybe<Scalars["Int"]>;
  numActiveUsers?: Maybe<Scalars["Int"]>;
  numFunders?: Maybe<Scalars["Int"]>;
  proof?: Maybe<Proof>;
  poolIds?: Maybe<Array<Maybe<Scalars["String"]>>>;

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
      //entries &&
      let value = result.data.DPoolList;
      //value.__typename = "DPoolListInput";
      return toDPoolList(value) || null;
    }
    return null;
  }

  save(): void {
    var operationDocument = UpdateDPoolListDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }
  _getSaveArgs(): DPoolListInput {
    return toDPoolListInput(this) || ({} as DPoolListInput);
  }
}

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
  mphDepositorRewardMintMultiplier!: Maybe<Scalars["Float"]>;
  mphDepositorRewardTakeBackMultiplier!: Maybe<Scalars["Float"]>;

  constructor(id?: string) {
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<DPool> {
    var operationDocument = DPoolDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (result && result.data && result.data.DPool.__typename == "DPool") {
      return result.data.DPool as DPool;
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateDPoolDocument;
    var saveVariables = { input: this._getSaveArgs() };
    console.log(saveVariables, this._getSaveArgs());
    gqlFetch(operationDocument, saveVariables);
  }

  // convertToType(type, type, value) {}
  // let valueIds: Array<any> = [];
  // (value as Array<{ [x: string]: any }>).map(
  //   (v: { [x: string]: any }) => {
  //     if ("id" in v) {
  //       valueIds.push(v["id"]);
  //     }
  //   }
  //else (
  //   hasFieldId &&
  //   !isList &&
  //   value.hasOwnProperty("id") &&
  //   saveArgs.hasOwnProperty(fieldIdName)
  // ) {
  //   saveArgs[fieldIdName as keyof DPoolInput] = value.id;
  // }
  // //convert array type
  //

  _getSaveArgs(): DPoolInput {
    //input

    console.log("This");
    console.log(Object.entries(this));
    let saveArgs = {} as DPoolInput;
    //pick the parsed type
    console.log(Object.keys(saveArgs));

    type ProxifiedDPool = Proxify<DPool>; //proxy type
    //map object entries to proxy type, proxify

    //deproxify (convert, saveArgs)

    //get the union of the type and the input, then infer input

    for (const key in this) {
      console.log("Key");
      console.log(key);
      //console.log("Value");

      //console.log(value);
      let value = this[key];
      type valType = typeof value;
      let name = getNameInSaveArgs(key, saveArgs);
      console.log("Names");
      console.log(name);
      if (name == "") {
        continue;
      }
      let v = getProperty(saveArgs, name as keyof DPoolInput);
      type inputType = typeof v;
      console.log(typeof v);
      console.log(v);
      if (value == undefined || v == undefined) {
        continue;
      }

      if (value instanceof Array) {
        //newValue
        //setProperty
        //v = convertArray(value);
        console.log(value);
      } else {
        v = convert(value);
      }
      setProperty(saveArgs, name as keyof DPoolInput, v);
      //set value //
    }
    return saveArgs as DPoolInput;
  }
}

// function map<T>(values: Partial<T>, ctor: new () => T): T {
//     const instance = new ctor();
//
//     return Object.keys(instance).reduce((acc, key): {} => {
//         acc[key] = values[key];
//         return acc;
//     }, {}) as T;
//  }

export type DPoolInput = {
  id?: Maybe<Scalars["ID"]>;
  address?: Maybe<Scalars["String"]>;
  moneyMarket?: Maybe<Scalars["String"]>;
  stablecoin?: Maybe<Scalars["String"]>;
  interestModel?: Maybe<Scalars["String"]>;
  UserIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numUsers?: Maybe<Scalars["String"]>;
  DepositIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numDeposits?: Maybe<Scalars["String"]>;
  numActiveDeposits?: Maybe<Scalars["String"]>;
  totalActiveDeposit?: Maybe<Scalars["String"]>;
  totalHistoricalDeposit?: Maybe<Scalars["String"]>;
  totalInterestPaid?: Maybe<Scalars["String"]>;
  unfundedDepositAmount?: Maybe<Scalars["String"]>;
  FunderIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numFunders?: Maybe<Scalars["String"]>;
  FundingIDs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  numFundings?: Maybe<Scalars["String"]>;
  MinDepositPeriod?: Maybe<Scalars["String"]>;
  MaxDepositPeriod?: Maybe<Scalars["String"]>;
  MinDepositAmount?: Maybe<Scalars["String"]>;
  MaxDepositAmount?: Maybe<Scalars["String"]>;
  mphMintingMultiplier?: Maybe<Scalars["String"]>;
  mphDepositorRewardMultiplier?: Maybe<Scalars["String"]>;
  mphFunderRewardMultiplier?: Maybe<Scalars["String"]>;
  oneYearInterestRate?: Maybe<Scalars["String"]>;
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
  poolIds!: Maybe<Array<Scalars["String"]>>;

  constructor(id?: string) {
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<User> {
    var operationDocument = UserDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (result && result.data && result.data.User.__typename == "User") {
      return result.data.User as User;
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateUserDocument;
    let saveArgs = this._getSaveArgs();

    var saveVariables = { input: saveArgs };
    gqlFetch(operationDocument, saveVariables);
  }

  _getSaveArgs(): UserInput {
    //input
    let saveArgs: UserInput = {};
    console.log("This");
    console.log(Object.entries(this));
    for (const [name, value] of Object.entries(this)) {
      let hasField = saveArgs.hasOwnProperty(name);
      let fieldIdName = lowercaseFirstLetter(name.replace("Id", ""));
      let hasFieldId = saveArgs.hasOwnProperty(name);

      if (!hasFieldId && !hasField) {
        continue;
      }
      let isList = value instanceof Array;
      if (
        hasFieldId &&
        isList &&
        value instanceof Array &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        let valueIds: Array<any> = [];
        (value as Array<{ [x: string]: any }>).map(
          (v: { [x: string]: any }) => {
            if ("id" in v) {
              valueIds.push(v["id"]);
            }
          }
        );
        saveArgs[fieldIdName as keyof UserInput] = valueIds as any;
      } else if (
        hasFieldId &&
        !isList &&
        value.hasOwnProperty("id") &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        saveArgs[fieldIdName as keyof UserInput] = value.id;
      } else {
        saveArgs[name as keyof UserInput] = value;
      }
    }
    return saveArgs;
  }
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
  poolId: Maybe<string> | undefined;
  userId: Maybe<string> | undefined;

  constructor(id?: string) {
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
      result.data &&
      result.data.UserTotalDeposit.__typename == "UserTotalDeposit"
    ) {
      return result.data.UserTotalDeposit as UserTotalDeposit;
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateUserTotalDepositDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }

  _getSaveArgs(): UserTotalDepositInput {
    //input
    let saveArgs: UserTotalDepositInput = {};

    for (const [name, value] of Object.entries(this)) {
      let hasField = saveArgs.hasOwnProperty(name);
      let fieldIdName = lowercaseFirstLetter(name.replace("Id", ""));
      let hasFieldId = saveArgs.hasOwnProperty(name);

      if (!hasFieldId && !hasField) {
        continue;
      }
      let isList = value instanceof Array;
      if (
        hasFieldId &&
        isList &&
        value instanceof Array &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        let valueIds: Array<any> = [];
        (value as Array<{ [x: string]: any }>).map(
          (v: { [x: string]: any }) => {
            if ("id" in v) {
              valueIds.push(v["id"]);
            }
          }
        );
        saveArgs[fieldIdName as keyof UserTotalDepositInput] = valueIds as any;
      } else if (
        hasFieldId &&
        !isList &&
        value.hasOwnProperty("id") &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        saveArgs[fieldIdName as keyof UserTotalDepositInput] = value.id;
      } else {
        saveArgs[name as keyof UserTotalDepositInput] = value;
      }
    }
    return saveArgs;
  }
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
  id!: Scalars["ID"];
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
  userId: Maybe<string> | undefined;
  poolId: Maybe<string> | undefined;
  depositLength: any;
  fundingInterestPaid!: BigNumber;
  fundingRefundAmount!: BigNumber;

  constructor(id: string) {
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<Deposit> {
    var operationDocument = DepositDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (result && result.data && result.data.Deposit.__typename == "Deposit") {
      return result.data.Deposit as Deposit;
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateDepositDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }

  _getSaveArgs(): DepositInput {
    //input
    let saveArgs: DepositInput = {};

    for (const [name, value] of Object.entries(this)) {
      let hasField = saveArgs.hasOwnProperty(name);
      let fieldIdName = lowercaseFirstLetter(name.replace("Id", ""));
      let hasFieldId = saveArgs.hasOwnProperty(name);

      if (!hasFieldId && !hasField) {
        continue;
      }
      let isList = value instanceof Array;
      if (
        hasFieldId &&
        isList &&
        value instanceof Array &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        let valueIds: Array<any> = [];
        (value as Array<{ [x: string]: any }>).map(
          (v: { [x: string]: any }) => {
            if ("id" in v) {
              valueIds.push(v["id"]);
            }
          }
        );
        saveArgs[fieldIdName as keyof DepositInput] = valueIds as any;
      } else if (
        hasFieldId &&
        !isList &&
        value.hasOwnProperty("id") &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        saveArgs[fieldIdName as keyof DepositInput] = value.id;
      } else {
        saveArgs[name as keyof DepositInput] = value;
      }
    }
    return saveArgs;
  }
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
  poolId!: string;
  funderId: Maybe<string> | undefined;

  constructor(id?: string) {
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
      result.data &&
      result.data.FunderTotalInterest.__typename == "FunderTotalInterest"
    ) {
      return result.data.FunderTotalInterest as FunderTotalInterest;
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateFunderTotalInterestDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }

  _getSaveArgs(): FunderTotalInterestInput {
    //input
    let saveArgs: FunderTotalInterestInput = {};

    for (const [name, value] of Object.entries(this)) {
      let hasField = saveArgs.hasOwnProperty(name);
      let fieldIdName = lowercaseFirstLetter(name.replace("Id", ""));
      let hasFieldId = saveArgs.hasOwnProperty(name);

      if (!hasFieldId && !hasField) {
        continue;
      }
      let isList = value instanceof Array;
      if (
        hasFieldId &&
        isList &&
        value instanceof Array &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        let valueIds: Array<any> = [];
        (value as Array<{ [x: string]: any }>).map(
          (v: { [x: string]: any }) => {
            if ("id" in v) {
              valueIds.push(v["id"]);
            }
          }
        );
        saveArgs[
          fieldIdName as keyof FunderTotalInterestInput
        ] = valueIds as any;
      } else if (
        hasFieldId &&
        !isList &&
        value.hasOwnProperty("id") &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        saveArgs[fieldIdName as keyof FunderTotalInterestInput] = value.id;
      } else {
        saveArgs[name as keyof FunderTotalInterestInput] = value;
      }
    }
    return saveArgs;
  }
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
  mphRewardEarned!: BigNumber;
  refundAmount!: BigNumber;
  creationTimestamp: any;
  poolId: Maybe<string> | undefined;
  funderId: Maybe<string> | undefined;

  constructor(id?: string) {
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<Funding> {
    var operationDocument = FundingDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (result && result.data && result.data.Funding.__typename == "Funding") {
      return result.data.Funding as Funding;
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateFundingDocument;
    var args = this._getSaveArgs();
    var saveVariables = { input: args };
    gqlFetch(operationDocument, saveVariables);
  }

  _getSaveArgs(): FundingInput {
    //input
    let saveArgs: FundingInput = {};
    console.log(this);
    for (const [name, value] of Object.entries(this)) {
      console.log(name.toString());
      console.log(value);
      let hasField = saveArgs.hasOwnProperty(name);
      let fieldIdName = lowercaseFirstLetter(name.replace("Id", ""));
      let hasFieldId = saveArgs.hasOwnProperty(name);

      if (!hasFieldId && !hasField) {
        continue;
      }
      let isList = value instanceof Array;
      if (
        hasFieldId &&
        isList &&
        value instanceof Array &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        let valueIds: Array<any> = [];
        (value as Array<{ [x: string]: any }>).map(
          (v: { [x: string]: any }) => {
            if ("id" in v) {
              valueIds.push(v["id"]);
            }
          }
        );
        saveArgs[fieldIdName as keyof FundingInput] = valueIds as any;
      } else if (
        hasFieldId &&
        !isList &&
        value.hasOwnProperty("id") &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        saveArgs[fieldIdName as keyof FundingInput] = value.id;
      } else {
        saveArgs[name as keyof FundingInput] = value;
      }
    }

    return saveArgs;
  }
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

  constructor(id?: string) {
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
      result.data &&
      result.data.MPHHolder.__typename == "MPHHolder"
    ) {
      return result.data.MPHHolder as MPHHolder;
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateMPHHolderDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }

  _getSaveArgs(): MPHHolderInput {
    //input
    let saveArgs: MPHHolderInput = {};

    for (const [name, value] of Object.entries(this)) {
      let hasField = saveArgs.hasOwnProperty(name);
      let fieldIdName = lowercaseFirstLetter(name.replace("Id", ""));
      let hasFieldId = saveArgs.hasOwnProperty(name);

      if (!hasFieldId && !hasField) {
        continue;
      }
      let isList = value instanceof Array;
      if (
        hasFieldId &&
        isList &&
        value instanceof Array &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        let valueIds: Array<any> = [];
        (value as Array<{ [x: string]: any }>).map(
          (v: { [x: string]: any }) => {
            if ("id" in v) {
              valueIds.push(v["id"]);
            }
          }
        );
        saveArgs[fieldIdName as keyof MPHHolderInput] = valueIds as any;
      } else if (
        hasFieldId &&
        !isList &&
        value.hasOwnProperty("id") &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        saveArgs[fieldIdName as keyof MPHHolderInput] = value.id;
      } else {
        saveArgs[name as keyof MPHHolderInput] = value;
      }
    }
    return saveArgs;
  }
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

  constructor(id?: string) {
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<MPH> {
    var operationDocument = MPHDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (result && result.data && result.data.MPH.__typename == "MPH") {
      return result.data.MPH as MPH;
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateMPHDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }

  _getSaveArgs(): MPHInput {
    //input
    let saveArgs: MPHInput = {};

    for (const [name, value] of Object.entries(this)) {
      let hasField = saveArgs.hasOwnProperty(name);
      let fieldIdName = lowercaseFirstLetter(name.replace("Id", ""));
      let hasFieldId = saveArgs.hasOwnProperty(name);

      if (!hasFieldId && !hasField) {
        continue;
      }
      let isList = value instanceof Array;
      if (
        hasFieldId &&
        isList &&
        value instanceof Array &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        let valueIds: Array<any> = [];
        (value as Array<{ [x: string]: any }>).map(
          (v: { [x: string]: any }) => {
            if ("id" in v) {
              valueIds.push(v["id"]);
            }
          }
        );
        saveArgs[fieldIdName as keyof MPHInput] = valueIds as any;
      } else if (
        hasFieldId &&
        !isList &&
        value.hasOwnProperty("id") &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        saveArgs[fieldIdName as keyof MPHInput] = value.id;
      } else {
        saveArgs[name as keyof MPHInput] = value;
      }
    }
    return saveArgs;
  }
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
  poolIds!: Maybe<Array<Scalars["String"]>>;

  constructor(id?: string) {
    if (id) {
      this.id = id;
    }
  }
  static load(id: string, prove: boolean = false): Maybe<Funder> {
    var operationDocument = FunderDocument;
    const loadVariables = { id: id, prove: prove };
    var result = gqlFetch(operationDocument, loadVariables);
    if (result && result.data && result.data.Funder.__typename == "Funder") {
      return result.data.Funder as Funder;
    }
    return null;
  }
  save(): void {
    var operationDocument = UpdateFunderDocument;
    var saveVariables = { input: this._getSaveArgs() };
    gqlFetch(operationDocument, saveVariables);
  }

  _getSaveArgs(): FunderInput {
    //input
    let saveArgs: FunderInput = {};

    for (const [name, value] of Object.entries(this)) {
      let hasField = saveArgs.hasOwnProperty(name);
      let fieldIdName = lowercaseFirstLetter(name.replace("Id", ""));
      let hasFieldId = saveArgs.hasOwnProperty(name);

      if (!hasFieldId && !hasField) {
        continue;
      }
      let isList = value instanceof Array;
      if (
        hasFieldId &&
        isList &&
        value instanceof Array &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        let valueIds: Array<any> = [];
        (value as Array<{ [x: string]: any }>).map(
          (v: { [x: string]: any }) => {
            if ("id" in v) {
              valueIds.push(v["id"]);
            }
          }
        );
        saveArgs[fieldIdName as keyof FunderInput] = valueIds as any;
      } else if (
        hasFieldId &&
        !isList &&
        value.hasOwnProperty("id") &&
        saveArgs.hasOwnProperty(fieldIdName)
      ) {
        saveArgs[fieldIdName as keyof FunderInput] = value.id;
      } else {
        saveArgs[name as keyof FunderInput] = value;
      }
    }
    return saveArgs;
  }
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
  DPoolList: { __typename?: "DPoolListInput" } & Pick<
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

export const userDocument: DocumentNode<userQuery, userQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "user" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
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
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalMPHEarned" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalMPHPaidBack" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pools" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" }
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "mphDepositorRewardMultiplier"
                        }
                      }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalDepositByPool" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pool" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "stablecoin" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalActiveDeposit" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalInterestEarned" }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const dpoolsDocument: DocumentNode<dpoolsQuery, dpoolsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "dpools" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "DPools" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "address" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalActiveDeposit" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "oneYearInterestRate" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mphDepositorRewardMultiplier" }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const funderDocument: DocumentNode<funderQuery, funderQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "funder" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
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
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalMPHEarned" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pools" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fundings" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pool" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" }
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "oracleInterestRate"
                                    }
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "moneyMarketIncomeIndex"
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fromDepositID" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "toDepositID" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftID" }
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "recordedFundedDepositAmount"
                              }
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "recordedMoneyMarketIncomeIndex"
                              }
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "initialFundedDepositAmount"
                              }
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "fundedDeficitAmount"
                              }
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "totalInterestEarned"
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalInterestByPool" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pool" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" }
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "stablecoin" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalDeficitFunded" }
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "totalRecordedFundedDepositAmount"
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalInterestEarned" }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const dpoolsLatestDocument: DocumentNode<
  dpoolsLatestQuery,
  dpoolsLatestQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "dpoolsLatest" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "DPools" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "address" } },
                { kind: "Field", name: { kind: "Name", value: "surplus" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "unfundedDepositAmount" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "oneYearInterestRate" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "oracleInterestRate" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mphFunderRewardMultiplier" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "deposits" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "nftID" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const dpoolsLatestDepositsDocument: DocumentNode<
  dpoolsLatestDepositsQuery,
  dpoolsLatestDepositsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "dpoolsLatestDeposits" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          }
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
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "moneyMarketIncomeIndex" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "deposits" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "nftID" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "active" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "maturationTimestamp" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "interestEarned" }
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "initialMoneyMarketIncomeIndex"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
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
                { kind: "Field", name: { kind: "Name", value: "numPools" } },
                { kind: "Field", name: { kind: "Name", value: "numUsers" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "numActiveUsers" }
                },
                { kind: "Field", name: { kind: "Name", value: "numFunders" } }
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
            name: { kind: "Name", value: "updateDPoolList" },
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
                { kind: "Field", name: { kind: "Name", value: "numUsers" } },
                { kind: "Field", name: { kind: "Name", value: "numDeposits" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "numActiveDeposits" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalActiveDeposit" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalHistoricalDeposit" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalInterestPaid" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "unfundedDepositAmount" }
                },
                { kind: "Field", name: { kind: "Name", value: "numFunders" } },
                { kind: "Field", name: { kind: "Name", value: "numFundings" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "MinDepositPeriod" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "MaxDepositPeriod" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "MinDepositAmount" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "MaxDepositAmount" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mphMintingMultiplier" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mphDepositorRewardMultiplier" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mphFunderRewardMultiplier" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "oneYearInterestRate" }
                },
                { kind: "Field", name: { kind: "Name", value: "surplus" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "moneyMarketIncomeIndex" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "oracleInterestRate" }
                }
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
            name: { kind: "Name", value: "updateDPool" },
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
                { kind: "Field", name: { kind: "Name", value: "numPools" } },
                { kind: "Field", name: { kind: "Name", value: "numDeposits" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "numActiveDeposits" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalMPHEarned" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalMPHPaidBack" }
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
            name: { kind: "Name", value: "updateUser" },
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
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalActiveDeposit" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalHistoricalDeposit" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalInterestEarned" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalHistoricalInterestEarned" }
                }
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
            name: { kind: "Name", value: "updateUserTotalDeposit" },
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
                { kind: "Field", name: { kind: "Name", value: "nftID" } },
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "maturationTimestamp" }
                },
                { kind: "Field", name: { kind: "Name", value: "active" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "depositTimestamp" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "interestEarned" }
                },
                { kind: "Field", name: { kind: "Name", value: "fundingID" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mintMPHAmount" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "takeBackMPHAmount" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "initialMoneyMarketIncomeIndex" }
                }
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
            name: { kind: "Name", value: "updateDeposit" },
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
                { kind: "Field", name: { kind: "Name", value: "numPools" } },
                { kind: "Field", name: { kind: "Name", value: "numFundings" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalMPHEarned" }
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
            name: { kind: "Name", value: "updateFunder" },
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
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalDeficitFunded" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalHistoricalDeficitFunded" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalInterestEarned" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalHistoricalInterestEarned" }
                },
                {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "totalRecordedFundedDepositAmount"
                  }
                }
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
            name: { kind: "Name", value: "updateFunderTotalInterest" },
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
                { kind: "Field", name: { kind: "Name", value: "nftID" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "fromDepositID" }
                },
                { kind: "Field", name: { kind: "Name", value: "toDepositID" } },
                { kind: "Field", name: { kind: "Name", value: "active" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "recordedFundedDepositAmount" }
                },
                {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "recordedMoneyMarketIncomeIndex"
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "initialFundedDepositAmount" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "fundedDeficitAmount" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalInterestEarned" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mintMPHAmount" }
                }
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
            name: { kind: "Name", value: "updateFunding" },
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
                { kind: "Field", name: { kind: "Name", value: "address" } },
                { kind: "Field", name: { kind: "Name", value: "mphBalance" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "stakedMPHBalance" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalHistoricalReward" }
                }
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
            name: { kind: "Name", value: "updateMPHHolder" },
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
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "totalSupply" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalStakedMPHBalance" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalHistoricalReward" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "rewardPerSecond" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "rewardPerMPHPerSecond" }
                }
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
            name: { kind: "Name", value: "updateMPH" },
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
  console.log(operation);
  console.log(variables);
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
// function arr<T, U>(
//   arr: any,
//   arg1: any,
//   idKey: any,
//   TK: any,
//   titleKey: any,
//   TK: any
// ) {
//   throw new Error("Function not implemented.");
// }
