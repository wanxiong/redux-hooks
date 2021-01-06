import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Footer from '@/components/footer';
import Header from '@/components/header';
import store from '@/store'
import routes from './router'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Header />
          {renderRoutes(routes)}
          <Footer />
        </div>
      </HashRouter>
    </Provider>
  );
}

export default memo(App);
