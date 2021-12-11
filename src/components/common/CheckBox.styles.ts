import { makeStyles } from "@material-ui/core/styles";
import { colorMap } from "../../constants";

export const useStyles = makeStyles(() => ({
  root: (props: { color: string }) => ({
    color: colorMap[props.color],
    "&.MuiCheckbox-colorPrimary.Mui-checked": {
      color: colorMap[props.color] || colorMap.default,
    },
  }),
  label: (props: { color: string }) => ({
    color: colorMap[props.color] || colorMap.default,
  }),
}));
