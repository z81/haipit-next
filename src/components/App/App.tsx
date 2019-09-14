import React from 'react';
import { PageTitle } from 'components/App/PageTitle/PageTitle';
import { RouterComponent } from 'components/RouterComponent/RouterComponent';
import { Provider } from 'mobx-react';
import { RouterProvider } from 'react-router5';
import { RootStore } from 'stores/RootStore';
import { AppStyled } from './App.styled';
import { MainHeader } from './components/MainHeader/MainHeader';
import { GlobalStyle } from './GlobalStyle';

export const rootStore = RootStore.create({});

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppStyled>
      <RouterProvider router={rootStore.router.routerInstance}>
        <Provider store={rootStore}>
          <PageTitle store={rootStore.router.currentRoute} />
          <MainHeader store={rootStore.mainMenu} />
          <RouterComponent />
        </Provider>
      </RouterProvider>
    </AppStyled>
  </>
);
