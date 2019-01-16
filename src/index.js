import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { createPost } from './actions';
import appReducer from './reducers';
import CustomConnectedPostList from './containers/CustomConnectedPostList';
import ConnectedPostList from './containers/ConnectedPostList';

const store = createStore(appReducer);
store.dispatch(createPost('steve', 'first post'));
setTimeout(() => store.dispatch(createPost('dan', 'hi!')), 1000);

ReactDOM.render( 
  <Provider><ConnectedPostList store={store} /></Provider>,
  document.getElementById('root')
)