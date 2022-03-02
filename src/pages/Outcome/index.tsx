import React, { useCallback, useEffect, useState } from "react";
import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TransactionTable } from "../../components/TransactionTable";
import { useBalance } from "../../contexts/Loading";
import {
  deleteOutcome,
  getAllOutcome,
  postOutcome,
} from "../../services/outcome";
import { Outcome as OutcomeProps } from "../../services/outcome/types";

import { Container, Form } from "./styles";

export const Outcome: React.FC = () => {
  const { reload: reloadBalance } = useBalance();
  const [outcomes, setOutcomes] = useState<OutcomeProps[]>([]);

  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState(0);

  const loadData = useCallback(() => {
    getAllOutcome().then((data) => {
      setOutcomes(data);
    });
  }, []);

  const handleDeleteOutcome = useCallback(
    (id: string) => {
      deleteOutcome(id).then(() => {
        loadData();
        reloadBalance();
      });
    },
    [loadData, reloadBalance]
  );

  const handleAddOutcome = useCallback(() => {
    postOutcome({
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
        alert("Falha ao adicionar Saída");
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
          <Button width={120} height={36} onClick={handleAddOutcome} color="#">
            Adicionar
          </Button>
        </Form>
      </Box>
      <Box>
        <TransactionTable
          title="Transações de saída"
          onDelete={handleDeleteOutcome}
          type="outcome"
          data={outcomes}
        />
      </Box>
    </Container>
  );
};
