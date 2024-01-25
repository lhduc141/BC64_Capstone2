document.getElementById("shop-cart").onclick = () => {
  console.log("check cart ");
  $(document.getElementById("cart")).toggleClass("is-visible");
};

document.getElementById("close-cart").onclick = () => {
  console.log("check close cart");
  $(document.getElementById("cart")).toggleClass("is-visible");
};
