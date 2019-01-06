import React, {Component} from 'react';
import { connect } from 'react-redux';

/*Importing child components*/
import PickupSavings from '../PickupSavings';
import EstimatedTotal from '../EstimatedTotal';
import ApplyPromoCode from '../ApplyPromoCode';
import SeeItemDetails from '../SeeItemDetails';
import './style.scss';
import { getProduct } from '../../actions/simpleAction';

class PurchaseSummary extends Component{
  constructor(props){
    super(props);
    this.props.getProduct()
  }

  render(){
    const product = this.props.simpleReducer.products;
    const promocodes = this.props.simpleReducer.promocodes;
    return(
      <div className="container_purchase_summary">
        <PickupSavings product={product}/>
        <EstimatedTotal product={product} promocodes={promocodes}/>
        <SeeItemDetails product={product}/>
        <ApplyPromoCode/>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state})
const mapDispatchToProps = { getProduct }
export default connect(mapStateToProps, mapDispatchToProps)(PurchaseSummary);
