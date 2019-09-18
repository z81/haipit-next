import React from 'react';
import { Header } from '../header/header';
import { MainHeaderStore } from 'stores/header-stores/main-header-store';
import { observer } from 'mobx-react';
import { Logo } from './components/logo';
import { HeaderMenu } from './components/header-menu';
import { HeaderMenuItem } from './components/header-menu-item';
import { Link } from 'components/link/link';
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
