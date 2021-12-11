import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  carColor: {
    width: 25,
    height: 25,
    borderRadius: "50%",
    marginRight: theme.spacing(1),
  },
  selectInput: {
    display: "flex",
    padding: theme.spacing(1),
  },
  container: {
    boxSizing: "border-box",
    width: "100%",
    backgroundColor: colors.amber.A100,
  },
}));
