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

let checkEmptyValue = (value, errorId) => {
  if (value) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML = "*vui lòng không bỏ trống";
    return false;
  }
};
