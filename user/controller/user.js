console.log("check data input");

import phoneData from "../services/service-cart.js";
import { renderPhoneList } from "./controller-cart.js";

//open and off cart
document.getElementById("shop-cart").onclick = () => {
  console.log("check cart ");
  $(document.getElementById("cart")).toggleClass("is-visible");
  fetchCart();
};

document.getElementById("close-cart").onclick = () => {
  console.log("check close cart");
  $(document.getElementById("cart")).toggleClass("is-visible");
};

let phoneList = [];
let cart = [];

const fectPhoneList = () => {
  phoneData
    .getPhoneListAPI()
    .then((res) => {
      console.log(res);
      phoneList = res.data;
      renderPhoneList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
fectPhoneList();

// Assuming you have a reference to the select element
var selectElement = document.getElementById("sort__item");
// Initialize the "sort" variable
selectElement.addEventListener("change", function () {
  renderPhoneList(phoneList);
});

let addToCart = (id) => {
  let checkItem = false; //không có trong cart
  let cartItem = {
    name: phoneList[id - 1].name,
    price: phoneList[id - 1].price,
    num: 1,
  };
  if (cart.length == 0) {
    cart.push(cartItem);
  } else {
    cart.reverse().forEach((item) => {
      if (item.name == cartItem.name) {
        item.num++;
        checkItem = true;
      }
    });
    if (!checkItem) {
      cart.push(cartItem);
    } else {
      checkItem = false;
    }
  }
  fetchCart(cart);
};

window.addToCart = addToCart;
const fetchCart = (cart) => {
  if (cart.length == 0) {
  } else {
    let contentHTML = "";
    cart.reverse().forEach((item) => {
      let trString = `
      <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.num}</td>
        <td> 
          <a>
              <span>delete</span>
          </a>
        
        </td>
      </tr>
      </br>
      `;
      contentHTML += trString;
    });
    document.getElementById("tbodyCart").innerHTML = contentHTML;
  }
};

let clearCart = () => {
  cart = [];
  fetchCart(cart);
};
window.clearCart = clearCart;
