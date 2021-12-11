import React, { useCallback } from "react";
import { Colors } from "../../interfaces/cards";
import { useStyles } from "./CardsFilter.styles";
import {
  CustomCheckBox,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from "../common";

interface Props {
  colors: Colors;
  isFetching: boolean;
  colorValues: Set<string>;
  radio: string;
  onChange: (params: { colors: Set<string>; radio: string }) => void;
}

export const CardsFilter: React.FC<Props> = ({
  colors,
  onChange,
  isFetching,
  colorValues,
  radio,
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
      onChange({ radio, colors: copy });
    },
    [onChange, radio, colorValues]
  );

  const handleOnRadioChange = useCallback(
    (event: React.ChangeEvent<{ value: string }>) => {
      const { value } = event.target;
      onChange({ radio: value, colors: colorValues });
    },
    [onChange, colorValues]
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
