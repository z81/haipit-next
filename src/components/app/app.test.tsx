import React from 'components/app/node_modules/react';
import ReactDOM from 'components/app/node_modules/react-dom';
import { App } from './app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
