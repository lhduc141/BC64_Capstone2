import phoneSV from "../service/service-user.js";
import {
  getDataForm,
  renderPhoneList,
  showDataPhone,
  onSuccess,
} from "./controller-user.js";

let phoneList = [];

let getValuePhone = () => {
  let arrInput = document.querySelectorAll(
    ".modal-body input, .modal-body select"
  );
  let arrError = document.querySelectorAll(".modal-body .spanThongBao");
  let isValid = true;
  for (var i = 0; i < arrInput.length; i++) {
    if (arrInput[i].id == "phoneID") {
      isValid &= checkEmptyValue(arrInput[i].value, arrError[i].id);
    } else if (arrInput[i].id == "name") {
      isValid &= checkEmptyValue(arrInput[i].value, arrError[i].id);
    } else if (arrInput[i].id == "price") {
      isValid &= isValid &= checkEmptyValue(arrInput[i].value, arrError[i].id);
    } else if (arrInput[i].id == "screen") {
      isValid &= isValid &= checkEmptyValue(arrInput[i].value, arrError[i].id);
    } else if (arrInput[i].id == "backCamera") {
      isValid &= isValid &= checkEmptyValue(arrInput[i].value, arrError[i].id);
    } else if (arrInput[i].id == "frontCamera") {
      isValid &= isValid &= checkEmptyValue(arrInput[i].value, arrError[i].id);
    } else if (arrInput[i].id == "image") {
      isValid &= isValid &= checkEmptyValue(arrInput[i].value, arrError[i].id);
    } else if (arrInput[i].id == "desc") {
      isValid &= isValid &= checkEmptyValue(arrInput[i].value, arrError[i].id);
    } else if (arrInput[i].id == "brandPhone") {
      isValid &= isValid &= checkEmptyValue(arrInput[i].value, arrError[i].id);
    } else {
      isValid &= checkEmptyValue(arrInput[i].value, arrError[i].id);
    }
    var id = arrInput[i].id;
  }
};
getValuePhone();

const fectPhoneList = () => {
  phoneSV
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

let deletePhone = (id) => {
  console.log(id);
  phoneSV
    .deleteAPI(id)
    .then((res) => {
      console.log(res);
      fectPhoneList();
      onSuccess("Xóa thành công");
    })
    .catch((err) => {
      console.log(err);
    });
};
window.deletePhone = deletePhone;

let createPhone = () => {
  console.log("hihi");
  let dataPhone = getDataForm();
  phoneSV
    .createPhoneAPI(dataPhone)
    .then((res) => {
      console.log(res);
      fectPhoneList();
      onSuccess("Thêm thành công");
      $($("#myModal").modal("hide"));
    })
    .catch((err) => {
      console.log(err);
    });
};
window.createPhone = createPhone;

let getDetailPhone = (id) => {
  console.log(id);
  phoneSV
    .getDetailPhone(id)
    .then((res) => {
      //   console.log(res);
      showDataPhone(res.data);
      $($("#myModal").modal("show"));
    })
    .catch((err) => {
      console.log(err);
    });
};
window.getDetailPhone = getDetailPhone;

let updatePhone = () => {
  // console.log("hihi");
  //lấy thông tin từ form
  let dataForm = getDataForm();
  phoneSV
    .updatePhoneAPI(dataForm)
    .then((res) => {
      console.log(res);
      fectPhoneList();
      onSuccess("Cập nhật thành công");
      $($("#myModal").modal("hide"));
    })
    .catch((err) => {
      console.log(err);
    });
};
window.updatePhone = updatePhone;

// Tìm Kiếm
let searchName = document
  .getElementById("searchName")
  .addEventListener("input", function () {
    searchByName(this.value.trim());
  });
const searchByName = (searchTerm) => {
  const filteredList = phoneList.filter((phone) =>
    phone.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderPhoneList(filteredList);
};

// Assuming you have a reference to the select element
var selectElement = document.getElementById("sort__item");
// Initialize the "sort" variable
selectElement.addEventListener("change", function () {
  renderPhoneList(phoneList);
});
