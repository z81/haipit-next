import React from 'react';
import { Header } from '../Header/Header';
import { MainHeaderStore } from 'stores/headerStores/MainHeaderStore';
import { observer } from 'mobx-react';
import { Logo } from './components/Logo';
import { HeaderMenu } from './components/HeaderMenu';
import { HeaderMenuItem } from './components/HeaderMenuItem';
import { Link } from 'components/Link/Link';
import { PageType } from 'routes';

type MainHeaderProps = {
  store: typeof MainHeaderStore['Type'];
};

export const MainHeader: React.FC<MainHeaderProps> = observer(({ store }) => (
  <Header>
    <Logo>//HaipIT</Logo>
    <HeaderMenu>
      {store.mainMenu.map(menu => (
        <HeaderMenuItem key={menu.name}>
          <Link routeName={PageType.news} routeParams={{}}>
            {menu.title}
          </Link>
        </HeaderMenuItem>
      ))}
    </HeaderMenu>
  </Header>
));
