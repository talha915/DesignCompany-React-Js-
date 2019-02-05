import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

/* Components */
import Main from './components/Main';

/* Configurations */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducers from './reducers/index';

class App extends Component {
  render() {
    const store = createStore(
      rootReducers, 
      applyMiddleware(logger, thunkMiddleware)
    );
    console.log("Store", store.getState());
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

export default App;
