export let renderPhoneList = (phoneArr) => {
  let contentHTML = "";
  var selectElement = document.getElementById("sort__item").value * 1;
  var arrayRender = [...phoneArr];
  switch (selectElement) {
    case 0:
      break;
    case 1:
      arrayRender.sort((a, b) => b.price - a.price);
      break;
    case 2:
      arrayRender.sort((a, b) => a.price - b.price);
      break;
  }

  arrayRender.reverse().forEach((item) => {
    let trString = `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.image}</td>
            <td>${item.type}</td>
            <td>${item.desc}</td>
            <td>
                <button onclick="getDetailPhone(${item.id})" class="btn btn-info">Update</button>
                <button onclick="deletePhone(${item.id})" class="btn btn-danger">Delete</button>
            </td>
        </tr>
    `;
    contentHTML += trString;
  });
  document.getElementById("tbodyPhone").innerHTML = contentHTML;
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

// Lấy dữ liệu từ form
export let getDataForm = () => {
  let id = document.getElementById("phoneID").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let screen = document.getElementById("screen").value;
  let backCamera = document.getElementById("backCamera").value;
  let frontCamera = document.getElementById("frontCamera").value;
  let image = document.getElementById("image").value;
  let desc = document.getElementById("desc").value;
  let type = document.getElementById("brandPhone").value;

  let listPhone = {
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    image,
    desc,
    type,
  };

  return listPhone;
};

export let showDataPhone = (dataPhone) => {
  console.log(dataPhone);
  document.getElementById("phoneID").value = dataPhone.id;
  document.getElementById("name").value = dataPhone.name;
  document.getElementById("price").value = dataPhone.price;
  document.getElementById("screen").value = dataPhone.screen;
  document.getElementById("backCamera").value = dataPhone.backCamera;
  document.getElementById("frontCamera").value = dataPhone.frontCamera;
  document.getElementById("image").value = dataPhone.image;
  document.getElementById("desc").value = dataPhone.desc;
  document.getElementById("brandPhone").value = dataPhone.type;
};
