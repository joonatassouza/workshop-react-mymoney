import styled, { css } from "styled-components";

interface ContainerProps {
  flex?: boolean;
  width?: number;
  height?: number;
}

export const Container = styled.div<ContainerProps>`
  padding: 20px;
  margin: 10px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06);
  border-radius: 28px;
  display: flex;

  ${({ flex }) =>
    flex &&
    css`
      flex: 1;
    `}

  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}

  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
`;
