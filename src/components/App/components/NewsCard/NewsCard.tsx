import styled from 'styled-components';
import { Card, CardHeader, CardSubHeader } from 'components/Card/Card';
import React from 'react';
import { observer } from 'mobx-react';
import { NewsStoreType } from 'stores/NewsStore';
import { FaEye } from 'react-icons/fa';

export const NewsPath = styled.nav`
  font-weight: bold;
`;

export const NewsDate = styled.nav`
  color: #818181;
`;
export const NewsViews = styled.div`
  display: flex;
  color: #b3b3b3;
  svg {
    margin-right: 5px;
  }
`;

export const SourceIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

export const Source = styled.div`
  display: flex;
`;

type NewsCardProps = { store: NewsStoreType };

export const NewsCard: React.FC<NewsCardProps> = observer(({ store }) => (
  <Card>
    <CardHeader>
      <NewsPath>{store.path}</NewsPath>
      <Source>
        {store.source.imageUrl && <SourceIcon src={store.source.imageUrl} />}
        {` ${store.source.title}`}
      </Source>
      <NewsDate>{store.date}</NewsDate>
      <NewsViews>
        <FaEye size={16} /> {store.views}
      </NewsViews>
    </CardHeader>
    <CardSubHeader>{store.title}</CardSubHeader>
    <div>{store.description}</div>
    {/* <CardFooter>
      <NewsViews>
        <FaEye size={16} /> 0
      </NewsViews>
    </CardFooter> */}
  </Card>
));
