import React, { useCallback } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useStyles } from "./CheckBox.styles";

export const CustomCheckBox: React.FC<{
  color: string;
  checked: boolean;
  onChange: (data: { value: unknown; name: string }) => void;
  label: string;
  disabled: boolean;
  // eslint-disable-next-line react/prop-types
}> = ({ color, checked, onChange, label, disabled }) => {
  const styles = useStyles({ color });
  const handleChange = useCallback(
    (
      event: React.ChangeEvent<{
        value: unknown;
        checked: unknown;
        name: string;
      }>
    ) => {
      const { name, checked: value } = event.target;
      console.log({ value, name, target: event.target });
      onChange({ value, name });
    },
    [onChange]
  );
  return (
    <FormControlLabel
      classes={{ label: styles.label }}
      disabled={disabled}
      control={
        <Checkbox
          classes={{ root: styles.root }}
          name={color}
          onChange={handleChange}
          checked={checked}
          color="primary"
        />
      }
      label={label}
    />
  );
};
