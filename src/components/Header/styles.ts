import styled from "styled-components";

export const Container = styled.header`
  height: 5.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const Wrapper = styled.div`
  h1 {
    font-size: 48px;
  }

  p {
    font-style: italic;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  section {
    margin-right: 20px;
    flex: 1
    height: 100%;
    text-align: right;
    color: #aeaeae;
  }
`;
