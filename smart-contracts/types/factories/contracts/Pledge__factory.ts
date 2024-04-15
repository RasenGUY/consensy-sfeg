/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Pledge, PledgeInterface } from "../../contracts/Pledge";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        name: "mintParams",
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
        name: "mintParams",
        type: "tuple",
      },
    ],
    name: "mintPledge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ffc38038062001ffc8339810160408190526200003491620001b6565b3382826000620000458382620002af565b506001620000548282620002af565b5050506001600160a01b0381166200008657604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b62000091816200009f565b50506000600755506200037b565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200011957600080fd5b81516001600160401b0380821115620001365762000136620000f1565b604051601f8301601f19908116603f01168101908282118183101715620001615762000161620000f1565b816040528381526020925086838588010111156200017e57600080fd5b600091505b83821015620001a2578582018301518183018401529082019062000183565b600093810190920192909252949350505050565b60008060408385031215620001ca57600080fd5b82516001600160401b0380821115620001e257600080fd5b620001f08683870162000107565b935060208501519150808211156200020757600080fd5b50620002168582860162000107565b9150509250929050565b600181811c908216806200023557607f821691505b6020821081036200025657634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002aa57600081815260208120601f850160051c81016020861015620002855750805b601f850160051c820191505b81811015620002a65782815560010162000291565b5050505b505050565b81516001600160401b03811115620002cb57620002cb620000f1565b620002e381620002dc845462000220565b846200025c565b602080601f8311600181146200031b5760008415620003025750858301515b600019600386901b1c1916600185901b178555620002a6565b600085815260208120601f198616915b828110156200034c578886015182559484019460019091019084016200032b565b50858210156200036b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611c71806200038b6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c8063715018a6116100b8578063c25b60ae1161007c578063c25b60ae146102a3578063c8008ce8146102b6578063c87b56dd146102c9578063e1bc4c5f146102dc578063e985e9c5146102ef578063f2fde38b1461030257600080fd5b8063715018a61461025c5780638da5cb5b1461026457806395d89b4114610275578063a22cb4651461027d578063b88d4fde1461029057600080fd5b806323b872dd1161010a57806323b872dd146101d957806342842e0e146101ec578063576f7ea7146101ff5780636352211e1461021f57806370a0823114610232578063714cff561461025357600080fd5b806301ffc9a71461014757806306fdde031461016f578063081812fc14610184578063095ea7b3146101af578063227212f2146101c4575b600080fd5b61015a6101553660046114e8565b610315565b60405190151581526020015b60405180910390f35b610177610367565b6040516101669190611555565b610197610192366004611568565b6103f9565b6040516001600160a01b039091168152602001610166565b6101c26101bd36600461159d565b610422565b005b6101cc610431565b6040516101669190611628565b6101c26101e736600461168a565b610638565b6101c26101fa36600461168a565b6106c8565b61021261020d366004611568565b6106e8565b60405161016691906116c6565b61019761022d366004611568565b61085f565b6102456102403660046116d9565b61086a565b604051908152602001610166565b61024560075481565b6101c26108b2565b6006546001600160a01b0316610197565b6101776108c6565b6101c261028b3660046116f4565b6108d5565b6101c261029e3660046117cf565b6108e0565b6101c26102b13660046118ff565b6108f7565b6101c26102c436600461194d565b6109bb565b6101776102d7366004611568565b6109fc565b6101cc6102ea3660046116d9565b610a8f565b61015a6102fd366004611a23565b610cd7565b6101c26103103660046116d9565b610d05565b60006001600160e01b031982166380ac58cd60e01b148061034657506001600160e01b03198216635b5e139f60e01b145b8061036157506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461037690611a56565b80601f01602080910402602001604051908101604052809291908181526020018280546103a290611a56565b80156103ef5780601f106103c4576101008083540402835291602001916103ef565b820191906000526020600020905b8154815290600101906020018083116103d257829003601f168201915b5050505050905090565b600061040482610d43565b506000828152600460205260409020546001600160a01b0316610361565b61042d828233610d7c565b5050565b60075460609060008167ffffffffffffffff81111561045257610452611730565b60405190808252806020026020018201604052801561048b57816020015b61047861149a565b8152602001906001900390816104705790505b50905060005b8281101561063157600081815260086020908152604091829020825160a0810184528154815260018201546001600160a01b03169281019290925260028101805492939192918401916104e390611a56565b80601f016020809104026020016040519081016040528092919081815260200182805461050f90611a56565b801561055c5780601f106105315761010080835404028352916020019161055c565b820191906000526020600020905b81548152906001019060200180831161053f57829003601f168201915b5050505050815260200160038201805461057590611a56565b80601f01602080910402602001604051908101604052809291908181526020018280546105a190611a56565b80156105ee5780601f106105c3576101008083540402835291602001916105ee565b820191906000526020600020905b8154815290600101906020018083116105d157829003601f168201915b5050505050815260200160048201548152505082828151811061061357610613611a90565b6020026020010181905250808061062990611aa6565b915050610491565b5092915050565b6001600160a01b03821661066757604051633250574960e11b8152600060048201526024015b60405180910390fd5b6000610674838333610d89565b9050836001600160a01b0316816001600160a01b0316146106c2576040516364283d7b60e01b81526001600160a01b038086166004830152602482018490528216604482015260640161065e565b50505050565b6106e3838383604051806020016040528060008152506108e0565b505050565b6106f061149a565b600082815260086020908152604091829020825160a0810184528154815260018201546001600160a01b031692810192909252600281018054929391929184019161073a90611a56565b80601f016020809104026020016040519081016040528092919081815260200182805461076690611a56565b80156107b35780601f10610788576101008083540402835291602001916107b3565b820191906000526020600020905b81548152906001019060200180831161079657829003601f168201915b505050505081526020016003820180546107cc90611a56565b80601f01602080910402602001604051908101604052809291908181526020018280546107f890611a56565b80156108455780601f1061081a57610100808354040283529160200191610845565b820191906000526020600020905b81548152906001019060200180831161082857829003601f168201915b505050505081526020016004820154815250509050919050565b600061036182610d43565b60006001600160a01b038216610896576040516322718ad960e21b81526000600482015260240161065e565b506001600160a01b031660009081526003602052604090205490565b6108ba610e82565b6108c46000610eaf565b565b60606001805461037690611a56565b61042d338383610f01565b6108eb848484610638565b6106c284848484610fa0565b6007546040805160a0810182528281523060208083019182528551838501908152868201516060850152868501516080850152600086815260089092529390208251815590516001820180546001600160a01b0319166001600160a01b03909216919091179055915190919060028201906109729082611b1b565b50606082015160038201906109879082611b1b565b50608082015181600401559050506109a1836007546110c9565b600780549060006109b183611aa6565b9190505550505050565b60005b81518110156106e3576109ea838383815181106109dd576109dd611a90565b60200260200101516108f7565b806109f481611aa6565b9150506109be565b6060610a0782610d43565b506000610a3d60408051808201909152601681527568747470733a2f2f706c656467652e626f72726f772f60501b602082015290565b90506000815111610a5d5760405180602001604052806000815250610a88565b80610a67846110e3565b604051602001610a78929190611bdb565b6040516020818303038152906040525b9392505050565b60606000610a9c8361086a565b60075490915060008267ffffffffffffffff811115610abd57610abd611730565b604051908082528060200260200182016040528015610af657816020015b610ae361149a565b815260200190600190039081610adb5790505b5090506000805b83811015610ccc576000818152600260205260409020546001600160a01b03888116911603610cba57600081815260086020908152604091829020825160a0810184528154815260018201546001600160a01b0316928101929092526002810180549293919291840191610b7090611a56565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9c90611a56565b8015610be95780601f10610bbe57610100808354040283529160200191610be9565b820191906000526020600020905b815481529060010190602001808311610bcc57829003601f168201915b50505050508152602001600382018054610c0290611a56565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2e90611a56565b8015610c7b5780601f10610c5057610100808354040283529160200191610c7b565b820191906000526020600020905b815481529060010190602001808311610c5e57829003601f168201915b50505050508152602001600482015481525050838381518110610ca057610ca0611a90565b60200260200101819052508180610cb690611aa6565b9250505b80610cc481611aa6565b915050610afd565b509095945050505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610d0d610e82565b6001600160a01b038116610d3757604051631e4fbdf760e01b81526000600482015260240161065e565b610d4081610eaf565b50565b6000818152600260205260408120546001600160a01b03168061036157604051637e27328960e01b81526004810184905260240161065e565b6106e38383836001611176565b6000828152600260205260408120546001600160a01b0390811690831615610db657610db681848661127c565b6001600160a01b03811615610df457610dd3600085600080611176565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b03851615610e23576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b6006546001600160a01b031633146108c45760405163118cdaa760e01b815233600482015260240161065e565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610f3357604051630b61174360e31b81526001600160a01b038316600482015260240161065e565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b156106c257604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610fe2903390889087908790600401611c0a565b6020604051808303816000875af192505050801561101d575060408051601f3d908101601f1916820190925261101a91810190611c47565b60015b611086573d80801561104b576040519150601f19603f3d011682016040523d82523d6000602084013e611050565b606091505b50805160000361107e57604051633250574960e11b81526001600160a01b038516600482015260240161065e565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b146110c257604051633250574960e11b81526001600160a01b038516600482015260240161065e565b5050505050565b61042d8282604051806020016040528060008152506112e0565b606060006110f0836112f7565b600101905060008167ffffffffffffffff81111561111057611110611730565b6040519080825280601f01601f19166020018201604052801561113a576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461114457509392505050565b808061118a57506001600160a01b03821615155b1561124c57600061119a84610d43565b90506001600160a01b038316158015906111c65750826001600160a01b0316816001600160a01b031614155b80156111d957506111d78184610cd7565b155b156112025760405163a9fbf51f60e01b81526001600160a01b038416600482015260240161065e565b811561124a5783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b6112878383836113cf565b6106e3576001600160a01b0383166112b557604051637e27328960e01b81526004810182905260240161065e565b60405163177e802f60e01b81526001600160a01b03831660048201526024810182905260440161065e565b6112ea8383611435565b6106e36000848484610fa0565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106113365772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611362576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061138057662386f26fc10000830492506010015b6305f5e1008310611398576305f5e100830492506008015b61271083106113ac57612710830492506004015b606483106113be576064830492506002015b600a83106103615760010192915050565b60006001600160a01b0383161580159061142d5750826001600160a01b0316846001600160a01b0316148061140957506114098484610cd7565b8061142d57506000828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160a01b03821661145f57604051633250574960e11b81526000600482015260240161065e565b600061146d83836000610d89565b90506001600160a01b038116156106e3576040516339e3563760e11b81526000600482015260240161065e565b6040518060a001604052806000815260200160006001600160a01b031681526020016060815260200160608152602001600081525090565b6001600160e01b031981168114610d4057600080fd5b6000602082840312156114fa57600080fd5b8135610a88816114d2565b60005b83811015611520578181015183820152602001611508565b50506000910152565b60008151808452611541816020860160208601611505565b601f01601f19169290920160200192915050565b602081526000610a886020830184611529565b60006020828403121561157a57600080fd5b5035919050565b80356001600160a01b038116811461159857600080fd5b919050565b600080604083850312156115b057600080fd5b6115b983611581565b946020939093013593505050565b8051825260018060a01b0360208201511660208301526000604082015160a060408501526115f860a0850182611529565b9050606083015184820360608601526116118282611529565b915050608083015160808501528091505092915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561167d57603f1988860301845261166b8583516115c7565b9450928501929085019060010161164f565b5092979650505050505050565b60008060006060848603121561169f57600080fd5b6116a884611581565b92506116b660208501611581565b9150604084013590509250925092565b602081526000610a8860208301846115c7565b6000602082840312156116eb57600080fd5b610a8882611581565b6000806040838503121561170757600080fd5b61171083611581565b91506020830135801515811461172557600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561176f5761176f611730565b604052919050565b600067ffffffffffffffff83111561179157611791611730565b6117a4601f8401601f1916602001611746565b90508281528383830111156117b857600080fd5b828260208301376000602084830101529392505050565b600080600080608085870312156117e557600080fd5b6117ee85611581565b93506117fc60208601611581565b925060408501359150606085013567ffffffffffffffff81111561181f57600080fd5b8501601f8101871361183057600080fd5b61183f87823560208401611777565b91505092959194509250565b600082601f83011261185c57600080fd5b610a8883833560208501611777565b60006060828403121561187d57600080fd5b6040516060810167ffffffffffffffff82821081831117156118a1576118a1611730565b8160405282935084359150808211156118b957600080fd5b6118c58683870161184b565b835260208501359150808211156118db57600080fd5b506118e88582860161184b565b602083015250604083013560408201525092915050565b6000806040838503121561191257600080fd5b61191b83611581565b9150602083013567ffffffffffffffff81111561193757600080fd5b6119438582860161186b565b9150509250929050565b6000806040838503121561196057600080fd5b61196983611581565b915060208084013567ffffffffffffffff8082111561198757600080fd5b818601915086601f83011261199b57600080fd5b8135818111156119ad576119ad611730565b8060051b6119bc858201611746565b918252838101850191858101908a8411156119d657600080fd5b86860192505b83831015611a12578235858111156119f45760008081fd5b611a028c89838a010161186b565b83525091860191908601906119dc565b809750505050505050509250929050565b60008060408385031215611a3657600080fd5b611a3f83611581565b9150611a4d60208401611581565b90509250929050565b600181811c90821680611a6a57607f821691505b602082108103611a8a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b600060018201611ac657634e487b7160e01b600052601160045260246000fd5b5060010190565b601f8211156106e357600081815260208120601f850160051c81016020861015611af45750805b601f850160051c820191505b81811015611b1357828155600101611b00565b505050505050565b815167ffffffffffffffff811115611b3557611b35611730565b611b4981611b438454611a56565b84611acd565b602080601f831160018114611b7e5760008415611b665750858301515b600019600386901b1c1916600185901b178555611b13565b600085815260208120601f198616915b82811015611bad57888601518255948401946001909101908401611b8e565b5085821015611bcb5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008351611bed818460208801611505565b835190830190611c01818360208801611505565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611c3d90830184611529565b9695505050505050565b600060208284031215611c5957600080fd5b8151610a88816114d256fea164736f6c6343000814000a";

type PledgeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PledgeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Pledge__factory extends ContractFactory {
  constructor(...args: PledgeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override deploy(
    name_: string,
    symbol_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<
      Pledge & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Pledge__factory {
    return super.connect(runner) as Pledge__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PledgeInterface {
    return new Interface(_abi) as PledgeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Pledge {
    return new Contract(address, _abi, runner) as unknown as Pledge;
  }
}
