const BuyTrufflesContractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "trufflesAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "costInWei",
        type: "uint256",
      },
    ],
    name: "TrufflesPurchased",
    type: "event",
  },
  {
    inputs: [],
    name: "MIN_TRUFFLES",
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
    inputs: [],
    name: "TRUFFLES_PER_ETH",
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
        name: "_minTruffles",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_taxRate",
        type: "uint256",
      },
    ],
    name: "addPackageScale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_trufflesOutput",
        type: "uint256",
      },
    ],
    name: "calculateCosts",
    outputs: [
      {
        internalType: "uint256",
        name: "trufflesInEth",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "taxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalCostInEth",
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
        name: "_trufflesOutput",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_trufflesInEth",
        type: "uint256",
      },
    ],
    name: "getTaxAmount",
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
        name: "_trufflesOutput",
        type: "uint256",
      },
    ],
    name: "getTrufflesInEth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "packageScales",
    outputs: [
      {
        internalType: "uint256",
        name: "minTruffles",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "taxRate",
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
        name: "_trufflesOutput",
        type: "uint256",
      },
    ],
    name: "purchaseTruffles",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "address payable",
        name: "_address",
        type: "address",
      },
    ],
    name: "setTaxReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_address",
        type: "address",
      },
    ],
    name: "setTruffleValueReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "taxReceiver",
    outputs: [
      {
        internalType: "address payable",
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
  {
    inputs: [],
    name: "truffleValueReceiver",
    outputs: [
      {
        internalType: "address payable",
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
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minTruffles",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_taxRate",
        type: "uint256",
      },
    ],
    name: "updatePackageScale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

export default BuyTrufflesContractABI;