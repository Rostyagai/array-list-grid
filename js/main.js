import goods from "./goods.js";
import scroll from "./scroll-reveal.js";
import shuffle from "./shuffle-array.js";

shuffle(goods);

// Catalog ul DOM-Object
const catalog = document.getElementById("catalog");

// Filter buttons DOM-Objects
const tshirtBtn = document.getElementById("t-shirt-btn");
const jacketBtn = document.getElementById("jacket-btn");
const jeansBtn = document.getElementById("jeans-btn");
const skirtBtn = document.getElementById("skirt-btn");
const allBtn = document.getElementById("all-btn");

// Cart
const cartModal = document.getElementById("cart-modal");
const cart = document.getElementById("cart-list");

// Order summary
const orderSummaryText = document.getElementById("order-summary");
let orderSummary = 0;

// Cart buttons
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
let addToCartBtn = document.querySelectorAll("catalog__item-btn");

function AddToCart(id) {
  let curItem = goods.filter((item) => item.id == id);

  const [object] = curItem;
  cart.innerHTML += `
    <li class="cart__item" price='${object.price}'>
      <img class="cart__item-img" src="${object.img}" alt="#" />
      <div class="cart__item-descr">
          <div class="cart__item-textbox">
            <p>${object.name}</p>
            <p class="cart__item-specs">${object.color}, ${object.size}</p>
            <p class="cart__item-price">${object.price} <span>&#8372;</span></p>
          </div>
        <button class="cart__item-remove-btn">
        <i class="ri-close-line"></i>
        </button>
        </div>
        </li> `;

  let delItemBtns = document.querySelectorAll(".cart__item-remove-btn");

  // Change summary
  orderSummary += object.price; // -> Summary addition on adding item
  orderSummaryText.innerHTML = "Order summary: " + orderSummary + " <span>&#8372;</span>";

  delItemBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.classList.add("cart__item--hidden"); // -> Add hidden modificato

      // Summary substraction
      orderSummary = orderSummary - btn.parentElement.parentElement.getAttribute("price");
      orderSummaryText.innerHTML = "Order summary: " + orderSummary + " <span>&#8372;</span>";

      setTimeout(() => {
        btn.parentElement.parentElement.remove();
      }, 350);
    })
  );
}

const FilterTshirts = () => {
  let tShirts = goods.filter((item) => item.category === "t-shirt");
  let items = "";
  for (let item of tShirts) {
    items += `<li class='catalog__item'>
    <img src="${item.img}">
    <div class='catalog__container'>
    <p>${item.name}</p>
    <div class='catalog__item-specs'>
      <p>${item.size}</p>
      <p>${item.color}</p>
    </div>

    <p>${item.price} <span>&#8372;</span></p>
    </div>
    
    <button class="catalog__item-btn" id='${item.id}'>Add to cart</button></li>`;
  }
  catalog.innerHTML = items;
  scroll.reveal(".catalog__item");
  addToCartBtn = document.querySelectorAll(".catalog__item-btn");
  addToCartBtn.forEach((i) => {
    i.addEventListener("click", () => {
      AddToCart(i.id);
    });
  });
};

const FilterJackets = () => {
  let jackets = goods.filter((item) => item.category === "jacket");
  let items = "";
  for (let item of jackets) {
    items += `<li class='catalog__item'>
    <img src="${item.img}">
    <div class='catalog__container'>
    <p>${item.name}</p>
    <div class='catalog__item-specs'>
      <p>${item.size}</p>
      <p>${item.color}</p>
    </div>

    <p>${item.price} <span>&#8372;</span></p>
    </div>
    
    <button class="catalog__item-btn" id='${item.id}'>Add to cart</button></li>`;
  }
  catalog.innerHTML = items;
  scroll.reveal(".catalog__item");
  addToCartBtn = document.querySelectorAll(".catalog__item-btn");
  addToCartBtn.forEach((i) => {
    i.addEventListener("click", () => {
      AddToCart(i.id);
    });
  });
};
const FilterAll = () => {
  let items = "";
  for (let item of goods) {
    items += `<li class='catalog__item'>
    <img src="${item.img}">
    <div class='catalog__container'>
    <p>${item.name}</p>
    <div class='catalog__item-specs'>
      <p>${item.size}</p>
      <p>${item.color}</p>
    </div>

    <p>${item.price} <span>&#8372;</span></p>
    </div>
    
    <button class="catalog__item-btn" id='${item.id}'>Add to cart</button></li>`;
  }
  shuffle(goods);
  catalog.innerHTML = items;
  scroll.reveal(".catalog__item");
  addToCartBtn = document.querySelectorAll(".catalog__item-btn");
  addToCartBtn.forEach((i) => {
    i.addEventListener("click", () => {
      AddToCart(i.id);
    });
  });
};

const FilterJeans = () => {
  let jeans = goods.filter((item) => item.name === "Jeans");
  let items = "";
  for (let item of jeans) {
    items += `<li class='catalog__item'>
    <img src="${item.img}">
    <div class='catalog__container'>
    <p>${item.name}</p>
    <div class='catalog__item-specs'>
      <p>${item.size}</p>
      <p>${item.color}</p>
    </div>

    <p>${item.price} <span>&#8372;</span></p>
    </div>
    
    <button class="catalog__item-btn" id='${item.id}'>Add to cart</button></li>`;
  }
  catalog.innerHTML = items;
  scroll.reveal(".catalog__item");
  addToCartBtn = document.querySelectorAll(".catalog__item-btn");
  addToCartBtn.forEach((i) => {
    i.addEventListener("click", () => {
      AddToCart(i.id);
    });
  });
};

const FilterSkirts = () => {
  let skirts = goods.filter((item) => item.name === "Skirt");
  let items = "";
  for (let item of skirts) {
    items += `<li class='catalog__item'>
    <img src="${item.img}">
    <div class='catalog__container'>
    <p>${item.name}</p>
    <div class='catalog__item-specs'>
      <p>${item.size}</p>
      <p>${item.color}</p>
    </div>

    <p>${item.price} <span>&#8372;</span></p>
    </div>
    
    <button class="catalog__item-btn" id='${item.id}'>Add to cart</button></li>`;
  }
  catalog.innerHTML = items;
  scroll.reveal(".catalog__item");
  addToCartBtn = document.querySelectorAll(".catalog__item-btn");
  addToCartBtn.forEach((i) => {
    i.addEventListener("click", () => {
      console.log("bb");
      AddToCart(i.id);
    });
  });
};

const ToggleCart = () => {
  cartModal.classList.toggle("cart-modal--hidden");
};

FilterAll();

// Add event-listeners to buttons
tshirtBtn.addEventListener("click", FilterTshirts);
jacketBtn.addEventListener("click", FilterJackets);
jeansBtn.addEventListener("click", FilterJeans);
skirtBtn.addEventListener("click", FilterSkirts);
allBtn.addEventListener("click", FilterAll);

openCartBtn.addEventListener("click", ToggleCart);
closeCartBtn.addEventListener("click", ToggleCart);

// for (item of goods) {
//   const itemElement = document.createElement("li");

//   const name = document.createElement("p");
//   const size = document.createElement("p");
//   const price = document.createElement("p");
//   const color = document.createElement("p");

//   name.innerText = item.name;
//   size.innerText = item.size;
//   price.innerText = item.price;
//   color.innerText = item.color;

//   itemElement.append(name, size, price, color);
//   catalog.appendChild(itemElement);
// }
