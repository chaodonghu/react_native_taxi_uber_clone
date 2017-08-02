import { createStore, applyMiddleware, compose } from 'redux';
// Thunk allows us to write actionCreators which allows us to return a function instead of an action
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';
import { createLogger } from 'redux-logger';

const log = createLogger({ diff: true, collapsed: true });

// A function which can create our store and auto-persist the data
export default (initialState = {}) => {
  // Middleware configuration
  const middleware = [thunk, log];
  // Store enhancers
  const enhancers = [];
  // Store Instantiation
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
  return store;
};
