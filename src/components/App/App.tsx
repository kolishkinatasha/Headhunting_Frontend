import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import '@ff/ui-kit/lib/styles/fns.theme.css';
import Header from 'components/layouts/Header';
import BasicBreadcrumbs from 'components/Breadcrumbs';
import Main from 'components/layouts/Main';
import routes from 'components/routes';
import Loader from 'components/Loader';

import classes from './App.module.scss';

const NotFound = React.lazy(() => import('../routes/NotFound'));

const App: React.FC = () => (
  <div className={classes.component}>
    <Header />
    <BasicBreadcrumbs />
    <Main>
      <Suspense fallback={<Loader />}>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Main>
  </div>
);

export default App;
