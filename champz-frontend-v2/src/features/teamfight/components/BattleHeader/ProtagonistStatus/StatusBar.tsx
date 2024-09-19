import "teamfight.css";
import { Box, SxProps, Theme } from "@mui/material";

interface StatusBarProps {
  icon: string;
  colorBg: string;
  colorStart: string;
  colorEnd: string;
  maxValue: number;
  value: number;
  hideValue?: boolean;
  hideMaxValue?: boolean;
  dirNegative?: boolean;
  steps?: boolean[];
  sx?: SxProps<Theme>;
}

const StatusBar: React.FC<StatusBarProps> = ({
  icon,
  dirNegative,
  colorBg,
  colorStart,
  colorEnd,
  maxValue,
  value,
  hideValue,
  hideMaxValue,
  steps,
  sx,
}) => {
  return (
    <Box
      display={"flex"}
      gap={"0.3em"}
      flexDirection={dirNegative ? "row-reverse" : "row"}
      sx={sx}
    >
      <img
        src={icon}
        alt="Defense Image"
        style={{ height: "1em", aspectRatio: "1" }}
      />

      {(steps || [false]).map((each, index) => (
        <Box
          key={index}
          position={"relative"}
          bgcolor={colorBg}
          flex={1}
          height={"1em"}
          borderRadius={"0.2em"}
          overflow={"hidden"}
          border={"0.05em solid black"}
          display={"flex"}
        >
          <Box
            position={"absolute"}
            textAlign={"center"}
            alignContent={"center"}
            width={`${(steps ? (each ? 1 : 0) : value / maxValue) * 100}%`}
            height={"100%"}
            overflow={"visible"}
            style={{
              background: `linear-gradient(90deg, ${colorStart}, ${colorEnd}, ${colorStart})`,
              [dirNegative ? "right" : "left"]: 0,
            }}
          />
          {!hideValue && !steps && (
            <Box
              m={"auto"}
              className={"text-shadow-dark text-sm leading-none"}
              whiteSpace={"nowrap"}
              zIndex={0}
            >
              {value}
              {hideMaxValue ? "" : ` / ${maxValue}`}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default StatusBar;
