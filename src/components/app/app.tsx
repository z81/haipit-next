import React from 'react';
import { Provider } from 'mobx-react';
import { Router, View } from 'react-navi';
import { RootStore } from 'stores/root-store';
import { AppStyled } from './app.styled';
import { MainHeader } from './components/main-header/main-header';
import { GlobalStyle } from './global-style';
import { routes } from 'routes';

export const rootStore = RootStore.create({});

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppStyled>
      <Router routes={routes}>
        <Provider store={rootStore}>
          <MainHeader store={rootStore.mainMenu} />
          <View />
        </Provider>
      </Router>
    </AppStyled>
  </>
);
