import { BigNumber, BigNumberish } from "ethers";
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
    String: string | BigInt | BigNumber | BigNumberish;
    Boolean: boolean;
    Int: BigInt | BigNumberish | number;
    Float: number | BigNumber | BigNumberish;
    BigDecimal: BigNumber | BigNumberish;
    BigInt: BigInt;
};
export declare function convert<F, T>(from: F, toType?: string): Maybe<T>;
export declare function parseNumber(val: any): Maybe<number>;
export declare function parseInt(val: any): Maybe<number>;
export declare function parseProof(val: any): Maybe<string>;
export declare function parseBigDecimal(val: any): Maybe<BigNumber>;
export declare function parseBigNumber(val: any): Maybe<BigNumber>;
export declare function parseString(val: any): Maybe<string>;
export declare function parseBigInt(val: any): Maybe<bigint>;
//# sourceMappingURL=utils.d.ts.map