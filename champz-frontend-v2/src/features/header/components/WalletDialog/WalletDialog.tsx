import { ChampzDialog } from "@/components/ChampzDialog/ChampzDialog";
import { ChampzDialogTitle } from "@/components/ChampzDialog/ChampzDialogTitle";
import { ChampzTabs } from "@/components/ChampzTabs/ChampzTabs";
import { ChampzTabPanelLoose } from "@/components/ChampzTabs/ChampzTabPanelLoose";
import { ChampzTabLoose } from "@/components/ChampzTabs/ChampzTabLoose";
import { BurnSpores } from "@/features/header/components/WalletDialog/Spores/BurnSpores";
import { useState } from "react";
import { SporesLog } from "./Spores/SporesLog";
import { BurnRaffleResults } from "./Spores/BurnRaffleResults";
import { EthClaimHistoryLog } from "./Earnings/EthClaimHistoryLog";
import { Box } from "@mui/material";
import { BuyTruffles } from "./Truffles/BuyTruffles";
import { TrufflesLog } from "./Truffles/TrufflesLog";
import { TruffleBalance } from "./Truffles/TruffleBalance";
import { SwapTruffles } from "./Truffles/SwapTruffles";
import { ClaimableRewards } from "./Earnings/ClaimableRewards";
import { getRouteApi, useSearch } from "@tanstack/react-router";

export function WalletDialog(props: WalletDialogProps) {
  const routeApi = getRouteApi("/_auth");
  const routeSearch = routeApi.useSearch();

  const getActiveTab = () => {
    switch (routeSearch.wdtab) {
      case "spores":
        return 0;
      case "truffles":
        return 1;
      case "earnings":
        return 2;
      default:
        return 0;
    }
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <ChampzDialog open={props.open} onClose={props.onClose}>
      <Box sx={{ maxWidth: "100%" }}>
        <ChampzDialogTitle>Wallet</ChampzDialogTitle>
        <ChampzTabs value={activeTab} onChange={handleTabChange}>
          <ChampzTabLoose label="Spores" id="0"></ChampzTabLoose>
          <ChampzTabLoose label="Truffles" id="1"></ChampzTabLoose>
          <ChampzTabLoose label="Earnings" id="2"></ChampzTabLoose>
        </ChampzTabs>
        <ChampzTabPanelLoose value={0} index={activeTab}>
          <BurnSpores onSuccess={() => props.onClose()} />
          <BurnRaffleResults />
          <SporesLog />
        </ChampzTabPanelLoose>
        <ChampzTabPanelLoose value={1} index={activeTab}>
          <TruffleBalance />
          <BuyTruffles />
          <SwapTruffles />
          <TrufflesLog />
        </ChampzTabPanelLoose>
        <ChampzTabPanelLoose value={2} index={activeTab}>
          <ClaimableRewards />
          <EthClaimHistoryLog />
        </ChampzTabPanelLoose>
      </Box>
    </ChampzDialog>
  );
}

interface WalletDialogProps {
  open: boolean;
  onClose: () => void;
}
