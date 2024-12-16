import {
  Stack,
  TextField,
  FormLabel,
  useTheme,
  type SxProps,
  type Theme,
} from "@mui/material";
import { useEffect, useState } from "react";

interface CurrencyInputProps {
  label?: string;
  defaultValue: string;
  onChange: (value: string) => void;
  sx?: SxProps<Theme>;
}

export function formatCurrency(value?: string) {
  if (!value) return "";
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(value) / 100);
}

export function CurrencyInput({
  label,
  defaultValue,
  onChange,
  sx,
}: CurrencyInputProps) {
  const [value, setValue] = useState(defaultValue);
  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/[^\d]/g, "");
    const formattedValue = formatCurrency(inputValue);
    setValue(formattedValue);
    onChange(inputValue);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <Stack spacing="16px" width="250px" sx={sx}>
      {label && (
        <FormLabel sx={{ color: theme.palette.grey[300] }}>{label}</FormLabel>
      )}
      <TextField
        value={value}
        onChange={handleChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            background: theme.palette.common.white,
            borderRadius: "8px",
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.main,
            },
          },
        }}
        InputProps={{
          inputProps: {
            style: { textAlign: "center" },
          },
        }}
      />
    </Stack>
  );
}
