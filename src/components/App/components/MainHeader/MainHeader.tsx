import React from "react";
import { Header } from "../Header/Header";
import styled from "styled-components";


const Logo = styled.div`
  font-size: 36px;
  line-height: 50px;
  padding: 0 10px;
  height: 100%;
`

const HeaderMenu = styled.nav`
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const HeaderMenuItem = styled.div`
  font-size: 20px;

  :hover {
    color: #62c56f;
    cursor: pointer;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(to right,#6da929 0%,#3396ad 51%,#33a238 100%);
  }
`

export const MainHeader: React.FC = () => (
  <Header>
    <Logo>//HaipIT</Logo>
    <HeaderMenu>
      <HeaderMenuItem>Публикации</HeaderMenuItem>
    </HeaderMenu>
  </Header>
)