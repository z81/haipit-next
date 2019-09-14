import React from 'react';
import { Provider } from 'mobx-react';
import { AppStyled } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import { RootStore } from 'stores/RootStore';
import { MainHeader } from './components/MainHeader/MainHeader';
import { RouterProvider } from 'react-router5';

export const rootStore = RootStore.create({});
const RouterComponent = rootStore.router.routerComponent;

export const App: React.FC = () => (
  <React.Fragment>
    <GlobalStyle />
    <AppStyled>
      <RouterProvider router={rootStore.router.routerInstance}>
        <Provider store={rootStore}>
          <MainHeader store={rootStore.mainMenu} />
          <RouterComponent store={rootStore.router.currentRoute!.pageStore} />
        </Provider>
      </RouterProvider>
    </AppStyled>
  </React.Fragment>
);
