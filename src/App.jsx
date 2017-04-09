import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from 'common/rootReducer';
import promiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';
import Feedback from 'modules/feedback/Feedback';

const rootElement = document.getElementById('root');
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(promiseMiddleware)
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="app-container">
        <Route exact path="/" component={Feedback} />
      </div>
    </BrowserRouter>
  </Provider>,
  rootElement
);
