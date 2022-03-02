import React from "react";
import { ReactComponent as PlusSvg } from "../../../../assets/plus.svg";
import { Box } from "../../../../components/Box";
import { Button } from "../../../../components/Button";
import { formatCurrency } from "../../../../utils/formatCurrency";

import { Container } from "./styles";

interface MoneyBoxProps {
  title: string;
  value: number;
  color?: string;
  style?: React.CSSProperties;
  flex?: boolean;
  onAction?: () => void;
}

const MoneyBox: React.FC<MoneyBoxProps> = ({
  title,
  value,
  color,
  flex,
  style,
  onAction,
}) => {
  return (
    <Box flex={flex} style={style} height={300}>
      <Container color={color}>
        <strong>{title}</strong>
        <div>
          <h1>{formatCurrency(value)}</h1>
          {onAction && (
            <Button
              onClick={onAction}
              color="#FFC145"
              width={60}
              height={60}
              borderRadius={30}
            >
              <PlusSvg width={30} />
            </Button>
          )}
        </div>
      </Container>
    </Box>
  );
};

export default MoneyBox;
