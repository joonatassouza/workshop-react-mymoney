import React from "react";

import { Container } from "./styles";

interface ButtonProps {
  flex?: boolean;
  width?: number;
  height?: number;
  padding?: number;
  borderColor?: string;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  fontSize?: number;
  color?: string;
  background?: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  flex,
  width,
  padding,
  height,
  borderColor,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  fontSize,
  color,
  background,
  children,
}) => {
  return (
    <Container
      type="button"
      onClick={onClick}
      flex={flex}
      width={width}
      height={height}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderBottomRightRadius={borderBottomRightRadius}
      fontSize={fontSize}
      color={color}
      background={background}
      padding={padding}
    >
      {children}
    </Container>
  );
};
