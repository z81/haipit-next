import { MainPage } from 'pages/MainPage/MainPage';
import { NewsPageStore } from 'stores/pageStores/NewsPageStore';
import { ViewNewsPage } from 'pages/ViewNewsPage/ViewNewsPage';

export const routes = [
  {
    title: 'Публикации',
    name: 'news',
    path: '/',
    store: NewsPageStore,
    component: MainPage,
  },
  {
    name: 'view_news',
    title: 'Просмотр новости',
    path: '/news/view/:id',
    store: NewsPageStore,
    component: ViewNewsPage,
  },
];
