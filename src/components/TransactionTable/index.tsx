import React from "react";
import { Income } from "../../services/income/types";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import { Container, Header, ColumnTitle, RowItem } from "./styles";
import { ReactComponent as IncomeSvg } from "../../assets/income.svg";
import { ReactComponent as OutcomeSvg } from "../../assets/outcome.svg";
import { ReactComponent as DeleteSvg } from "../../assets/delete.svg";
import { Button } from "../Button";

interface TransactionTableProps {
  title?: string;
  data: Income[];
  width?: number;
  type: "income" | "outcome";
  onDelete?: (id: string) => void;
}

export const TransactionTable: React.FC<TransactionTableProps> = ({
  title,
  width,
  data,
  type,
  onDelete,
}) => {
  return (
    <Container width={width} hasAction={!!onDelete}>
      {title && <h2>{title}</h2>}
      <Header hasTitle={!!title}>
        <ColumnTitle>Descrição</ColumnTitle>
        <ColumnTitle textAlign="center">Tipo</ColumnTitle>
        <ColumnTitle textAlign="center">Data</ColumnTitle>
        <ColumnTitle textAlign="end">Valor</ColumnTitle>
        {onDelete && <ColumnTitle></ColumnTitle>}
      </Header>
      {data.length
        ? data.map((item) => (
            <li key={item.id}>
              <RowItem>
                {type === "income" ? (
                  <IncomeSvg width={40} height={40} />
                ) : (
                  <OutcomeSvg width={40} height={40} />
                )}
                {item.description}
              </RowItem>
              <RowItem>{item.type}</RowItem>
              <RowItem textAlign="center">{formatDate(item.date)}</RowItem>
              <RowItem textAlign="end">{formatCurrency(item.value)}</RowItem>
              {onDelete && (
                <RowItem textAlign="end">
                  <Button
                    onClick={() => onDelete(item.id)}
                    background="transparent"
                  >
                    <DeleteSvg width={40} height={40} />
                  </Button>
                </RowItem>
              )}
            </li>
          ))
        : "empty list"}
    </Container>
  );
};
