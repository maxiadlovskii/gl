import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "139%", // 16:9,
    width: "100%",
  },
}));
