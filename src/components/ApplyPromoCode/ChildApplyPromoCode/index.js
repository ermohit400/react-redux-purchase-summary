import React, {Component} from 'react';
import {connect} from 'react-redux';
import { applyPromoCodes } from '../../../actions/simpleAction';
import './style.scss';

class ChildSeeItemDetails extends Component{
  constructor(props){
    super(props);
    this.state={
      isHidden: true,
      promoCode: ''
    };
  }

  toggleHidden = () =>{
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleChange = (event) =>{
    this.setState({promoCode: event.target.value});
  }

  handleSubmit = (event) =>{
    this.props.applyPromoCodes(this.state.promoCode);
    event.preventDefault();
  }

  render(){
    return(
      <div className="child_see_item_details">
        <form onSubmit={this.handleSubmit} className="promocode-form">
          <div className="promocode-wrap">
            <input type="text" onChange={this.handleChange} className="promocode-input" placeholder="Promo Code"/>
            <button className="promocode-btn">Apply</button>
            <div className="error-div"></div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state})
const mapDispatchToProps = { applyPromoCodes }

export default connect(mapStateToProps, mapDispatchToProps)(ChildSeeItemDetails);
