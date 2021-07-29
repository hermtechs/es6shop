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
//display shop products
class UI {
  updateUi(shopProducts) {
    //  console.log(shopProducts[0].title);
    shopProducts.forEach((product) => {
      const productTitle = product.title;
      const productPrice = product.price;
      const productImgUrl = product.imageUrl;
    });
  }
}

//local storage
// class Storage{

// }
document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  const ui = new UI();
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
  });
});
