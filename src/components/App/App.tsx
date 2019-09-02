import React from 'react';
import { Provider } from 'mobx-react';
import { MainPage } from 'pages/MainPage/MainPage';
import { AppStyled } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import { RootStore } from 'stores/RootStore';
import * as services from 'services';
import { MainHeader } from './components/MainHeader/MainHeader';

const store = RootStore(services).create({});

export const App: React.FC = () => (
  <React.Fragment>
    <GlobalStyle />
    <AppStyled>
      <Provider store={store}>
        <MainHeader store={store.headerMenu} />
        <MainPage store={store.news} />
      </Provider>
    </AppStyled>
  </React.Fragment>
);
