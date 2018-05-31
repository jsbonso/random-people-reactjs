
import React, { Component } from 'react';
import './App.css';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import PeopleList from './components/pages/peopleList';
const middleware =applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);



class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <PeopleList />
        </Provider>
    );
  }
}

export default App;
