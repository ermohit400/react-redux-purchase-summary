import React, {Component} from 'react';
import ChildPickupSavings from './ChildPickupSavings';
import './style.scss';

class PickupSavings extends Component{
  constructor(props){
    super(props);
    this.state={
      isHidden: true
    };
  }

  toggleHidden = () =>{
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render(){
    return(
      <div className="container_pickup_savings">
        <div className="subtotal-wrap">
          {
            this.props.product ? this.props.product.map(function(prod, i) {
                return <div key={prod.id}>
                  <span className="pull-left">Subtotal(1 item)</span>
                  <span className="pull-right">${prod.productPrice}</span>
                </div>
              })
            : <div></div>
          }
        </div>
        <div className="btn-wrap-pickup-savings" onClick={this.toggleHidden.bind(this)}>
          <span className="btn-caption dispBlck">
            <span className="pull-left space0 pickSvng">Pickup savings</span>
            <span className="pull-right space0 picSvngNeg">-$4.30</span>
          </span>
        </div>
        <div className="tax-wrap">
          <span className="pull-left space0">Est. taxes & fees <br />(Based on <span className="pickSvng">94568</span>)
          </span>
          <span className="pull-right space0">
            <p>$10.24</p>
          </span>
        </div>
        {!this.state.isHidden && <ChildPickupSavings/>}
      </div>
    );
  }
}

export default PickupSavings;
