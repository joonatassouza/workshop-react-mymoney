import React, { useCallback, useEffect, useState } from "react";
import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TransactionTable } from "../../components/TransactionTable";
import { useBalance } from "../../contexts/Loading";
import { deleteIncome, getAllIncome, postIncome } from "../../services/income";
import { Income as IncomeProps } from "../../services/income/types";

import { Container, Form } from "./styles";

export const Income: React.FC = () => {
  const { reload: reloadBalance } = useBalance();
  const [incomes, setIncomes] = useState<IncomeProps[]>([]);

  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState(0);

  const loadData = useCallback(() => {
    getAllIncome().then((data) => {
      setIncomes(data);
    });
  }, []);

  const handleDeleteIncome = useCallback(
    (id: string) => {
      deleteIncome(id).then(() => {
        loadData();
        reloadBalance();
      });
    },
    [loadData, reloadBalance]
  );

  const handleAddIncome = useCallback(() => {
    postIncome({
      id: "",
      description,
      date: new Date(date),
      type,
      value,
    })
      .then(() => {
        setDescription("");
        setType("");
        setDate("");
        setValue(0);
        alert("Adicionado com sucesso");
        loadData();
        reloadBalance();
      })
      .catch(() => {
        alert("Falha ao adicionar Entrada");
      });
  }, [description, type, date, value, loadData, reloadBalance]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Container>
      <Box>
        <Form>
          <Input
            width={300}
            placeholder="Descrição"
            value={description}
            onValueChange={setDescription}
          />
          <Input
            width={200}
            placeholder="Tipo"
            value={type}
            onValueChange={setType}
          />
          <Input placeholder="Data" value={date} onValueChange={setDate} />
          <Input placeholder="Valor" value={value} onValueChange={setValue} />
          <Button width={120} height={36} onClick={handleAddIncome} color="#">
            Adicionar
          </Button>
        </Form>
      </Box>
      <Box>
        <TransactionTable
          title="Transações de entrada"
          onDelete={handleDeleteIncome}
          type="income"
          data={incomes}
        />
      </Box>
    </Container>
  );
};
