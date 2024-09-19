import { Avatar, Box, BoxProps, styled } from "@mui/material";
import statBoxBorder from "@/assets/borders/statBox.svg";
import statBoxBorderEmpty from "@/assets/borders/statBox_empty.svg";
import removeIcon from "@/assets/icons/buttons/minus.svg";
import { Heading } from "@/components/Heading";
import { StatBoxTitle, StatBoxValue } from "@/components/Text";
import { ChampzLoading } from "./ChampzLoading";

export const StatBox = (props: StatBox) => {
  const StatBox = styled(Box)(({ theme }) => ({
    textAlign: "center",
    borderImageSource: `url(${statBoxBorder})`,
    borderImageWidth: "16px",
    borderImageRepeat: "round",
    borderImageSlice: "8 8 16 fill",
    aspectRatio: 167 / 132,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  }));

  const RemoveIcon = styled(Avatar)(() => ({
    position: "absolute",
    width: "32px",
    height: "32px",
    left: 0,
    top: 0,
    borderRadius: 0,
    transform: "translate(-0.5em, -0.5em)",
    transition: "transform 0.25s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
      transform: "translate(-0.5em, -0.5em) scale(1.1)",
    },
  }));

  if (props.isLoading) {
    return (
      <StatBox {...props}>
        <Heading>
          <ChampzLoading />
        </Heading>
      </StatBox>
    );
  }

  if (props.isEmpty) {
    return (
      <StatBox
        {...props}
        sx={{
          borderImageSource: `url(${statBoxBorderEmpty})`,
          cursor: "pointer",
        }}
      >
        <StatBoxTitle sx={{ fontSize: "40px" }}>+</StatBoxTitle>
      </StatBox>
    );
  }

  return (
    <StatBox {...props}>
      {props.removeHandler && props.isEditMode ? (
        <RemoveIcon onClick={props.removeHandler} src={removeIcon} />
      ) : (
        ""
      )}
      <StatBoxValue>{props.value}</StatBoxValue>
      <StatBoxTitle>{props.description}</StatBoxTitle>
    </StatBox>
  );
};

interface StatBox extends BoxProps {
  description?: String;
  value?: number;
  isLoading?: boolean;
  isEmpty?: boolean;
  isEditMode?: boolean;
  removeHandler?: () => void;
}
