import { MainPage } from 'pages/MainPage/MainPage';
import { NewsPageStore } from 'stores/pageStores/NewsPageStore';
import { ViewNewsPage } from 'pages/ViewNewsPage/ViewNewsPage';
import { NewsViewPageStore } from 'stores/pageStores/NewsViewPageStore';

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
