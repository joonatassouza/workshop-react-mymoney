import React from "react";

import { Container } from "./styles";

interface BoxProps {
  flex?: boolean;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export const Box: React.FC<BoxProps> = ({
  flex,
  width,
  style,
  height,
  children,
}) => {
  return (
    <Container flex={flex} width={width} height={height} style={style}>
      {children}
    </Container>
  );
};
