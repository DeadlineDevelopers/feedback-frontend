import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Feedback from 'modules/feedback/Feedback';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <div className="app-container">
      <Route exact path="/" component={Feedback} />
    </div>
  </BrowserRouter>,
  rootElement
);
