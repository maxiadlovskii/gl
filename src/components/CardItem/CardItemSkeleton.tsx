import React from "react";
import { Card, CardHeader, Skeleton } from "../common";
import { useStyles } from "./CardItem.styles";

export const CardItemSkeleton: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      <Skeleton animation="wave" variant="rect" className={classes.media} />
    </Card>
  );
};
