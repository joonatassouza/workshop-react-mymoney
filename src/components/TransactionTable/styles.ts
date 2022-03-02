import styled, { css } from "styled-components";

interface ContainerProps {
  width?: number;
  hasAction: boolean;
}

export const Container = styled.ul<ContainerProps>`
  margin: 5px;
  width: calc(100% - 10px);

  > h2 {
    margin-bottom: 20px;
  }

  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}

  li {
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 2fr ${({ hasAction }) =>
        hasAction && "60px"};

    padding: 5px;

    border-bottom: 1px #eee solid;

    p {
      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;
      }
    }
  }
`;

interface HeaderProps {
  hasTitle: boolean;
}

export const Header = styled.li<HeaderProps>`
  ${({ hasTitle }) =>
    hasTitle
      ? css`
          &:nth-child(2) {
            border-bottom-color: transparent;
          }
        `
      : css`
          &:first-child {
            border-bottom-color: transparent;
          }
        `}
`;

interface TextAlignProps {
  textAlign?: "center" | "start" | "end";
}

export const ColumnTitle = styled.p<TextAlignProps>`
  color: #999;
  justify-self: ${({ textAlign }) => textAlign ?? "start"};
`;

export const RowItem = styled.p<TextAlignProps>`
  justify-self: ${({ textAlign }) => textAlign ?? "start"};
`;
