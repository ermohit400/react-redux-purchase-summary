import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import PurchaseSummary from './components/PurchaseSummary';

class App extends Component {
 render() {
  return (
   <div className="App">
    <PurchaseSummary/>
   </div>
  );
 }
}

export default connect()(App);
