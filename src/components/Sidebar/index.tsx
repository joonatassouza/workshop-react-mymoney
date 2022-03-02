import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as GraphSvg } from "../../assets/graph.svg";
import { ReactComponent as ArrowUpSvg } from "../../assets/arrow-up.svg";
import { ReactComponent as ArrowDownSvg } from "../../assets/arrow-down.svg";
import { ReactComponent as GraphActiveSvg } from "../../assets/graph-active.svg";
import { ReactComponent as ArrowUpActiveSvg } from "../../assets/arrow-up-active.svg";
import { ReactComponent as ArrowDownActiveSvg } from "../../assets/arrow-down-active.svg";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";

import { Nav, Container, Item } from "./styles";

export const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <LogoSvg />
      <Nav>
        <ul>
          <li>
            <Item
              style={{
                color: pathname === "/" ? "#197BBD" : "#AEAEAE",
              }}
              to="/"
            >
              {pathname === "/" ? (
                <GraphActiveSvg width={35} height={35} />
              ) : (
                <GraphSvg width={35} height={35} />
              )}
              Dashboard
            </Item>
          </li>
          <li>
            <Item
              style={{
                color: pathname === "/entradas" ? "#197BBD" : "#AEAEAE",
              }}
              className={(navData) => (navData.isActive ? "active-route" : "")}
              to="/entradas"
            >
              {pathname === "/entradas" ? (
                <ArrowUpActiveSvg width={35} height={35} />
              ) : (
                <ArrowUpSvg width={35} height={35} />
              )}
              Entradas
            </Item>
          </li>
          <li>
            <Item
              style={{
                color: pathname === "/saidas" ? "#197BBD" : "#AEAEAE",
              }}
              className={(navData) => (navData.isActive ? "active-route" : "")}
              to="/saidas"
            >
              {pathname === "/saidas" ? (
                <ArrowDownActiveSvg width={35} height={35} />
              ) : (
                <ArrowDownSvg width={35} height={35} />
              )}
              Saídas
            </Item>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};
