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

interface ZeroCouponBondInterface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "fractionalDepositFactory()": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "init(address,address,uint256,string,string)": FunctionFragment;
    "initialized()": FunctionFragment;
    "maturationTimestamp()": FunctionFragment;
    "mintWithDepositNFT(uint256,string,string)": FunctionFragment;
    "name()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "pool()": FunctionFragment;
    "redeemFractionalDepositShares(address,uint256)": FunctionFragment;
    "redeemStablecoin(uint256)": FunctionFragment;
    "stablecoin()": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fractionalDepositFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [string, string, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maturationTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintWithDepositNFT",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeemFractionalDepositShares",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemStablecoin",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stablecoin",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fractionalDepositFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maturationTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintWithDepositNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemFractionalDepositShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemStablecoin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stablecoin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Mint(address,address,uint256)": EventFragment;
    "RedeemFractionalDepositShares(address,address,uint256)": EventFragment;
    "RedeemStablecoin(address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RedeemFractionalDepositShares"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RedeemStablecoin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class ZeroCouponBond extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ZeroCouponBondInterface;

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    decimals(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "decimals()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
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

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    init(
      _pool: string,
      _fractionalDepositFactory: string,
      _maturationTimestamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "init(address,address,uint256,string,string)"(
      _pool: string,
      _fractionalDepositFactory: string,
      _maturationTimestamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initialized(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "initialized()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    maturationTimestamp(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "maturationTimestamp()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    mintWithDepositNFT(
      nftID: BigNumberish,
      fractionalDepositName: string,
      fractionalDepositSymbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mintWithDepositNFT(uint256,string,string)"(
      nftID: BigNumberish,
      fractionalDepositName: string,
      fractionalDepositSymbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    name(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "name()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    pool(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "pool()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    redeemFractionalDepositShares(
      fractionalDepositAddress: string,
      fundingID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "redeemFractionalDepositShares(address,uint256)"(
      fractionalDepositAddress: string,
      fundingID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    redeemStablecoin(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "redeemStablecoin(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stablecoin(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "stablecoin()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    symbol(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "symbol()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    totalSupply(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalSupply()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "decreaseAllowance(address,uint256)"(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  fractionalDepositFactory(overrides?: CallOverrides): Promise<string>;

  "fractionalDepositFactory()"(overrides?: CallOverrides): Promise<string>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "increaseAllowance(address,uint256)"(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  init(
    _pool: string,
    _fractionalDepositFactory: string,
    _maturationTimestamp: BigNumberish,
    _tokenName: string,
    _tokenSymbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "init(address,address,uint256,string,string)"(
    _pool: string,
    _fractionalDepositFactory: string,
    _maturationTimestamp: BigNumberish,
    _tokenName: string,
    _tokenSymbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  "initialized()"(overrides?: CallOverrides): Promise<boolean>;

  maturationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "maturationTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  mintWithDepositNFT(
    nftID: BigNumberish,
    fractionalDepositName: string,
    fractionalDepositSymbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mintWithDepositNFT(uint256,string,string)"(
    nftID: BigNumberish,
    fractionalDepositName: string,
    fractionalDepositSymbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  onERC721Received(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onERC721Received(address,address,uint256,bytes)"(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  pool(overrides?: CallOverrides): Promise<string>;

  "pool()"(overrides?: CallOverrides): Promise<string>;

  redeemFractionalDepositShares(
    fractionalDepositAddress: string,
    fundingID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "redeemFractionalDepositShares(address,uint256)"(
    fractionalDepositAddress: string,
    fundingID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  redeemStablecoin(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "redeemStablecoin(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stablecoin(overrides?: CallOverrides): Promise<string>;

  "stablecoin()"(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    fractionalDepositFactory(overrides?: CallOverrides): Promise<string>;

    "fractionalDepositFactory()"(overrides?: CallOverrides): Promise<string>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    init(
      _pool: string,
      _fractionalDepositFactory: string,
      _maturationTimestamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "init(address,address,uint256,string,string)"(
      _pool: string,
      _fractionalDepositFactory: string,
      _maturationTimestamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    "initialized()"(overrides?: CallOverrides): Promise<boolean>;

    maturationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "maturationTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintWithDepositNFT(
      nftID: BigNumberish,
      fractionalDepositName: string,
      fractionalDepositSymbol: string,
      overrides?: CallOverrides
    ): Promise<{
      zeroCouponBondsAmount: BigNumber;
      fractionalDeposit: string;
      0: BigNumber;
      1: string;
    }>;

    "mintWithDepositNFT(uint256,string,string)"(
      nftID: BigNumberish,
      fractionalDepositName: string,
      fractionalDepositSymbol: string,
      overrides?: CallOverrides
    ): Promise<{
      zeroCouponBondsAmount: BigNumber;
      fractionalDeposit: string;
      0: BigNumber;
      1: string;
    }>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    pool(overrides?: CallOverrides): Promise<string>;

    "pool()"(overrides?: CallOverrides): Promise<string>;

    redeemFractionalDepositShares(
      fractionalDepositAddress: string,
      fundingID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "redeemFractionalDepositShares(address,uint256)"(
      fractionalDepositAddress: string,
      fundingID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    redeemStablecoin(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "redeemStablecoin(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stablecoin(overrides?: CallOverrides): Promise<string>;

    "stablecoin()"(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    Mint(
      sender: string | null,
      fractionalDepositAddress: string | null,
      amount: null
    ): EventFilter;

    RedeemFractionalDepositShares(
      sender: string | null,
      fractionalDepositAddress: string | null,
      fundingID: null
    ): EventFilter;

    RedeemStablecoin(sender: string | null, amount: null): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    fractionalDepositFactory(overrides?: CallOverrides): Promise<BigNumber>;

    "fractionalDepositFactory()"(overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    init(
      _pool: string,
      _fractionalDepositFactory: string,
      _maturationTimestamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "init(address,address,uint256,string,string)"(
      _pool: string,
      _fractionalDepositFactory: string,
      _maturationTimestamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    "initialized()"(overrides?: CallOverrides): Promise<BigNumber>;

    maturationTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "maturationTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintWithDepositNFT(
      nftID: BigNumberish,
      fractionalDepositName: string,
      fractionalDepositSymbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mintWithDepositNFT(uint256,string,string)"(
      nftID: BigNumberish,
      fractionalDepositName: string,
      fractionalDepositSymbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    "pool()"(overrides?: CallOverrides): Promise<BigNumber>;

    redeemFractionalDepositShares(
      fractionalDepositAddress: string,
      fundingID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "redeemFractionalDepositShares(address,uint256)"(
      fractionalDepositAddress: string,
      fundingID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    redeemStablecoin(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "redeemStablecoin(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stablecoin(overrides?: CallOverrides): Promise<BigNumber>;

    "stablecoin()"(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    fractionalDepositFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fractionalDepositFactory()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    init(
      _pool: string,
      _fractionalDepositFactory: string,
      _maturationTimestamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "init(address,address,uint256,string,string)"(
      _pool: string,
      _fractionalDepositFactory: string,
      _maturationTimestamp: BigNumberish,
      _tokenName: string,
      _tokenSymbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "initialized()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maturationTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maturationTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintWithDepositNFT(
      nftID: BigNumberish,
      fractionalDepositName: string,
      fractionalDepositSymbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mintWithDepositNFT(uint256,string,string)"(
      nftID: BigNumberish,
      fractionalDepositName: string,
      fractionalDepositSymbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pool()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeemFractionalDepositShares(
      fractionalDepositAddress: string,
      fundingID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "redeemFractionalDepositShares(address,uint256)"(
      fractionalDepositAddress: string,
      fundingID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    redeemStablecoin(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "redeemStablecoin(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stablecoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stablecoin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
