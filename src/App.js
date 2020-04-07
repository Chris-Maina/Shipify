import React, { Suspense, lazy } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const LoginScreen = lazy(() => import('./containers/LoginScreen'));
const PageContainer = lazy(() => import('./containers/PageContainer'));
const RedirectScreen = lazy(() => import('./containers/RedirectScreen'));
const ShipmentScreen = lazy(() => import('./containers/ShipmentScreen'));
const ShipmentDetailsScreen = lazy(() => import('./containers/ShipmentDetailsScreen'));

function App() {
  return (
    <BrowserRouter>
     <Suspense fallback={<CircularProgress style={{ margin: '0 auto', display: 'table', lineHeight: 40 }} />}>
      <Switch>
        <Route exact path="/signin" component={LoginScreen} />
        <Route
          render={() => (
            <PageContainer>
                <Switch>
                  <Route exact path="/" component={RedirectScreen} />
                  <Route exact path="/shipments" component={ShipmentScreen} />
                  <Route exact path="/shipments/:id" component={ShipmentDetailsScreen} />
                </Switch>
              
            </PageContainer>
          )}>
        </Route>
      </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;