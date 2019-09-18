import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { RouterStore } from 'stores/router-store';

const titleNode = document.querySelector('title');

export type PageTitleProps = {
  store: typeof RouterStore.Type.currentRoute;
};

export const PageTitle: React.FC<PageTitleProps> = observer(({ store }) =>
  ReactDOM.createPortal(store!.pageStore!.title, titleNode!)
);
