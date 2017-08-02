import React from 'react';

import createStore from './store/createStore';
import AppContainer from './AppContainer/index';

export default class Root extends React.Component {
  renderApp(){
    const initialState = window.___INITIAL_STATE__;
    const store = createStore(initialState);

    return(
      <AppContainer store={store} />
    );
  }
  render() {
    return this.renderApp();
  }
}
