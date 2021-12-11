import { green, blue, common, red } from "@material-ui/core/colors";

export const colorMap: {
  [key: string]: any;
} = {
  Red: red["400"],
  Blue: blue["400"],
  White: common.white,
  Black: common.black,
  Green: green["400"],
  default: green["400"],
};

export const cardPerPage = 12;

export const colorsList = ["Red", "Blue", "Black", "White", "Green"];
