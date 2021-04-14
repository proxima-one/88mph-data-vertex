"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT__factory = void 0;
var ethers_1 = require("ethers");
//import { Address } from "@graphprotocol/graph-ts";
var NFT__factory = /** @class */ (function () {
    function NFT__factory() {
    }
    NFT__factory.bind = function (address, provider) {
        if (!provider) {
            provider = ethers_1.ethers.getDefaultProvider("mainnet");
        }
        return this.connect(address.toString(), provider);
    };
    NFT__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return NFT__factory;
}());
exports.NFT__factory = NFT__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool"
            }
        ],
        name: "ApprovalForAll",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "baseURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "burn",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "operator",
                type: "address"
            }
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "isOwner",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "mint",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            }
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool"
            }
        ],
        name: "setApprovalForAll",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4"
            }
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "transferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    }
];
//# sourceMappingURL=NFT__factory.js.map