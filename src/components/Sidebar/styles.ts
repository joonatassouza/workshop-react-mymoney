import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  height: 100%;
  max-height: 100%;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 0;
  width: 250px;
`;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 180px;
  margin-top: 50px;

  ul {
    list-style: none;

    li {
      height: 50px;
    }
  }
`;

export const Item = styled(NavLink)`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;

  &.active-route {
    border-left-color: ${({ color }) => color};
    border-left-width: 8px;
    border-left-style: solid;
    background: green;

    svg {
      fill: ${({ color }) => color};
      stroke: red;
      fill: red;
    }

    color: ${({ color }) => color};
  }

  svg {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 15px;
  }

  text-decoration: none;
  color: #bbb;

  transition: all 200ms;

  &:hover {
    opacity: 0.8;
  }
`;
