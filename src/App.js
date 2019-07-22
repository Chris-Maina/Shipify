import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageContainer from './containers/PageContainer';
import ShipmentScreen from './containers/ShipmentScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          render={() => (
            <PageContainer>
              <Switch>
                <Route exact path="/" component={ShipmentScreen} />
              </Switch>
            </PageContainer>
          )}>
        </Route> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;