import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import PurchaseSummary from './components/PurchaseSummary';

class App extends Component {
 render() {
  return (
   <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
     <div className="App">
      <PurchaseSummary/>
     </div>
   </Provider>
  );
 }
}

export default App;
