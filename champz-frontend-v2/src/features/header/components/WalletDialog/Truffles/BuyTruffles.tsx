import { useEffect, useState } from "react";
import { Accordion, AccordionDetails, Stack } from "@mui/material";
import { TextField } from "../../../../../components/TextField";
import { useTrufflePurchaseContract } from "@/hooks/useTrufflePurchaseContract";
import { ChampzOutputFormatNumber } from "@/components/ChampzFormatting/ChampzOutputFormatNumber";
import { RegularText } from "@/components/Text";
import { ChampzLoading } from "@/components/ChampzLoading";
import { getEthFromWei } from "@/utils/getEthFromWei";
import { useBlockchainErrorHandler } from "@/hooks/useBlockchainErrorHandler";
import { BurnButton } from "../../../../../components/BurnButton";
import { useWaitForTransactionReceipt } from "wagmi";
import { formatNumberOutput } from "@/hooks/useNumberFormatter";
import { ChampzAccordionSummary } from "@/components/ChampzAccordion";
import { getRouteApi } from "@tanstack/react-router";

export function BuyTruffles() {
  const [truffleAmountToBuy, setTruffleAmountToBuy] = useState(0);
  const [costInEth, setCostInEth] = useState(0);
  const [costInWei, setCostInWei] = useState<bigint>(0 as unknown as bigint);
  const routeApi = getRouteApi("/_auth");
  const routeSearch = routeApi.useSearch();
  const [expanded, setExpanded] = useState<boolean>(
    routeSearch.tabAcc ? (routeSearch.tabAcc === 0 ? true : false) : true,
  );

  const {
    writeTrufflePurchaseContractData,
    readTrufflePurchaseContract,
    writeTrufflePurchaseContract,
  } = useTrufflePurchaseContract();

  const waitForTransactionReceipt = useWaitForTransactionReceipt({
    hash: writeTrufflePurchaseContractData,
  });

  const {
    data: minimumPurchaseData,
    isError: minimumPurchaseIsError,
    isSuccess: minimumPurchaseSuccess,
    error: minimumPurchaseError,
  } = readTrufflePurchaseContract("MIN_TRUFFLES");

  const minimumPurchase = minimumPurchaseSuccess
    ? parseInt((minimumPurchaseData as bigint).toString())
    : 0;

  const {
    data: calculateCostData,
    isSuccess: calculateCostIsSuccess,
    isLoading: calculateCostIsLoading,
  } = readTrufflePurchaseContract("calculateCosts", [truffleAmountToBuy]);

  useBlockchainErrorHandler({
    isError: minimumPurchaseIsError,
    error: minimumPurchaseError,
  });

  useEffect(() => {
    if (calculateCostData) {
      const costInWei = (calculateCostData as bigint[])[2];
      const costInEth = calculateCostIsSuccess ? getEthFromWei(costInWei) : 0;

      setCostInEth(costInEth);
      setCostInWei(costInWei);
    }
  }, [calculateCostData]);

  const handleSetTruffleAmountToBuy = (truffleAmountToBuy: number) => {
    if (truffleAmountToBuy >= minimumPurchase) {
      setTruffleAmountToBuy(truffleAmountToBuy);
    } else {
      setTruffleAmountToBuy(0);
    }
  };

  const handleBuyTruffles = async () => {
    writeTrufflePurchaseContract(truffleAmountToBuy, costInWei);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      disableGutters
      elevation={0}
      square
      sx={{ padding: "0 !important", "&:before": { display: "none" } }}
    >
      <ChampzAccordionSummary>Buy Truffles</ChampzAccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          <TextField
            label={
              minimumPurchaseSuccess
                ? `Amount of Truffles to purchase (min ${formatNumberOutput(minimumPurchase)})`
                : `Amount of Truffles to purchase`
            }
            sx={{ flex: 1 }}
            type="number"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleSetTruffleAmountToBuy(Number(event.target.value));
            }}
          />

          {waitForTransactionReceipt.isLoading ? (
            <ChampzLoading />
          ) : (
            <Stack>
              <RegularText>
                {`Buy `}
                {calculateCostIsLoading ? (
                  truffleAmountToBuy === 0 ? (
                    ``
                  ) : (
                    <ChampzLoading />
                  )
                ) : (
                  <ChampzOutputFormatNumber
                    showBackground={false}
                    highLightText={true}
                    value={truffleAmountToBuy}
                  />
                )}

                {` Truffles for `}
                {calculateCostIsLoading ? (
                  truffleAmountToBuy === 0 ? (
                    ``
                  ) : (
                    <ChampzLoading />
                  )
                ) : (
                  <ChampzOutputFormatNumber
                    showBackground={false}
                    value={costInEth}
                    highLightText={true}
                  />
                )}
                {` ETH`}
              </RegularText>
              <BurnButton onClick={() => handleBuyTruffles()}>Buy</BurnButton>
            </Stack>
          )}

          {waitForTransactionReceipt.isSuccess && (
            <>{`Transaction successful`}</>
          )}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
