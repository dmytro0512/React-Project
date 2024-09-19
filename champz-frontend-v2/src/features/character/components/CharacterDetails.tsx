import { Heading } from "@/components/Heading";
import { HpMana } from "@/components/Character/HpMana/HpMana";
import { FontSize } from "@/consts/fontSize";
import { defaultGridSpacing } from "@/consts/spacings";
import { Equipments } from "@/features/character/components/Equipments/Equipments";
import { XpBar } from "@/components/Character/XpBar";
import { Char } from "@/types/responses/charList";
import { Avatar, Box, Grid, Stack, styled } from "@mui/material";
import { MainActionList } from "./Actions/MainActionList";
import { CharacterStatuses } from "@/consts/characterStatuses";
import { ImagePath } from "@/consts/imagePaths";
import { getImageHost } from "@/utils/getImageHost";

export function CharacterDetails(props: CharacterDetailsProps) {
  const StatsContainer = styled(Box)(({ theme }) => ({
    position: "absolute",

    top: characterStatsPadding,
    left: characterStatsPadding,
    right: characterStatsPadding,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: theme.spacing(1),
  }));

  const StatsPill = styled(Box)(({ theme }) => ({
    backgroundColor: "#1ba504",
    fontSize: FontSize.XS2,
    display: "grid",
    alignItems: "center",
    borderRadius: "100vw",
    padding: `${theme.spacing(0.75)} ${theme.spacing(1)}`,
  }));

  // Primary Attribute should show first
  const sortedAttributes = props.char.text_attributes.sort((a) =>
    a.is_primary_attribute ? -1 : 1,
  );

  return (
    <Grid container columnSpacing={defaultGridSpacing}>
      <Grid item xs={6}>
        <Stack direction="column" gap={2}>
          <Box
            sx={{
              backgroundImage: `linear-gradient(rgba(204, 218, 142, 0.2) 0%, #333917 50%), linear-gradient(to bottom, #262B0F, #262B0F)`,
              borderRadius,
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
              boxShadow: `0px 45px 90px 0px rgba(12, 14, 5, 0.25), 0px 15px 15px 0px rgba(221, 221, 221, 0.4) inset,-0px -15px 15px 0px rgba(10, 10, 10, 0.4) inset `,
              position: "relative",
            }}
          >
            <Avatar
              src={`${getImageHost()}${ImagePath.CHARS}${props.char.src}`}
              variant="rounded"
              sx={{
                width: "100%",
                height: "100%",
                padding: 0.5,
                "& img": {
                  borderRadius,
                },
                position: "relative",
                zIndex: 0,
                ...(props.char.status == CharacterStatuses.dead && {
                  filter: "grayscale(90%)",
                }),
              }}
            ></Avatar>
            <StatsContainer>
              {sortedAttributes.map((attribute) => (
                <Box
                  sx={{ display: "flex", gap: "0.5em", alignItems: "center" }}
                >
                  <Avatar
                    sx={{ width: "32px", height: "32px" }}
                    src={`${getImageHost()}${ImagePath.ATTRIBUTES}${attribute.src}`}
                  ></Avatar>
                  <StatsPill>{attribute.text_attribute}</StatsPill>
                </Box>
              ))}
            </StatsContainer>
            <Box
              sx={{
                position: "absolute",
                bottom: characterStatsPadding,
                left: characterStatsPadding,
                right: characterStatsPadding,
                textAlign: "center",
              }}
            >
              <Stack direction="column">
                <Heading sx={{ fontSize: FontSize.XL }}>
                  {props.char.name}
                </Heading>
                <HpMana char={props.char} extended={true}></HpMana>
              </Stack>
            </Box>
          </Box>

          <XpBar
            min_exp={props.char.min_exp}
            max_exp={props.char.max_exp}
            current_exp={props.char.exp}
            lvl={props.char.lvl}
            char={props.char}
          ></XpBar>
          <MainActionList />
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Equipments />
      </Grid>
    </Grid>
  );
}

const borderRadius = "24px";
const characterStatsPadding = 16;

interface CharacterDetailsProps {
  char: Char;
}
