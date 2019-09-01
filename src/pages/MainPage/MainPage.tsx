import React from 'react';
import { NewsCard } from '../../components/App/components/NewsCard/NewsCard';
import { MainHeader } from '../../components/App/components/MainHeader/MainHeader';
import { Content } from '../../components/Content/Content';
import { NewsListStoreType } from '../../stores/NewsListStore';
import { observer } from 'mobx-react';
import { LoadMoreButton } from './components/LoadMoreButton/LoadMoreButton';

type MainAppProps = { store: NewsListStoreType}

export const MainPage: React.FC<MainAppProps> = observer(({ store }) => {
  return (
    <>
      <MainHeader />
      <Content>
        {store.news.map((newStore) => (<NewsCard key={newStore.id} store={newStore} />))}
        <LoadMoreButton />
      </Content>
    </>
  );
})
