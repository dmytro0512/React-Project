import {
  useAccount,
  useReadContract,
  UseReadContractParameters,
  useWriteContract,
  useSimulateContract,
} from "wagmi";
import BuyTrufflesContractABI from "@/services/blockchain/abis/BuyTrufflesContractABI";
import { useCallback, useState } from "react";
import { ContractFunctionArgs } from "viem";

export function useTrufflePurchaseContract() {
  const account = useAccount();
  const { data: writeTrufflePurchaseContractData, writeContract } = useWriteContract();
  //   const test = import.meta.env.VITE_IMAGE_HOST_URL;

  const readTrufflePurchaseContract = useCallback(
    (functionName: string, args?: ContractFunctionArgs) => {
      const contractAddress = "0xb9162350E217469fA4866BA8440Fa1F5575f0722";

      const readContractObject = args
        ? {
            address: contractAddress,
            abi: BuyTrufflesContractABI,
            functionName: functionName,
            args: [args],
          }
        : {
            address: contractAddress,
            abi: BuyTrufflesContractABI,
            functionName: functionName,
          };

      const { data, isSuccess, isError, error, isLoading } = useReadContract(
        readContractObject as UseReadContractParameters,
      );

      return { data, isSuccess, isError, error, isLoading };
    },
    [],
  );

  const writeTrufflePurchaseContract = useCallback(
    (truffleAmountToBuy: number, ethCostInWei: bigint) => {
      const contractAddress = "0xb9162350E217469fA4866BA8440Fa1F5575f0722";

      writeContract({
        address: contractAddress,
        abi: BuyTrufflesContractABI,
        functionName: "purchaseTruffles",
        args: [truffleAmountToBuy],
        value: ethCostInWei,
      });
    },
    [],
  );

  const simulateTrufflePurchaseContract = useCallback(
    (truffleAmountToBuy: number, ethCostInWei: bigint) => {
      const contractAddress = "0xb9162350E217469fA4866BA8440Fa1F5575f0722";

      const { data, isSuccess, isError, error } = useSimulateContract({
        address: contractAddress,
        abi: BuyTrufflesContractABI,
        functionName: "purchaseTruffles",
        args: [truffleAmountToBuy],
        value: ethCostInWei,
      });

      return { data, isSuccess, isError, error };
    },
    [],
  );

  return {
    readTrufflePurchaseContract,
    simulateTrufflePurchaseContract,
    writeTrufflePurchaseContract,
    writeTrufflePurchaseContractData
  };
}
