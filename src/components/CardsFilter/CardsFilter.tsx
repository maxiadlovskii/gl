import React, { useCallback } from "react";
import debounce from "lodash/debounce";
import { Colors } from "../../interfaces/cards";
import { useStyles } from "./CardsFilter.styles";
import {
  CustomCheckBox,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  TextField,
} from "../common";

interface Props {
  colors: Colors;
  isFetching: boolean;
  colorValues: Set<string>;
  radio: string;
  cardName: string;
  onChange: (params: {
    colors: Set<string>;
    radio: string;
    cardName: string;
  }) => void;
}

export const CardsFilter: React.FC<Props> = ({
  colors,
  onChange,
  isFetching,
  colorValues,
  radio,
  cardName,
}: Props) => {
  const classes = useStyles();
  const handleOnChange = useCallback(
    (data: { value: unknown; name: string }) => {
      const { value, name } = data;
      const copy = new Set(colorValues);
      if (value) {
        copy.add(name);
      } else {
        copy.delete(name);
      }
      onChange({ radio, colors: copy, cardName });
    },
    [onChange, radio, colorValues, cardName]
  );

  const handleOnRadioChange = useCallback(
    (event: React.ChangeEvent<{ value: string }>) => {
      const { value } = event.target;
      onChange({ radio: value, colors: colorValues, cardName });
    },
    [onChange, colorValues, cardName]
  );
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<{ value: string }>) => {
      const { value } = event.target;
      onChange({ radio, colors: colorValues, cardName: value });
    },
    [onChange, colorValues, radio]
  );
  return (
    <Grid
      className={classes.container}
      container
      spacing={2}
      direction="row"
      alignItems="stretch"
      justify="center"
    >
      <Grid item>
        <TextField
          name="name"
          label="Name"
          placeholder="Name"
          onChange={debounce(handleInputChange, 500)}
          disabled={isFetching}
        />
      </Grid>
      {colors.map((color) => (
        <Grid item key={color}>
          <CustomCheckBox
            color={color}
            checked={colorValues.has(color)}
            onChange={handleOnChange}
            label={color}
            disabled={isFetching}
          />
        </Grid>
      ))}
      <Grid item>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          value={radio}
          onChange={handleOnRadioChange}
        >
          <FormControlLabel
            value="or"
            control={<Radio color="primary" />}
            label="Or"
            labelPlacement="end"
          />
          <FormControlLabel
            value="and"
            control={<Radio color="primary" />}
            label="And"
            labelPlacement="end"
          />
        </RadioGroup>
      </Grid>
    </Grid>
  );
};
