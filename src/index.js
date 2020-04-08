import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const store = configureStore({});

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        minHeight: 36,
      }
    },
    MuiInputBase: {
      root: {
        marginTop: 10,
      },
      input: {
        borderRadius: 14,
        padding: '10px 12px',
        border: '1px solid #ced4da',
      },
    },
    MuiRadio: {
      root: {
        color: '#151537'
      }
    }
  },
  typography: {
    fontFamily: [
      'Lato',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif'
    ].join(','),
    fontSize: 14,
  },
  palette: {
    primary: {
      main: '#008DF6'
    },
    secondary: {
      main: '#F58C55'
    },
    text: {
      primary: '#151537',
      secondary: '#F58C55'
    },
    background: {
      paper: '#FEFEFD',
      default: '#FEFEFD',
    }
  }
});
/**
 * With react-snap installed, you'll check if there are child nodes to determine
 * whether HTML contents were pre-rendered (or rendered on the server).
 * If True use ReactDOM.hydrate to attach event listeners to the already created HTML instead of creating it anew.
 */
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>,
    rootElement
  );
} else {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>,
    rootElement
  );
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
