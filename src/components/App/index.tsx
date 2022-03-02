import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

import { Container, Body, Content } from "./styles";

export const App: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Body>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Body>
    </Container>
  );
};
