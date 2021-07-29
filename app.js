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
//class UI{

// }

//local storage
// class Storage{

// }
document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  products.getProducts().then((data) => {
    let productsFromJson = data;
    /* console.log(productsFromJson.items[0]);
    console.log(productsFromJson.items[0].sys.id);
    console.log(productsFromJson.items[0].fields.title);
    console.log(productsFromJson.items[0].fields.price);*/
    let shopProducts = productsFromJson.map((product) => {
      return product;
    });
    console.log(shopProducts);
    const { id } = productsFromJson.items[0].sys;
    console.log(id);
    const { title, price } = productsFromJson.items[0].fields;
    console.log(title, price);
  });
});
