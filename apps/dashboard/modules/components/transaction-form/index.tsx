import RadioGroup from "@repo/ui/radio-group";
import { Select } from "@repo/ui/select";
import { CurrencyInput, formatCurrency } from "@repo/ui/currency-input";
import { Box, useTheme } from "@mui/material";
import { Button } from "@repo/ui/button";

interface TransactionFormProps {
  transactionType?: string | undefined;
  setTransactionType: (value: string) => void;
  value?: string;
  setValue: (value: string) => void;
  operationType: string;
  setOperationType: (value: string) => void;
  isMutating: boolean;
  handleEditTransaction: () => void;
}

const options = [
  { value: "cambio", label: "Câmbio de Moeda" },
  { value: "doc/ted", label: "DOC/TED" },
  { value: "emprestimo", label: "Empréstimo e Financiamento" },
];

export function TransactionForm({
  transactionType,
  setTransactionType,
  value,
  setValue,
  operationType,
  setOperationType,
  isMutating,
  handleEditTransaction,
}: TransactionFormProps) {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" gap="32px" mt="32px">
      <Select
        value={transactionType}
        options={options}
        onChange={(event) => setTransactionType(event?.target.value)}
        placeholder="Selecione o tipo de transação"
      />

      <Box
        display="flex"
        sx={{
          flexDirection: "row",
          gap: "60px",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            gap: "32px",
          },
        }}
      >
        <CurrencyInput
          label="Valor"
          defaultValue={formatCurrency(value)}
          onChange={(v) => {
            setValue(v);
          }}
          sx={{
            zIndex: 1,
            width: "inherit",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        />

        <RadioGroup
          label="Tipo de operação"
          inputName="tipo-de-operacao"
          value={operationType}
          handleChange={(event) => setOperationType(event?.target?.value)}
          sx={{ zIndex: 1 }}
        >
          <>
            <RadioGroup.RadioButton label="Depósito" value="deposito" />
            <RadioGroup.RadioButton
              label="Transferência"
              value="transferencia"
            />
          </>
        </RadioGroup>
      </Box>

      <Box width="250px" zIndex={1} mt="32px">
        <Button
          label="Concluir transação"
          onClick={handleEditTransaction}
          color="tertiary"
          isLoading={isMutating}
        />
      </Box>
    </Box>
  );
}
