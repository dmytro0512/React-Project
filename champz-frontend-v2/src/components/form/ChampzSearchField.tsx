import { ChampzTextField } from "@/components/form/ChampzTextField";
import { InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { TextColor } from "@/consts/textColor";

export const ChampzSearchField = styled(ChampzTextField)(() => ({}));

ChampzSearchField.defaultProps = {
  ...ChampzSearchField.defaultProps,
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon sx={{ color: TextColor.light }} />
      </InputAdornment>
    ),
  },
};
