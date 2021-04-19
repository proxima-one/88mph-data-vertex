//proxy

//proxify

//convert

//tosaveargs

//toloadargs
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

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
}
function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}

function lowercaseFirstLetter(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
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

type Proxy<T, U> = {
  setLoadArgs(value: T): void;
  setSaveArgs(value: U): void;
  getSaveArgs(): U;
  getLoadArgs(): T;
  //extra values
  //
};

declare function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;

type Filter<T, U> = T extends U ? T : never;

type ProxyValue<T> = NonNullable<T>;

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T];

type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

type Proxify<T, U> = {
  [P in keyof T]?: P extends keyof U
    ? Proxy<NonNullable<T[P]>, NonNullable<U[P]>>
    : never
};

function parse<T, U>(o: T, opname?: string): Proxify<T, U> {
  let result = {} as Proxify<T, U>;
  let u = {} as U;
  //new Proxify
  let t = {} as T;
  const entries = Object.entries(o);

  for (const p of entries) {
    //check that it is in proxy, and results
    if (p[0] && p[1]) {
      let m = u[p[0] as keyof U]; //pick
      type M = typeof m;
      let l = t[p[0] as keyof T];
      type L = typeof l;

      //check if nonnullable != never
      //type P = ReturnType<f>;
      //filter non nullable and defined
      //let L pick
      //ThisParameterType<typeof toHex>
      //ReturnType<>
      //if there are any opcodes
      var pVal: Proxy<NonNullable<L>, NonNullable<M>> = parseProxy<
        NonNullable<L>,
        NonNullable<M>
      >(p[1]);
      setProperty(result, p[0] as keyof T, pVal);
    }
  }
  return result;
}

//function parseRecords<Record<...>>()

function parseProxy<L, M>(o: L | M, opname?: string): Proxy<L, M> {
  let m = {} as M;
  let l = {} as L;
  let parsed = {} as Proxy<L, M>;
  parsed.getLoadArgs = (): L => l;
  parsed.getSaveArgs = (): M => m;
  parsed.setLoadArgs = (l: L) => {
    l = l;
    m = convert<L, M>(l) as M;
  };
  parsed.setSaveArgs = (m: M) => {
    m = m;
    l = convert<M, L>(m) as L;
  };
  if (opname != undefined) {
    parsed.setLoadArgs(o as L);
  } else {
    parsed.setSaveArgs(o as M);
  }
  return parsed;
}

//getTypeFromScalars(T, "loadOrSave") {
//load is the integers/numbers
//save is the strings
//
//}

export function convert<F, T>(from: F): Maybe<T> {
  //type
  let to = instanceof T;
  let desiredType = getTypeName(to);
  switch (desiredType) {
    case "string":
      return parseString(from) as Maybe<T>;
    case "bigint":
      return parseBigInt(from) as Maybe<T>;
    case "number":
      return parseNumber(from) as Maybe<T>;
    case "object":
      return parseNumber(from) as Maybe<T>;
    default:
      return null;
  }
}

function parseNumber(val: any): Maybe<BigNumberish> {
  switch (typeof val) {
    case "string":
      return BigNumber.from(val);
    case "bigint":
      return BigNumber.from(val); //int
    case "number":
      return BigNumber.from(val);
    case "boolean":
      return BigNumber.from(val);
    default:
      return null;
  }
}

function parseString(val: any): Maybe<String> {
  console.log("parsing string");
  console.log(val);
  console.log(typeof val);
  switch (typeof val) {
    case "string":
      return val as string;
    case "bigint":
      return val.toString(); //int
    case "number":
      return val.toString();
    case "object":
      return val.toString();
    default:
      return null;
  }
}

function parseBigInt(val: any): Maybe<bigint> {
  switch (typeof val) {
    case "string":
      let c = BigInt(val);
      return c;
    case "bigint":
      return val; //int
    case "number":
      return BigInt(val);
    default:
      return null;
  }
}

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

// function toSaveArgs<T, U>(o: Proxify<T, U>): U {
//   let result = {} as U;
//   //filtered keys
//   for (const k in o) {
//     result[k] = o[k].getSaveArgs();
//   }
//   return result;
// }
//
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
