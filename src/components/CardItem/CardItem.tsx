import React from "react";
import { useStyles } from "./CardItem.styles";
import { CardShort as CardInterface } from "../../interfaces/cards";
import { Image, Card, CardHeader } from "../common";

export const CardItem: React.FC<CardInterface> = ({
  rarity,
  imageUrl,
}: CardInterface) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={6}>
      <CardHeader title={rarity} />
      <Image src={imageUrl} width="100%" />
    </Card>
  );
};
