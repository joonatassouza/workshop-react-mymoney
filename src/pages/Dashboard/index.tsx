import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { TransactionTable } from "../../components/TransactionTable";
import { useBalance } from "../../contexts/Loading";
import { getLastIncome, getTotalIncome } from "../../services/income";
import { Income } from "../../services/income/types";
import { getLastOutcome, getTotalOutcome } from "../../services/outcome";
import { Outcome } from "../../services/outcome/types";
import MoneyBox from "./components/MoneyBox";
import { Container, LastTransactions } from "./styles";

export const Dashboard: React.FC = () => {
  let navigate = useNavigate();
  const [lastTransactionsType, setLastTransactionsType] = useState<
    "income" | "outcome"
  >("income");
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [outcomes, setOutcomes] = useState<Outcome[]>([]);

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalOutcome, setTotalOutcome] = useState(0);

  const { balance } = useBalance();

  useEffect(() => {
    getTotalIncome().then(setTotalIncome);
    getTotalOutcome().then(setTotalOutcome);
    getLastIncome().then((data) => {
      setIncomes(data);
    });
    getLastOutcome().then((data) => {
      setOutcomes(data);
    });
  }, []);

  return (
    <Container>
      <section>
        <MoneyBox
          onAction={() => {
            navigate("entradas");
          }}
          title="Entradas"
          value={totalIncome}
          color="#197BBD"
          flex
        />
        <MoneyBox
          onAction={() => {
            navigate("saidas");
          }}
          title="Saídas"
          value={totalOutcome}
          color="#F83636"
          flex
        />
      </section>
      <section>
        <Box flex>
          <LastTransactions>
            <div className="header">
              <span>Últimas transações</span>
              <div>
                <Button
                  width={100}
                  background={
                    lastTransactionsType === "income" ? "#197BBD" : "#fff"
                  }
                  onClick={() => {
                    setLastTransactionsType("income");
                  }}
                  borderBottomRightRadius={0}
                  borderTopRightRadius={0}
                  padding={8}
                  borderColor="#197BBD"
                  color={lastTransactionsType === "income" ? "#fff" : "#197BBD"}
                >
                  Entradas
                </Button>
                <Button
                  width={100}
                  background={
                    lastTransactionsType === "outcome" ? "#F83636" : "#fff"
                  }
                  onClick={() => {
                    setLastTransactionsType("outcome");
                  }}
                  borderBottomLeftRadius={0}
                  borderTopLeftRadius={0}
                  padding={8}
                  borderColor="#F83636"
                  color={
                    lastTransactionsType === "outcome" ? "#fff" : "#F83636"
                  }
                >
                  Saídas
                </Button>
              </div>
            </div>
            <TransactionTable
              type={lastTransactionsType}
              data={lastTransactionsType === "income" ? incomes : outcomes}
            />
          </LastTransactions>
        </Box>
        <MoneyBox
          title="Saldo"
          value={balance}
          color="#049012"
          style={{ flex: 0.5 }}
        />
      </section>
    </Container>
  );
};
