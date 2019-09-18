import { NewsCard } from 'components/app/components/news-card/news-card';
import { NewsLoaderPlaceholder } from 'components/app/components/news-card/news-loader-placeholder';
import { Button } from 'components/button/button';
import { Content } from 'components/content/content';
import { observer } from 'mobx-react';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { NewsPageStore } from 'stores/page-stores/news-page-store';
import { HeaderPages } from './components/header-pages';
import { PaginationPagesCount } from './components/pagination-pages-count';

type MainAppProps = { pageStore: typeof NewsPageStore['Type'] };

export const MainPage: React.FC<MainAppProps> = observer(({ pageStore }) => {
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
