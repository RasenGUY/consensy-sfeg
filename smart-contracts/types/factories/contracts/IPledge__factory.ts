/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { IPledge, IPledgeInterface } from "../../contracts/IPledge";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getNFT",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "gradientOne",
            type: "string",
          },
          {
            internalType: "string",
            name: "gradientTwo",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "diameter",
            type: "uint256",
          },
        ],
        internalType: "struct IPledge.PledgeNFT",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNFTs",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "gradientOne",
            type: "string",
          },
          {
            internalType: "string",
            name: "gradientTwo",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "diameter",
            type: "uint256",
          },
        ],
        internalType: "struct IPledge.PledgeNFT[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getNFTsOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "gradientOne",
            type: "string",
          },
          {
            internalType: "string",
            name: "gradientTwo",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "diameter",
            type: "uint256",
          },
        ],
        internalType: "struct IPledge.PledgeNFT[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "gradientOne",
            type: "string",
          },
          {
            internalType: "string",
            name: "gradientTwo",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "diameter",
            type: "uint256",
          },
        ],
        internalType: "struct IPledge.MintParams[]",
        name: "",
        type: "tuple[]",
      },
    ],
    name: "mintMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "gradientOne",
            type: "string",
          },
          {
            internalType: "string",
            name: "gradientTwo",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "diameter",
            type: "uint256",
          },
        ],
        internalType: "struct IPledge.MintParams",
        name: "",
        type: "tuple",
      },
    ],
    name: "mintPledge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPledge__factory {
  static readonly abi = _abi;
  static createInterface(): IPledgeInterface {
    return new Interface(_abi) as IPledgeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IPledge {
    return new Contract(address, _abi, runner) as unknown as IPledge;
  }
}
