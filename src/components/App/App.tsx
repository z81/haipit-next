import React from 'react';
import { Provider } from 'mobx-react';
import { MainPage } from 'pages/MainPage/MainPage';
import { AppStyled } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import { RootStore } from 'stores/RootStore';
import { MainHeader } from './components/MainHeader/MainHeader';
import { RouterProvider, Route } from 'react-router5';
import { match, value, any } from 'perfect-matcher';
import { ViewNewsPage } from 'pages/ViewNewsPage/ViewNewsPage';

const store = RootStore.create({});
const RouterComponent = store.router.routerComponent;

export const App: React.FC = () => (
  <React.Fragment>
    <GlobalStyle />
    <AppStyled>
      <Provider store={store}>
        <MainHeader routes={store.router.routes} />
        {<RouterComponent store={store.router.currentRoute!.store} />}
        {/* <RouterProvider router={store.router.routerInstance}>
          <Route>
            {({ route  }) =>
              route &&
              match(route.name)(
                value('view_news', () => <ViewNewsPage store={store.news.news[0]} />),
                any(() => <MainPage store={store.news} />)
              )
            }
          </Route>
        </RouterProvider> */}
      </Provider>
    </AppStyled>
  </React.Fragment>
);
