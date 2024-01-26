const BASE_URL = "https://6597f7ca668d248edf23d080.mockapi.io/ProductPhone";

let getPhoneListAPI = () => {
  return axios({
    url: BASE_URL,
    method: "GET",
  });
};

let deleteAPI = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
};

let createPhoneAPI = (dataPhone) => {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: dataPhone,
  });
};

let getDetailPhone = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
};

let updatePhoneAPI = (data) => {
  return axios({
    url: `${BASE_URL}/${data.id}`,
    method: "PUT",
    data: data,
  });
};

let phoneSV = {
  getPhoneListAPI,
  deleteAPI,
  createPhoneAPI,
  getDetailPhone,
  updatePhoneAPI,
};
export default phoneSV;
