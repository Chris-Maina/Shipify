import React, { Suspense, lazy } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageContainer from './containers/PageContainer';
const RedirectScreen = lazy(() => import('./containers/RedirectScreen'));
const ShipmentScreen = lazy(() => import('./containers/ShipmentScreen'));
const ShipmentDetailsScreen = lazy(() => import('./containers/ShipmentDetailsScreen'));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          render={() => (
            <PageContainer>
              <Suspense fallback={<CircularProgress />}>
                <Switch>
                  <Route exact path="/" component={RedirectScreen} />
                  <Route exact path="/shipments" component={ShipmentScreen} />
                  <Route exact path="/shipments/:id" component={ShipmentDetailsScreen} />
                </Switch>
              </Suspense>
            </PageContainer>
          )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;