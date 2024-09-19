import { ActionButtonByIndex } from "@/features/character/components/Actions/ActionButton";
import { Grid } from "@mui/material";
import fightIcon from "@/assets/icons/fight.svg";
import useAuthContext from "@/features/auth/contexts/authContext";
import { useState } from "react";
import { Activity, Char } from "@/types/responses/charList";
import { HandleCharActions } from "./HandleCharActions";
import { ChampzLoading } from "@/components/ChampzLoading";

export function MainActionList() {
  const { selectedChar } = useAuthContext();
  const [selectedActivity, setSelectedActivity] = useState<Activity>();

  console.log(
    "Rendering MainActionList with selected Activity",
    selectedActivity,
  );

  return (
    <>
      <Grid container spacing={1} justifyContent={"center"}>
        {selectedChar?.activities?.map((activity, index) => {
          if (activity.activity_id === 99) {
            return <ChampzLoading />;
          }
          if (activity.main_action) {
            return (
              <Grid key={activity.activity_id} item xs={12} md={6}>
                <ActionButtonByIndex
                  key={activity.activity_id + activity.handler}
                  startIcon={<Icon url={fightIcon} />}
                  tabIndex={index}
                  onClick={() => setSelectedActivity(activity)}
                >
                  {activity.display_name}
                </ActionButtonByIndex>
              </Grid>
            );
          }
        })}
        {selectedActivity && (
          <HandleCharActions
            char={selectedChar as Char}
            key={selectedActivity.handler + selectedChar?.id}
            selectedActivity={selectedActivity}
            onHandlingComplete={() => setSelectedActivity(undefined)}
          />
        )}
      </Grid>
    </>
  );
}

function Icon({ url }: { url: string }) {
  return <img src={url} />;
}
