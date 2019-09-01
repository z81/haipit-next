import styled from "styled-components";
import { Card, CardHeader, CardSubHeader, CardFooter } from "../../../Card/Card";
import React from "react";
import { observer } from "mobx-react";
import { NewsStoreType } from "../../../../stores/NewsStore";

export const NewsPath = styled.nav`
  font-weight: bold;
`

export const NewsDate = styled.nav`
  color: #818181;
`
export const NewsViews = styled.div`
  color: #818181;
`

type NewsCardProps = { store: NewsStoreType}

export const NewsCard: React.FC<NewsCardProps> = observer(({ store }) => (
  <Card>
    <CardHeader>
      <NewsPath>Новость / Статья</NewsPath>
        <div>LXER</div>
      <NewsDate>сегодня в 22:42</NewsDate>
      </CardHeader>
    <CardSubHeader>{store.title}</CardSubHeader>
      <div>{ store.description }</div>
      <CardFooter>
      {/* <div>http://lxer.com/module/newswire/ext_link.php?rid=274247</div> */}
      <NewsViews>0</NewsViews>
    </CardFooter>
  </Card>
))