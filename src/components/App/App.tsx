import React from 'react';
import { PageTitle } from 'components/app/page-title/page-title';
import { RouterComponent } from 'components/router-component/router-component';
import { Provider } from 'mobx-react';
import { RouterProvider } from 'react-router5';
import { RootStore } from 'stores/root-store';
import { AppStyled } from './app.styled';
import { MainHeader } from './components/main-header/main-header';
import { GlobalStyle } from './global-style';

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
