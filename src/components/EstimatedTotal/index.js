import React, {Component} from 'react';
import './style.scss';

class EstimatedTotal extends Component{
  render(){
    return(
      <div className="container_estimated_total">
        <div className="tax-wrap">
          <span className="pull-left space0">Est. total</span>
          <span className="pull-right space0 fntBld">$120.94</span>
        </div>
      </div>
    );
  }
}

export default EstimatedTotal;
