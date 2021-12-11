import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "../common";
import { colorMap } from "../../constants";

export const useStyles = makeStyles((theme) => ({
  circleColor: (props: { color: string }) => ({
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: colorMap[props.color],
  }),
}));

export const ColorCircle: React.FC<{ color: string }> = ({
  color,
}: {
  color: string;
}) => {
  const styles = useStyles({ color });
  return <Box className={styles.circleColor} />;
};
