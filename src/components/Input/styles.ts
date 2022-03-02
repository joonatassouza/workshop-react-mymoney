import styled, { css } from "styled-components";

interface ContainerProps {
  flex?: boolean;
  width?: number;
}

export const Container = styled.input<ContainerProps>`
  padding: 5px;
  margin: 5px;
  height: 36px;
  width: 150px;
  border: 1px #999 solid;

  border-radius: 8px;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #aaa;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #aaa;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #aaa;
  }

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
`;
