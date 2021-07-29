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
 

const removeBtn = cart.getElementsByClassName('remove-item');
// console.log(removeBtn)
for(var i=0; i<removeBtn.length; i++){
   var eachBtn = removeBtn[i];
   // console.log(eachBtn);
   eachBtn.addEventListener('click', (event)=>{
      EachSingleBtn = event.target;
      EachSingleBtn.parentElement.parentElement.remove();
      UpdateTotal();
   }
   )

 if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready);
 }
 else{
    ready();
 }
 function ready(){

// FINDIND TOTAL and all related calculations 
UpdateTotal()
function UpdateTotal(){
   // cartRowContainer is already stored in variable cart
   const cartItemsContainer = document.getElementsByClassName('cart-rows-container')[0];
   const cartRows =cartItemsContainer.getElementsByClassName('cart-content');
   var total = 0; 
   for(var i=0; i<cartRows.length; i++){
      var EachCartRow = cartRows[i]; 
      var itemAmount = EachCartRow.getElementsByClassName('item-price')[0];
      var quantity = EachCartRow.getElementsByClassName('item-amount')[0];
      var price =  itemAmount.innerText;
      var priceValue = parseFloat(price.replace('$', ''))
      var quantityValue = parseFloat(quantity.innerText);
         total = total + (priceValue * quantityValue);
         // console.log(total);
     
   }
   document.getElementsByClassName('cart-total')[0].innerText = total;
   // return;
   }
   
}
}

   
 //CLEAR CART BUTTON
 const clearCartBtn = document.querySelector('.clear-cart');
 clearCartBtn.addEventListener('click', ()=>{
    clearCartBtn.parentElement.parentElement.remove();// clears cart
    UpdateTotal()
      /* close cart automitacally
       after it is cleared of all products*/
    setTimeout( ()=>{
      cart.style.transform = 'translateX(100%)';
      cartOverlay.style.visibility = 'hidden';
    },1000)
   //  UpdateTotal();
 }) 
 
