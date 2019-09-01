import styled from "styled-components";
import { Card, CardHeader, CardSubHeader, CardFooter } from "../../../Card/Card";
import React from "react";
import { observer } from "mobx-react";
import { NewsStoreType } from "../../../../stores/NewsStore";
import { formatRelative, subDays } from 'date-fns'
import { ru } from 'date-fns/locale'

export const NewsPath = styled.nav`
  font-weight: bold;
`

export const NewsDate = styled.nav`
  color: #818181;
`
export const NewsViews = styled.div`
  color: #818181;
`

export const SourceIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`

export const Source = styled.div`
  display: flex;
`

type NewsCardProps = { store: NewsStoreType}

export const NewsCard: React.FC<NewsCardProps> = observer(({ store }) => (
  <Card>
    <CardHeader>
      <NewsPath>Новость / Статья</NewsPath>
      <Source>
        {store.source.imageUrl && <SourceIcon src={store.source.imageUrl} />}
        {` ${store.source.title}`}
      </Source>
      <NewsDate>{formatRelative(store.createdAt, new Date(), { locale: ru })}</NewsDate>
      </CardHeader>
    <CardSubHeader>{store.title}</CardSubHeader>
      <div>{ store.description }</div>
      <CardFooter>
      {/* <div>http://lxer.com/module/newswire/ext_link.php?rid=274247</div> */}
      <NewsViews>0</NewsViews>
    </CardFooter>
  </Card>
))