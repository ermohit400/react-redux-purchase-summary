import React, {Component} from 'react';
import './style.scss';

class ChildSeeItemDetails extends Component{
  render(){
    return(
      <div className="child_see_item_details">
          {this.props.product.map(function(prod, i) {
            return <div className="detail-wrap-see-item-details hidden" key={prod.id} >
                      <div className="detail-pull-left pull-left"><img className="img-product" alt={prod.productName} src={prod.productImageUrl}/></div>
                      <div className="detail-pull-right pull-right">
                        <div className="detail-product-name">
                          {prod.productName}
                        </div>
                        <div className="detail-product-price-qty">
                          <span className="detail-product-price pull-left">${prod.productPrice}</span>
                          <span className="detail-product-qty pull-right">Qty:{prod.productQty}</span>
                        </div>
                        <div className="detail-variants">
                          Actual Color: {prod.actualColors.map((t, i) => <span key={i}> {t}{prod.actualColors.length - 1 === i ? '' : ' and '} </span>)}
                        </div>
                      </div>
                  </div>
          })}
      </div>
    );
  }
}
export default ChildSeeItemDetails;
