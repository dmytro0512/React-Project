import { Avatar, BoxProps, styled } from "@mui/material";
import addIcon from "@/assets/icons/buttons/plus.svg";
import { StatBoxTitle } from "@/components/Text";
import { TextColor } from "@/consts/textColor";
import { RegularText } from "@/components/Text";
import { FontSize } from "@/consts/fontSize";

export const StatSelectionItem = (props: BoxProps) => {
  const { children, ...other } = props;
  const StatSelectionItem = styled(StatBoxTitle)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
    gap: theme.spacing(2),
    cursor: "pointer",
    transition: "background-color 0.25s ease-out",
    "&:hover": {
      backgroundColor: TextColor.light2,
    },
  }));
  const StatSelectionAdd = styled(StatBoxTitle)(({ theme }) => ({
    fontSize: FontSize.M,
  }));

  return (
    <StatSelectionItem {...other}>
      <StatSelectionAdd>+</StatSelectionAdd>
      {children}
    </StatSelectionItem>
  );
};
