/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ZeroCouponBondFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createZeroCouponBond(address,uint256,string,string)": FunctionFragment;
    "fractionalDepositFactory()": FunctionFragment;
    "isZeroCouponBond(address)": FunctionFragment;
    "template()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createZeroCouponBond",
    values: [string, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "fractionalDepositFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isZeroCouponBond",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "template", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "createZeroCouponBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fractionalDepositFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isZeroCouponBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "template", data: BytesLike): Result;

  events: {
    "CreateClone(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateClone"): EventFragment;
}

export class ZeroCouponBondFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ZeroCouponBondFactoryInterface;

  functions: {
    createZeroCouponBond(
      _pool: string,
      _maturationTimetstamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createZeroCouponBond(address,uint256,string,string)"(
      _pool: string,
      _maturationTimetstamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    fractionalDepositFactory(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "fractionalDepositFactory()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    isZeroCouponBond(
      query: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isZeroCouponBond(address)"(
      query: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    template(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "template()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  createZeroCouponBond(
    _pool: string,
    _maturationTimetstamp: BigNumberish,
    _tokenName: string,
    _tokenSymbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createZeroCouponBond(address,uint256,string,string)"(
    _pool: string,
    _maturationTimetstamp: BigNumberish,
    _tokenName: string,
    _tokenSymbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  fractionalDepositFactory(overrides?: CallOverrides): Promise<string>;

  "fractionalDepositFactory()"(overrides?: CallOverrides): Promise<string>;

  isZeroCouponBond(query: string, overrides?: CallOverrides): Promise<boolean>;

  "isZeroCouponBond(address)"(
    query: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  template(overrides?: CallOverrides): Promise<string>;

  "template()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    createZeroCouponBond(
      _pool: string,
      _maturationTimetstamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createZeroCouponBond(address,uint256,string,string)"(
      _pool: string,
      _maturationTimetstamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: CallOverrides
    ): Promise<string>;

    fractionalDepositFactory(overrides?: CallOverrides): Promise<string>;

    "fractionalDepositFactory()"(overrides?: CallOverrides): Promise<string>;

    isZeroCouponBond(
      query: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isZeroCouponBond(address)"(
      query: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    template(overrides?: CallOverrides): Promise<string>;

    "template()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    CreateClone(_clone: null): EventFilter;
  };

  estimateGas: {
    createZeroCouponBond(
      _pool: string,
      _maturationTimetstamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createZeroCouponBond(address,uint256,string,string)"(
      _pool: string,
      _maturationTimetstamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    fractionalDepositFactory(overrides?: CallOverrides): Promise<BigNumber>;

    "fractionalDepositFactory()"(overrides?: CallOverrides): Promise<BigNumber>;

    isZeroCouponBond(
      query: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isZeroCouponBond(address)"(
      query: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    template(overrides?: CallOverrides): Promise<BigNumber>;

    "template()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createZeroCouponBond(
      _pool: string,
      _maturationTimetstamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createZeroCouponBond(address,uint256,string,string)"(
      _pool: string,
      _maturationTimetstamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    fractionalDepositFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fractionalDepositFactory()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isZeroCouponBond(
      query: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isZeroCouponBond(address)"(
      query: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    template(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "template()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
