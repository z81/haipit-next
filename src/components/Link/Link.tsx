import { Link as RouterLink } from 'react-router5';
import React from 'react';
import { PageType } from 'routes';

export type LinkProps = {
  routeName: PageType;
  routeParams: object;
};

export const Link: React.FC<LinkProps> = props => <RouterLink {...props}></RouterLink>;
