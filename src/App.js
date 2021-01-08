import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Player from '@/views/player/playbar/index'
import store from '@/store'
import routes from './router'

function App() {
  return (
    <Provider store={store}>
      <Route>
        <div>
          <Header />
          {renderRoutes(routes)}
          <Player />
          <Footer />
        </div>
      </Route>
    </Provider>
  );
}

// if (module.hot) {
//   module.hot.accept('./views/discover/cPages/recommend', () => {
//     console.log(123)
//     store.dispatch(clearRankingListAction([]))
//   })
// }

export default memo(App);
