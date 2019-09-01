import React from "react";
import { Card } from "../../../../components/Card/Card";
import { LoadMoreButtonStyled } from "./LoadMoreButton.styled";



export const LoadMoreButton: React.FC = () => {
  return (
    <Card>
      <LoadMoreButtonStyled>Загрузить ешё</LoadMoreButtonStyled>
    </Card>
  );
}
