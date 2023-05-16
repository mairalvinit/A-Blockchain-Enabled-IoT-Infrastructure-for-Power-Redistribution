export function getContractAddress() {
  return import.meta.env.VITE_CONTRACT_ADDRESS;
}

export function getContractABI() {
  return [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "d",
          type: "uint256",
        },
      ],
      name: "set",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "get",
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
  ];
}
