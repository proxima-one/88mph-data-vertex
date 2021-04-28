/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ethers, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { IInterestOracle } from "../IInterestOracle";

export class IInterestOracle__factory {


static bind(address: string, provider?: Signer | Provider): IInterestOracle {
  if (!provider) {
    provider = ethers.getDefaultProvider("mainnet");
  }
  return new Contract(address, _abi, provider) as IInterestOracle;
}
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IInterestOracle {
    return new Contract(address, _abi, signerOrProvider) as IInterestOracle;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "moneyMarket",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "query",
    outputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "updateAndQuery",
    outputs: [
      {
        internalType: "bool",
        name: "updated",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
