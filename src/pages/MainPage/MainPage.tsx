import React from 'react';
import { NewsCard } from 'components/App/components/NewsCard/NewsCard';
import { Content } from 'components/Content/Content';
import { observer } from 'mobx-react';
import { Button } from 'components/Button/Button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { HeaderPages } from './components/HeaderPages';
import { PaginationPagesCount } from './components/PaginationPagesCount';
import { NewsLoaderPlaceholder } from 'components/App/components/NewsCard/NewsLoaderPlaceholder';
import { NewsPageStore } from 'stores/pageStores/NewsPageStore';

type MainAppProps = { store: typeof NewsPageStore['Type'] };

export const MainPage: React.FC<MainAppProps> = observer(({ store: pageStore }) => {
  const { store } = pageStore;

  return (
    <Content>
      <HeaderPages>
        <Button onClick={store.loadNext}>
          <FaArrowLeft />
        </Button>
        <Button onClick={store.loadNext}>
          <FaArrowRight />
        </Button>
        <PaginationPagesCount>
          {store.currentPage} из {store.totalPages}
        </PaginationPagesCount>
      </HeaderPages>
      {store.isLoading && [1, 2, 3, 4, 5].map(i => <NewsLoaderPlaceholder key={i} />)}
      {store.news.map((newStore: any) => (
        <NewsCard key={newStore.id} store={newStore} />
      ))}
    </Content>
  );
});
