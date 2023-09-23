/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWorldID, IWorldIDInterface } from "../IWorldID";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "root",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "signalHash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "externalNullifierHash",
        type: "uint256",
      },
      {
        internalType: "uint256[8]",
        name: "proof",
        type: "uint256[8]",
      },
    ],
    name: "verifyProof",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

export class IWorldID__factory {
  static readonly abi = _abi;
  static createInterface(): IWorldIDInterface {
    return new utils.Interface(_abi) as IWorldIDInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWorldID {
    return new Contract(address, _abi, signerOrProvider) as IWorldID;
  }
}
