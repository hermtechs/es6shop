//variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");
const cartRowContainer = document.querySelector('.cart-rows-container')

// openning cart
cartBtn.addEventListener('click',()=>{
  cartDOM.style.transform = 'translateX(0%)'
  cartOverlay.style.visibility = 'visible'
})
//closing cart
closeCartBtn.addEventListener('click', ()=>{
    cartDOM.style.transform = 'translateX(100%)'
    cartOverlay.style.visibility = 'hidden'
})
//cart
let cart = [];

//gettiing products
class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      let data = await result.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
//local storalo
class Storage {
  saveToLocalStorage(shopProducts) {
    //  console.log(shopProducts)
    localStorage.setItem("products", JSON.stringify(shopProducts));
  }
}
//display shop products
class UI {
  updateUi(shopProducts) {
    //  console.log(shopProducts[0].title);
    let products = "";
    shopProducts.forEach((product) => {
      const { title, price, imageUrl, id } = product;
      // console.log(id);
      // console.log(product)
      let productHTML = `
      <article class="product">
      <div class="the-img-container">
       <div class="img-container">
        <img src="${imageUrl}" alt="product" class="product-img">
            
      <buttton class="bag-btn" data-id="${id}">
       <i class="fas fa-shopping-cart"></i>
        add to bag
        </buttton>
        </div>
      <h3 class="product-name">${title}</h3>
       <h4 class="price">$${price}</h4>
      
       </article>
       <!--end of single product-->
      `;
      products += productHTML;
      // console.log(productHTML)
      productsDOM.innerHTML = products;
    });
  }
  getButtons(){
    const buttons = [...document.querySelectorAll('.bag-btn')];
    buttons.forEach(button=>{
      // const id = button.dataset.id;
      button.addEventListener('click', getItemFromStorage)
      function getItemFromStorage(event){
        const clickedBtn = event.target;
      // clickedBtn.dataset.id;
     let getProd = localStorage.getItem('products')
     let productsArray = JSON.parse(getProd)
    //  cart = [...productsArray]
    //  console.log(cart)
   let getClickedProductFromStorage = productsArray.find((item)=>{
     return clickedBtn.dataset.id===item.id
     } )
   //Adding Storage Item to Cart
   cart.push(getClickedProductFromStorage);
  //  console.log(cart);
  const cartItems = cart.map((item)=>{
    // return item;
    const {title,price,imageUrl} = item;
    return {title,price,imageUrl}
  })
  
    cartItems.forEach(item=>{
      const {title,price,imageUrl}=item;
      const cartHTML = `
      <div class="cart-content">
      <div class="cart-item">
          <img src="${imageUrl}" alt="product"> 
        <div>
            <h4>${title}</h4>
            <h5 class="item-price">$${price}</h5>
            <span class="remove-item">remove</span>
        </div>  
        <div>
            <i class="fas fa-chevron-up"></i>
            <p class="item-amount item-quantity">1</p>
            <i class="fas fa-chevron-down"></i>
        </div>
      </div>
  </div>`;
  const cartRowElement = document.createElement('div');
  cartRowElement.className='cart-content'
  cartRowElement.innerHTML = cartHTML;
  cartRowContainer.appendChild(cartRowElement)
  console.log(cartRowContainer)
    })
 
      }
    })
  }
}

//local storage
// class Storage{

// }
document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  const ui = new UI();
  const saveToStorage = new Storage();
  products.getProducts().then((data) => {
    let productsFromJson = data;
    /* console.log(productsFromJson.items[0]);
    console.log(productsFromJson.items[0].sys.id);
    console.log(productsFromJson.items[0].fields.title);
    console.log(productsFromJson.items[0].fields.price);*/
    let shopProducts = productsFromJson.items.map((product) => {
      const { id } = product.sys;
      const { title, price } = product.fields;
      const imageUrl = product.fields.image.fields.file.url;
      return { id, title, price, imageUrl };
    });
    //console.log(shopProducts);
    ui.updateUi(shopProducts);
    saveToStorage.saveToLocalStorage(shopProducts);
  }).then(()=>{
    ui.getButtons();
  })
});
