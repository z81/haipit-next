import { MainPage } from 'pages/main-page/main-page';
import { NewsPageStore } from 'stores/page-stores/news-page-store';
// import { ViewNewsPage } from 'pages/view-news-page/viewnews-page';
// import { NewsViewPageStore } from 'stores/page-stores/news-view-page-store';
import { mount, route } from 'navi';

export enum PageType {
  news = 'news',
  view_news = 'view_news',
}

export const routes = mount({
  '/page/:page': route({
    title: 'Публикации',
    getView: () => import('stores/page-stores/news-view-page-store'),
  }),
  '/news/view/:id': route({
    title: 'Просмотр новости',
    getView: () => import('pages/view-news-page/viewnews-page'),
  }),
});
