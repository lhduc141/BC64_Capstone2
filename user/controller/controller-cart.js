export let renderPhoneList = (phoneArr) => {
  let contentHTML = "";
  var arrayRender = [...phoneArr];
  var selectElement = document.getElementById("sort__item").value * 1;

  arrayRender.reverse().forEach((item) => {
    console.log("check type: " + item.type.toLowerCase());
    let trString = `
        <div class="col-3 store_items">
        <div class="store_inner">
          <div class="store_img">
            <img src="${item.image}" alt="" />
          </div>
          <div class="store_desc">
            <div class="store_content">
              <h2 id="name">${item.name}</h2>
            </div>

            <div class="store_descContent">
              <span id="desc">
                ${item.desc}
              </span>
            </div>

            <div class="store_add">
              <h3 id="price">${item.price}$</h3>
              <a href="#" class="btn buy" onclick="">BUY NOW</a>
            </div>
          </div>
        </div>
      </div>
    `;
    switch (selectElement) {
      case 0:
        contentHTML += trString;
        break;
      case 1:
        if (item.type.toLowerCase() == "apple") contentHTML += trString;
        break;
      case 2:
        if (item.type.toLowerCase() == "samsung") contentHTML += trString;
        break;
    }
  });
  document.getElementById("main_store").innerHTML = contentHTML;
};

//Hàm thông báo khi hoàn thành
export let onSuccess = (title) => {
  Swal.fire({
    title: title,
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    // backdrop: `
    //     rgba(0,0,123,0.4)
    //     url("/images/nyan-cat.gif")
    //     left top
    //     no-repeat
    //   `,
  });
};
