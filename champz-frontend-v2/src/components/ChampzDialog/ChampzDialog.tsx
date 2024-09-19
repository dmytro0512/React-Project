import { Box, Dialog, DialogProps, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import dialogBg from "@/assets/backgrounds/dialog.svg";
import CloseIcon from "@mui/icons-material/Close";
import { HeaderButton } from "../HeaderButton";
import { BorderColor } from "@/consts/borderColor";

export const StyledChampzDialog = styled(Dialog)(({ theme }) => ({
  ".MuiPaper-root": {
    backgroundImage: "none",
    backgroundSize: "cover",
    borderRadius: 0,
    padding: theme.spacing(4),
    maxWidth: "100%",
    borderImageSource: `url(${dialogBg})`,
    borderImageWidth: "24px",
    borderImageOutset: 0,
    borderImageRepeat: "stretch",
    borderImageSlice: "24 fill",
    borderStyle: "solid",
    overflow: "visible",
    backgroundColor: `transparent`,
    boxShadow: `none`,
  },
}));

export function ChampzDialog({
  children,
  ...props
}: DialogProps & { onClose: () => void }) {
  return (
    <StyledChampzDialog {...props}>
      <HeaderButton
        onClick={() => props.onClose?.()}
        sx={{
          position: "absolute",
          right: "-2em",
          top: "-2em",
        }}
        icon={"close"}
      />
      <Box sx={{ overflow: "scroll" }}>{children}</Box>
    </StyledChampzDialog>
  );
}
