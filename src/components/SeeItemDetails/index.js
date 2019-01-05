import React, {Component} from 'react';
import ChildSeeItemDetails from './ChildSeeItemDetails';
import './style.scss';

class SeeItemDetails extends Component{
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
      <div className="container_see_item_details">
        <button className="btn-wrap-see-item-details" onClick={this.toggleHidden.bind(this)}>
          <span className="btn-caption">{(this.state.isHidden ? 'See item details' : 'Hide item details')}</span>
          <span className={(this.state.isHidden ? 'btn-icon-show' : 'btn-icon-hide')}></span>
        </button>
        {!this.state.isHidden && <ChildSeeItemDetails product={this.props.product}/>}
      </div>
    );
  }
}
export default SeeItemDetails;
