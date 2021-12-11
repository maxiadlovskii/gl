import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
    backgroundColor: colors.amber.A100,
  },
  listR: {
    width: "100%",
    backgroundColor: colors.lightBlue.A200,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));
