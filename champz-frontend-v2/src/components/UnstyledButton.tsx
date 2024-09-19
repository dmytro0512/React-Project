import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export function UnstyledButton(props: ButtonProps) {
  const UnstyledButton = styled(Button)(({ theme }) => ({
    transition: "transform 0.25s ease-in-out",
    "&:hover": {
      backgroundColor: "transparent",
      transform: "scale(1.1)",
    },
  }));

  return (
    <UnstyledButton {...props} disableRipple>
      {props.children}
    </UnstyledButton>
  );
}
