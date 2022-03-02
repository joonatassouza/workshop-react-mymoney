import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as AvatarSvg } from "../../assets/avatar.svg";
import { useBalance } from "../../contexts/Loading";
import { formatCurrency } from "../../utils/formatCurrency";

import { Container, Wrapper, User } from "./styles";

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const { balance } = useBalance();

  const pageInfo = useMemo(() => {
    switch (pathname) {
      case "/entradas":
        return {
          title: "MyMoney.com",
          subtitle: "Registro de entradas",
        };
      case "/saidas":
        return {
          title: "MyMoney.com",
          subtitle: "Registro de saídas",
        };
      default:
        return {
          title: "Dashboard",
          subtitle: "Relatório semanal das suas movimentações.",
        };
    }
  }, [pathname]);

  return (
    <Container>
      <Wrapper>
        <h1>{pageInfo?.title}</h1>
        <p>{pageInfo?.subtitle}</p>
      </Wrapper>
      <User>
        <section>
          <p>Jonatas Souza</p>
          {pathname !== "/" && formatCurrency(balance)}
        </section>
        <AvatarSvg width={50} height={50} />
      </User>
    </Container>
  );
};
