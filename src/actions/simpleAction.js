import sampleData from '../sampleData/index.json';
import { actionTypes } from "./actionTypes";

export const getProduct = payload => ({
  type: actionTypes.GET_PRODUCT,
  payload: sampleData.products
})

export const applyPromoCode = payload => ({
  type: actionTypes.APPLY_PROMOCODE,
  payload: sampleData.productPromoCodes
})

export function applyPromoCodes(promoCode){
  return function (dispatch) {
    if(promoCode !== undefined){
      let newPayload = {};
      let promoCodesArray = sampleData.productPromoCodes;
      let productArray = sampleData.products;
      let responsePromocode = checkIfPromoCodeExists(promoCodesArray, promoCode);
      let responseProduct = getCurrentPriceOfProduct(productArray, 1);
      if(responsePromocode.hasMatch === true){
        let discountMoney = (responsePromocode.percent / 100) * responseProduct.productPrice;
        newPayload = {
            msg:'promo code applied',
            newPrice: (responseProduct.productPrice - discountMoney),
            discountPercentage : responsePromocode.percent,
            discountMoney : discountMoney,
            success : true };
      }else{
        newPayload = { msg:'promo code not applied', newPrice: "", success : false };
      }
      dispatch({
        type: 'APPLY_PROMOCODE',
        payload: newPayload
      });
    }
  };
}

/*function to check promocode to json array*/
function checkIfPromoCodeExists(promoCodesArray, promoCode){
  var hasMatch = false;
  var percent = 0;
  for (var index = 0; index < promoCodesArray.length; ++index) {
   var promoList = promoCodesArray[index];
   if(promoList.promoCode === promoCode){
     hasMatch = true;
     percent = promoList.discountPercentage
     break;
   }
  }
  return {hasMatch,percent};
}

/*function to check product price from json array*/
function getCurrentPriceOfProduct(productsArray, productId){
  var hasMatch = false;
  var productPrice = 0;
  for (var index = 0; index < productsArray.length; ++index) {
   var productList = productsArray[index];
   if(productList.id === productId){
     hasMatch = true;
     productPrice = productList.productPrice
     break;
   }
  }
  return {hasMatch,productPrice};
}
