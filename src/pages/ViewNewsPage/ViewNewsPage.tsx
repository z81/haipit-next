import { Content } from 'components/Content/Content';
import { observer } from 'mobx-react';
import React from 'react';
import { NewsViewPageStore } from 'stores/pageStores/NewsViewPageStore';
import styled from 'styled-components';
import { NewsCardHeader } from 'components/App/components/NewsCard/components/NewsCardHeader';

export type ViewNewsPageProps = {
  pageStore: typeof NewsViewPageStore['Type'];
};

export const ViewContent = styled.div`
  background: white;
  max-width: 760px;
  border: 1px solid #e3e3e3;
`;

export const ViewTitle = styled.h1`
  padding: 0 20px;
`;

export const ViewDescription = styled.div`
  padding: 20px;
  padding-top: 0;
  line-height: 1.2em;
  a {
    color: #3971fbcf;
    display: inline-block;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const ViewHeader = styled.div`
  padding: 20px;
  padding-bottom: 0;
`;

export const ViewNewsPage: React.FC<ViewNewsPageProps> = observer(({ pageStore }) => (
  <Content>
    <ViewContent>
      <ViewHeader>
        <NewsCardHeader store={pageStore.store} />
      </ViewHeader>
      <ViewTitle>
        <a href={pageStore.store.link}>{pageStore.store.title}</a>
      </ViewTitle>
      <ViewDescription>
        <span dangerouslySetInnerHTML={{ __html: pageStore.store.description! }}></span>
      </ViewDescription>
    </ViewContent>
  </Content>
));
