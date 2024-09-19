import { useAccount, useReadContract, UseReadContractParameters } from "wagmi";
import BuyTrufflesContractABI from "@/services/blockchain/abis/BuyTrufflesContractABI";
import { ContractFunctionArgs, ReadContractErrorType } from "viem";
import { useEffect, useState } from "react";

export function useReadTrufflePurchaseContract(
  functionName: string,
  args?: ContractFunctionArgs,
) {
  const account = useAccount();
  //   const test = import.meta.env.VITE_IMAGE_HOST_URL;

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
}
