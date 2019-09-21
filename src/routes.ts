import { MainPage } from 'pages/main-page/main-page';
import { NewsPageStore } from 'stores/page-stores/news-page-store';
import { ViewNewsPage } from 'pages/view-news-page/viewnews-page';
import { NewsViewPageStore } from 'stores/page-stores/news-view-page-store';

export enum PageType {
  news = 'news',
  view_news = 'view_news',
}

export const routes = [
  {
    title: 'Публикации',
    name: PageType.news,
    path: '/',
    store: NewsPageStore,
    component: MainPage,
  },
  {
    name: PageType.view_news,
    title: 'Просмотр новости',
    path: '/news/view/:id',
    store: NewsViewPageStore,
    component: ViewNewsPage,
  },
];
