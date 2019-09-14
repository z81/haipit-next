import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { RootStore } from 'stores/RootStore';
import { RouterStore } from 'stores/RouterStore';

const titleNode = document.querySelector('title');

export type PageTitleProps = {
  store: typeof RouterStore.Type.currentRoute;
};

export const PageTitle: React.FC<PageTitleProps> = observer(({ store }) =>
  ReactDOM.createPortal(store!.pageStore!.title, titleNode!)
);
