import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

// store precisa vir depois do reactotron se não não tem acesso as informações
// do sagaMonitor e createEnhance
import store from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
