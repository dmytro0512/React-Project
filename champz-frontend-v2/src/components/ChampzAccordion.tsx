import { AccordionSummary, AccordionSummaryProps, styled } from "@mui/material";
import bg from "@/assets/backgrounds/accordion.svg";
import { titleStyles } from "@/components/Title";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ChampzAccordionSummary = styled((props: AccordionSummaryProps) => (
  <AccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
))(() => ({
  ...titleStyles,
  borderImageSource: `url(${bg})`,
  borderImageWidth: "16px",
  borderImageOutset: 0,
  borderImageRepeat: "stretch",
  borderImageSlice: "16 fill",
  borderStyle: "solid",
}));
