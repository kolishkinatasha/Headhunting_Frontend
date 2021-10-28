import Container from 'components/layouts/Container';
import routes from 'components/routes';
import { NavLink, useLocation } from 'react-router-dom';
import React from 'react';

import classes from './Breadcrumbs.module.scss';
import { fullPathCreater, routeFilter, spliterPaths } from './utils';

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const splitPathArray = spliterPaths(pathname);

  let fullPath = '';
  const navLinks: JSX.Element[] = splitPathArray.map(
    (el: string, i: number) => {
      fullPath = fullPathCreater(fullPath, el);
      const rout = routeFilter(routes, fullPath);

      return (
        <NavLink
          key={i}
          className={classes.item}
          exact
          to={(rout && rout.path) || '/'}
        >
          {rout && rout.name}
        </NavLink>
      );
    },
  );

  return (
    <Container>
      <div className={classes.wrapper}>{navLinks}</div>
    </Container>
  );
};

export default Breadcrumbs;
