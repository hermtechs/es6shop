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
     console.log(shopProducts)
    localStorage.setItem("products", JSON.stringify(shopProducts));
  }
}
//display shop products
class UI {
  updateUi(shopProducts) {
    //  console.log(shopProducts[0].title);
    let products = "";
    shopProducts.forEach((product) => {
      // const productTitle = product.title;
      // const productPrice = product.price;
      // const productImgUrl = product.imageUrl;
      // const productId = product.id;
      const { title, price, imageUrl, productId } = product;
      // console.log(productId);
      // console.log(product)
      let productHTML = `
      <article class="product">
      <div class="the-img-container">
       <div class="img-container">
        <img src="${imageUrl}" alt="product" class="product-img">
            
      <buttton class="bag-btn" data-id="${productId}">
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
  });
});
