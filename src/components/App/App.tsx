import React from 'react';
import { Provider } from 'mobx-react';
import { MainPage } from 'pages/MainPage/MainPage';
import { AppStyled } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import { RootStore } from 'stores/RootStore';
import * as services from 'services';
import { MainHeader } from './components/MainHeader/MainHeader';
import { RouterProvider, Route } from 'react-router5';
import { match, value } from 'perfect-matcher';
import { ViewNewsPage } from 'pages/ViewNewsPage/ViewNewsPage';

const store = RootStore(services).create({});

export const App: React.FC = () => (
  <React.Fragment>
    <GlobalStyle />
    <AppStyled>
      <Provider store={store}>
        <MainHeader routes={store.router.routes} />
        <RouterProvider router={store.router.routerInstance}>
          <Route>
            {({ route }) =>
              route &&
              match(route.name)(
                value('news', () => <MainPage store={store.news} />),
                value('view_news', () => <ViewNewsPage store={store.news.news[0]} />)
              )
            }
          </Route>
        </RouterProvider>
      </Provider>
    </AppStyled>
  </React.Fragment>
);
