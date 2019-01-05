import React, {Component} from 'react';
import ChildApplyPromoCode from './ChildApplyPromoCode';
import './style.scss';

class ApplyPromoCode extends Component{
  constructor(props){
    super(props);
    this.state={
      product : this.props.product,
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
      <div className="container_apply_promo_code">
        <button className="btn-wrap-see-item-details" onClick={this.toggleHidden.bind(this)}>
          <span className="btn-caption">{(this.state.isHidden ? 'Apply promo code' : 'Hide promo code')}</span>
          <span className={(this.state.isHidden ? 'btn-icon-show' : 'btn-icon-hide')}></span>
        </button>
        {!this.state.isHidden && <ChildApplyPromoCode/>}
      </div>
    );
  }
}

export default ApplyPromoCode;
