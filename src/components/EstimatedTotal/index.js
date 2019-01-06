import React, {Component} from 'react';
import './style.scss';

class EstimatedTotal extends Component{
  render(){

    return(
      <div className="container_estimated_total">
          { this.props.promocodes.newPrice && this.props.promocodes.newPrice  ? <div className="tax-wrap">
                <span className="pull-left space0">Discount</span>
                <span className="pull-right space0 picSvngNeg">
                -${this.props.promocodes.discountMoney}({this.props.promocodes.discountPercentage}%)
                </span>
              </div>
            : ''
          }
        <div className="tax-wrap">
          <span className="pull-left space0">Est. total</span>
          <span className="pull-right space0 fntBld">
          { this.props.promocodes.newPrice ?
            <span className="discounted-price">${this.props.promocodes.newPrice}</span>
            : <span className="discounted-price">$120.94</span>}
          </span>
        </div>
      </div>
    );
  }
}

export default EstimatedTotal;
