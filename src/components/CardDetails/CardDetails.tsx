import React from "react";
import { Card as CardInterface, Legality } from "../../interfaces/cards";
import { ColorCircle } from "./ColorCircle";
import {
  Image,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Divider,
  CheckCircleIcon,
  RemoveCircleIcon,
  CloseIcon,
  IconButton,
} from "../common";
import { useStyles } from "./CardDetails.styles";

export const CardDetails: React.FC<{
  card: CardInterface;
  onClose: () => void;
}> = ({
  onClose,
  card: {
    name,
    colors,
    type,
    types,
    subtypes,
    rarity,
    artist,
    power,
    toughness,
    imageUrl,
    originalText,
    legalities,
  },
}: {
  card: CardInterface;
  onClose: () => void;
}) => {
  const styles = useStyles();
  return (
    <Box>
      <DialogTitle id="simple-dialog-title">
        <Typography variant="h6">{`${name} - ${type}`}</Typography>
        <IconButton
          aria-label="close"
          className={styles.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Image src={imageUrl} width="100%" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List className={styles.list}>
              <ListItem button>
                <Grid item xs={3}>
                  <Typography variant="subtitle1">Colors:</Typography>
                </Grid>
                <Grid item xs={9} container spacing={1}>
                  {colors.map((color) => (
                    <Grid item key={color}>
                      <ColorCircle color={color} />
                    </Grid>
                  ))}
                </Grid>
              </ListItem>
              <Divider />
              <ListItem button>
                <Grid item xs={3}>
                  <Typography variant="subtitle1">Rarity:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography>{rarity}</Typography>
                </Grid>
              </ListItem>
              <Divider />
              <ListItem button>
                <Grid item xs={3}>
                  <Typography variant="subtitle1">Types:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography>{types && types.join(", ")}</Typography>
                </Grid>
              </ListItem>
              <Divider />
              <ListItem button>
                <Grid item xs={3}>
                  <Typography variant="subtitle1">Sub:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography>{subtypes && subtypes.join(", ")}</Typography>
                </Grid>
              </ListItem>
              <Divider />
              <ListItem button>
                <Grid item xs={3}>
                  <Typography variant="subtitle1">Power:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography>{power}</Typography>
                </Grid>
              </ListItem>
              <Divider />
              <ListItem button>
                <Grid item xs={3}>
                  <Typography variant="subtitle1">Tough:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography>{toughness}</Typography>
                </Grid>
              </ListItem>
              <Divider />
              <ListItem button>
                <Grid item xs={3}>
                  <Typography variant="subtitle1">Artist:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography>{artist}</Typography>
                </Grid>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List className={styles.list}>
              {legalities.map(({ format, legality }: Legality) => (
                <Box key={format}>
                  <ListItem button>
                    <Grid item xs={8}>
                      <Typography variant="subtitle1">{format}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      {legality === "Legal" ? (
                        <CheckCircleIcon />
                      ) : (
                        <RemoveCircleIcon />
                      )}
                    </Grid>
                  </ListItem>
                  <Divider />
                </Box>
              ))}
            </List>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <List className={styles.listR}>
          <ListItem button>
            <Typography>{originalText}</Typography>
          </ListItem>
        </List>
        <Divider />
      </DialogActions>
    </Box>
  );
};
