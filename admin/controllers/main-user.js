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
    var inputId = arrInput[i].id;
    var inputValue = arrInput[i].value;
    var errorId = arrError[i].id;

    if (inputId == "phoneID") {
      isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkOnlyNums(inputValue, errorId);
    } else if (inputId == "name") {
      isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkNameValue(inputValue, errorId);
    } else if (inputId == "price") {
      isValid &= isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkMinMaxInt(inputValue, errorId, 1) &&
        checkOnlyNums(inputValue, errorId);
    } else if (inputId == "screen") {
      isValid &= isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkScreen(inputValue, errorId);
    } else if (inputId == "backCamera") {
      isValid &= isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkCamera(inputValue, errorId);
    } else if (inputId == "frontCamera") {
      isValid &= isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkCamera(inputValue, errorId);
    } else if (inputId == "image") {
      isValid &= isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkImgSrc(inputValue, errorId);
    } else if (inputId == "desc") {
      isValid &= isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkMinMaxValue(inputValue, errorId, 1, 100000);
    } else if (inputId == "brandPhone") {
      isValid &= isValid &=
        checkEmptyValue(inputValue, errorId) && checkType(inputValue, errorId);
    } else {
      isValid &= checkEmptyValue(inputValue, arrError[i].id);
    }
    var id = arrInput[i].id;
  }

  return isValid;
};

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
  if (getValuePhone()) {
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
  }
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
