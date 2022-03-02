import styled, { css } from "styled-components";

interface ContainerProps {
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  strong {
    font-size: 22px;
    ${({ color }) =>
      color &&
      css`
        color: ${color};
      `}
  }

  div {
    flex: 1;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    h1 {
      font-size: 42px;
      ${({ color }) =>
        color &&
        css`
          color: ${color};
        `}

      padding: 42px;
      margin-right: 42px;
      border-right: 1px #dedede solid;
    }
  }
`;
