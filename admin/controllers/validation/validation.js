// Dữ liệu cần kiểm tra
/*
    ID: chỉ nhập số, tối thiếu 3-5 kí tự
    Name: chỉ nhập chữ và số
    Price: chỉ nhập số, tối thiểu 100000000
    Sreen: chỉ nhập chữ và số, tối thiểu 10 kí tự
    BackCamera: chỉ nhập chữ và số, tối thiểu 10 kí tự
    FrontCamera: chỉ nhập chữ và số, tối thiểu 10 kí tự
    Image Link: đúng định dạng url
    Phải chọn brand hợp lệ
*/

//check all
let checkEmptyValue = (value, errorId) => {
  if (value) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML = "*vui lòng không bỏ trống";
    return false;
  }
};

//Name: Khong co ky tu dac biet
let checkNameValue = (value, errorId) => {
  var regexName = /^[a-zA-Z0-9]+$/;
  var chekcNameValue = regexName.test(value);
  //nếu đi vào được if sẽ là trường hợp người dùng đã nhập dữ liệu vào rồi
  if (chekcNameValue) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //trường hợp khi value rỗng
    document.getElementById(errorId).innerHTML = "Không nhập kí tự đặc biệt";
    return false;
  }
};

//Price: Nhap so tien toi thieu 500-10000
function checkMinMaxInt(value, errorId, min, max) {
  if (min <= value && value <= max) {
    //xử lý khi value đúng định dạng
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //xử lý khi không đúng khoang
    document.getElementById(errorId).innerHTML = `Nhập từ ${min} - ${max}`;
    return false;
  }
}
let checkOnlyNums = (value, errorId) => {
  var regexOnlyNums = /^[0-9]*$/;
  var checkOnlyNums = regexOnlyNums.test(value);
  if (checkOnlyNums) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML = "Chỉ nhập số";
    return false;
  }
};

//check camera: number + MP
let checkCamera = (value, errorId) => {
  // Define a regular expression to match a number followed by "MP"
  const regex = /.*(\d+MP).*/;

  // Test the provided string against the regular expression
  const match = value.test(regex);

  if (match) {
    //xử lý khi value đúng định dạng
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //xử lý khi value khong đúng định dạng
    document.getElementById(errorId).innerHTML = `Vui lòng nhập (số) MP`;
    return false;
  }
};

//check screen: screen + number
let checkScreen = (value, errorId) => {
  // Define a regular expression to match a number followed by "MP"
  const regex = /^screen\s+(\d+)$/;

  // Test the provided string against the regular expression
  const match = value.match(regex);

  if (match) {
    //xử lý khi value đúng định dạng
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //xử lý khi value khong đúng định dạng
    document.getElementById(errorId).innerHTML = `Vui lòng nhập sreen (số)`;
    return false;
  }
};

//check duong dan img:
let checkImgSrc = (value, errorId) => {
  // Define a regular expression to match a number followed by "MP"
  const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

  // Test the provided string against the regular expression
  const match = value.match(regex);

  if (match) {
    //xử lý khi value đúng định dạng
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //xử lý khi value khong đúng định dạng
    document.getElementById(errorId).innerHTML = `Sai định dạng đường dẫn`;
    return false;
  }
};

let checkType = (value, errorId) => {
  const lowerCasePhoneType = value.toLowerCase();
  const allowedValues = ["samsung", "iphone"].map((value) =>
    value.toLowerCase()
  );
  const match = allowedValues.includes(lowerCasePhoneType);

  if (match) {
    //xử lý khi value đúng định dạng
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //xử lý khi value khong đúng định dạng
    document.getElementById(errorId).innerHTML = `Sai định dạng đường dẫn`;
    return false;
  }
};

//Desc => toi thieu 10 ky tu
function checkMinMaxValue(value, errorId, min, max) {
  //Hàm trim => loại bỏ khoảng trắng ở đầu và cuối
  //Hàm length => trả về độ dài của chuỗi
  var doDaiKyTu = value.trim().length;
  if (min <= doDaiKyTu && doDaiKyTu <= max) {
    //dữ liệu chuẩn phù hợp với độ dài yêu cầu
    //xử lý khi value đúng định dạng
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    //xử lý khi không đúng độ dài yêu cầu
    document.getElementById(errorId).innerHTML = `Nhập từ ${min} - ${max}`;
    return false;
  }
}
