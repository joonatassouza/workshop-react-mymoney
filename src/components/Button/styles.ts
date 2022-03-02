import styled, { css } from "styled-components";

interface ContainerProps {
  flex?: boolean;
  width?: number;
  height?: number;
  borderColor?: string;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  fontSize?: number;
  color?: string;
  background?: string;
  padding?: number;
}

export const Container = styled.button<ContainerProps>`
  border-radius: 5px;
  background: #ffc145;

  border: none;
  transition: filter 300ms;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(0.8);
  }

  ${({ flex }) =>
    flex &&
    css`
      flex: 1;
    `}

  ${({ width }) =>
    width !== undefined &&
    css`
      width: ${width}px;
    `}
    
  ${({ height }) =>
    height !== undefined &&
    css`
      height: ${height}px;
    `}

  ${({ borderRadius }) =>
    borderRadius !== undefined &&
    css`
      border-radius: ${borderRadius}px;
    `}

  ${({ borderTopLeftRadius }) =>
    borderTopLeftRadius !== undefined &&
    css`
      border-top-left-radius: ${borderTopLeftRadius}px;
    `}

  ${({ borderTopRightRadius }) =>
    borderTopRightRadius !== undefined &&
    css`
      border-top-right-radius: ${borderTopRightRadius}px;
    `}

  ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius !== undefined &&
    css`
      border-bottom-left-radius: ${borderBottomLeftRadius}px;
    `}

  ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius !== undefined &&
    css`
      border-bottom-right-radius: ${borderBottomRightRadius}px;
    `}

  ${({ fontSize }) =>
    fontSize !== undefined &&
    css`
      font-size: ${fontSize}px;
    `}

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}

  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}

  ${({ borderColor }) =>
    borderColor &&
    css`
      border: 1px ${borderColor} solid;
    `}

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding}px;
    `}
`;
