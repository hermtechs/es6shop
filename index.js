//variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");


const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

//Open cart onclick btn
cartBtn.addEventListener('click', ()=>{
    //cartDOM.style.display = 'translateX(100%)'
    console.log('clicked')
    const cartDOM = document.querySelector(".cart");
    const cartOverlay = document.querySelector(".cart-overlay");
    // cartOverlay.style.visbility = 'visibile';
    console.log(cartDOM.style);
    
})

/*//cart
let cart = [];

//getting the products
// class Products{
//  async getProducts(){
//  let allproducts = await fetch(products.json);
//  console.log(allproducts)
//  return allproducts

//     }
// }
function getProducts(){
fetch('products.json')
.then( (allproducts)=>{
  return allproducts.json();
} )
.then( (objects)=>{
  const allProducts = objects;
  console.log(allProducts)
} )
} 
const product1 = allProducts.items;
console.log(product1);



//display products
class UI{

} 
//local storage
class Storage{

}
document.addEventListener("DOMContentLoaded",()=>{
  getProducts();
  //Getting necessary properties from JSON response

   


// const ui = new UI();
    // const products = new Products();
})*/