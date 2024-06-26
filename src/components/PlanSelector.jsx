import { useEffect, useState } from "react";
import {
  OutlinedInput,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  useTheme,
} from "@mui/material";

const plans = [
  { key: 0, name: "Residencial Inalámbrico" },
  { key: 1, name: "Residencial Fibra Óptica" },
  { key: 2, name: "Pyme Inalámbrico" },
  { key: 3, name: "Pyme Fibra Óptica" },
  { key: 4, name: "Community" },
  { key: 5, name: "Empresarial Dedicado" },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const PlanSelector = ({ error, helperText, onChange }) => {
  const theme = useTheme();
  const [Plans, setPlans] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPlans(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(()=>{
    onChange({target: {name: 'plan', value: Plans}})
  },[Plans])

  return (
    <FormControl fullWidth>
      <InputLabel id="plan-label">Planes (Elección Multiple)</InputLabel>
      <Select
        id="plan"
        labelId="plan-label"
        multiple
        value={Plans}
        onChange={handleChange}
        input={<OutlinedInput label="Planes (Elección Multiple)" />}
        MenuProps={MenuProps}
      >
        {plans.map(({ name }) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, Plans, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText id="plan-helper" error={error}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default PlanSelector;
