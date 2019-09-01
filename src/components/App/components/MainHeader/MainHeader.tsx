import React from "react";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styled from "styled-components";
import { Header } from "../Header/Header";

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

const Button = styled.button`
  background: white;
  box-shadow: 0 2px 1px rgba(0,0,0,.05);
  border: 1px solid rgba(0,0,0,.15);
  outline: none;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  :hover {
    border: 1px solid rgba(0,0,0,.2);
  }
`

const HeaderPages = styled.div`
  position: fixed;
  right: 5px;
  top: 55px;
  * {
    margin-right: 5px;
    margin-left: 5px;
  }
`

export const MainHeader: React.FC = () => (
  <Header>
    <Logo>//HaipIT</Logo>
    <HeaderMenu>
      <HeaderMenuItem>Публикации</HeaderMenuItem>
    </HeaderMenu>
    <HeaderPages>
      <Button><FaArrowLeft /></Button>
      <Button><FaArrowRight /></Button>
    </HeaderPages>
  </Header>
)