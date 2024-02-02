console.log("check data input");

import phoneData from "../services/service-cart.js";
import { renderPhoneList } from "./controller-cart.js";

//open and off cart
document.getElementById("shop-cart").onclick = () => {
  console.log("check cart ");
  $(document.getElementById("cart")).toggleClass("is-visible");
};

document.getElementById("close-cart").onclick = () => {
  console.log("check close cart");
  $(document.getElementById("cart")).toggleClass("is-visible");
};

let phoneList = [];

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
