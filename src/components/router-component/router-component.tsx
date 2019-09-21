import { observer } from 'mobx-react';
import { rootStore } from 'components/app/app';
import React from 'react';

export const RouterComponent = observer(() => {
  const Router = rootStore.router.routerComponent;
  return <Router pageStore={rootStore.router.currentRoute!.pageStore} />;
});
