
const cartBtn = document.querySelector('.cart-btn');
const cart = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');

//Openning Cart Onclick
cartBtn.addEventListener('click', ()=>{
 cartOverlay.style.visibility = 'visible';
 cart.style.transform = 'translateX(0%)';
//  console.log(cart.style.transform);
})

 //Closing Cart onclick
 const closeCartBtn = document.querySelector('.close-cart');
 closeCartBtn.addEventListener('click', ()=>{
    cart.style.transform = 'translateX(100%)';
    cartOverlay.style.visibility = 'hidden';
 })
  
// CART FUNCTIONALITY
//variables
// const price = document.querySelector('.item-price');
const itemQuantity = document.querySelectorAll('.item-quantity');
const removeItem = document.querySelectorAll('.remove-item');
const TotalPrice = document.querySelector('.cart-total');
var cartItems = document.querySelectorAll('.cart-item'); //whole cart parentElement
/*looping through cart Item parent Elements and then using each
to get its price element*/ 
var Total = 0;
cartItems.forEach( 
(item)=>{
 eachCartItem= item;
 eachItemPrice = eachCartItem.getElementsByClassName('item-price');
 EachPrice = eachItemPrice[0].innerText;

 //convert Prices from strings to numbers after removing $ sign
const EachPriceValue = parseInt((EachPrice.replace('$','')))
// console.log(EachPriceValue);

//Each item price total ie; quantity*price
//But first let's get quantity
eachCartItem= item;
  const  eachQuantity = eachCartItem.getElementsByClassName('item-quantity');
  const eachQuantities = eachQuantity[0].innerText;
  const eachQuantityValue = parseInt(eachQuantities);
   // console.log(eachQuantityValue);
   
// Total = (eachQuantityValue * EachPriceValue);
//  console.log(Total);
for(var i =0; i<=eachQuantityValue.length; i++){
   console.log(eachQuantityValue[i]);
}
 
//  var x = [];
//  x.push(Total);
//  console.log(x);
}

              )

  