import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: row;
  height: 100%;
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: calc(100vh - 5.5rem);
  padding-top: 30px;
`;
