const cartBtn = document.querySelector('.cart-btn');
const cart = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');

//openning cart onclick
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
 
//add To cart Button
const addToCartBtn = document.querySelectorAll('.bag-btn');
for(var i=0; i<addToCartBtn.length; i++){
  eachAddToCartBtn = addToCartBtn[i]
  eachAddToCartBtn.addEventListener('click', addProductToCart)
}
function addProductToCart(event){

  const TargetedBtn = event.target;
  const ProductContainer = TargetedBtn.parentElement.parentElement;
  const imgUrl = ProductContainer.querySelector('.product-img').src;
  const productName = ProductContainer.querySelector('.product-name').innerText;
  const ProductPrice = ProductContainer.querySelector('.price').innerText;
  //checking if Item is already added
  const CartProductContents = `
  <img src="${imgUrl}" alt="product">
  <div>
    <h4 class="item-name">${productName}</h4>
    <h5 class="item-price">${ProductPrice}</h5>
    <span class="remove-item">remove</span>
 </div>  
<div>
    <i class="fas fa-chevron-up"></i>
    <p class="item-amount item-quantity">1</p>
    <i class="fas fa-chevron-down"></i>
</div>
 `;
const eachProductContainer = document.createElement('div');
eachProductContainer.classList.add('cart-item');
eachProductContainer.innerHTML = CartProductContents;
const CartProductsContainer =document.querySelector('.cart-rows-container');
var ProductNames = CartProductsContainer.getElementsByClassName('item-name')
console.log(ProductNames)
CartProductsContainer.appendChild(eachProductContainer);

//remove button
const removeBtn = cartContainer.querySelectorAll('.remove-item')
for(var i=0; i<removeBtn.length; i++){
  eachRemoveBtn = removeBtn[i]
  eachRemoveBtn.addEventListener('click', (event)=>{
      const TargetedElement = event.target
      TargetedElement.parentElement.parentElement.remove();
      updateTotal()
  })
}

 //updates total after adding new item to cart
}
const cartContainer = document.querySelector('.cart-rows-container')
// setInterval(updateTotal,1000);
  
 //CLEAR CART BUTTON
 const clearCartBtn = document.querySelector('.clear-cart');
 clearCartBtn.addEventListener('click', ()=>{
    // clears cart
 var cartProducts = document.getElementsByClassName('cart-content');
for(var i=0; i<cartProducts.length; i++){
 const eachCartItem = cartProducts[i];
 eachCartItem.remove();
}
 updateTotal();
      /* close cart automitacally
       after it is cleared of all products*/
  // setTimeout( ()=>{
  //   cart.style.transform = 'translateX(100%)';
  //   cartOverlay.style.visibility = 'hidden';
  //   },1000)
    
 }) 
//calculates total and updates it
function updateTotal(){
    //looping through all product rows
  const cartRow = cartContainer.querySelectorAll('.cart-item');
  var total = 0;
  for(var i=0; i<cartRow.length; i++){
      const eachRow = cartRow[i]
    const price = eachRow.querySelectorAll('.item-price')[0].innerText
    const priceValue = price.replace('$', '')
  const ProductQuantity = eachRow.querySelectorAll('.item-quantity')[0].innerText
  total = Math.round(total + parseFloat(priceValue * ProductQuantity))
//   console.log(total);     

  }
const Total = document.querySelector('.cart-total');
// console.log(Total)
Total.innerText = total;
}



