import React from "react";
import { useStyles } from "./CardsList.styles";
import { CardItemSkeleton } from "../CardItem/CardItemSkeleton";
import { cardPerPage } from "../../constants";

export const CardsListSkeleton: React.FC = () => {
  const classes = useStyles();
  const cars = Array.from(Array(cardPerPage).keys());
  return (
    <ul className={classes.list}>
      {cars.map((i) => (
        <li key={`_skeleton_${i}`}>
          <CardItemSkeleton />
        </li>
      ))}
    </ul>
  );
};
