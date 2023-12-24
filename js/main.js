import goods from "./goods.js";
import scroll from "./scroll-reveal.js";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(goods);

const catalog = document.getElementById("catalog");

const tshirtBtn = document.getElementById("t-shirt-btn");
const jacketBtn = document.getElementById("jacket-btn");
const jeansBtn = document.getElementById("jeans-btn");
const skirtBtn = document.getElementById("skirt-btn");
const allBtn = document.getElementById("all-btn");
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

const FilterTshirts = () => {
  let tShirts = goods.filter((item) => item.name === "T-shirt");
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

    <p>${item.price}</p>
    </div>
    
    <button class="catalog__item-btn">Add to cart</button></li>`;
  }
  catalog.innerHTML = items;
  scroll.reveal("li");
};

const FilterJackets = () => {
  let jackets = goods.filter((item) => item.name === "Jacket");
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

    <p>${item.price}</p>
    </div>
    
    <button class="catalog__item-btn">Add to cart</button></li>`;
  }
  catalog.innerHTML = items;
  scroll.reveal("li");
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

    <p>${item.price}</p>
    </div>
    
    <button class="catalog__item-btn">Add to cart</button></li>`;
  }
  shuffle(goods);
  catalog.innerHTML = items;
  scroll.reveal("li");
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

    <p>${item.price}</p>
    </div>
    
    <button class="catalog__item-btn">Add to cart</button></li>`;
  }
  catalog.innerHTML = items;
  scroll.reveal("li");
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

    <p>${item.price}</p>
    </div>
    
    <button class="catalog__item-btn">Add to cart</button></li>`;
  }
  catalog.innerHTML = items;
  scroll.reveal("li");
};

FilterAll();

tshirtBtn.addEventListener("click", FilterTshirts);
jacketBtn.addEventListener("click", FilterJackets);
jeansBtn.addEventListener("click", FilterJeans);
skirtBtn.addEventListener("click", FilterSkirts);
allBtn.addEventListener("click", FilterAll);
