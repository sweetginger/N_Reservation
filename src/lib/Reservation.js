/**
 * N_Reservation JS
 */
import axios from "axios";

const config = {
  baseUrl: "http://172.30.1.28:2902",
  reservation: "",
  biz: "/biz",
  review: "/board/reviews",
  product: "/product"
};

/** test api : 아무거나 테스트 -- 안씀 */
function getTest() {
  return axios
    .get(`${config.baseUrl}/test`)
    .then(response => {
      return response.data.items;
    })
    .catch(error => {
      console.log(error);
    });
}

/** 로그인 요청 */
function loginAuth(obj) {
  return axios
    .post(`${config.baseUrl}/auth/login`, obj)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}

/** 매장목록 받아오기 */
function getShopList() {
  return axios
    .get(`${config.baseUrl + config.biz}/bizs`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return [];
    });
}

/** 매장 리뷰 리스트 받아오기 */
function getReviewList(bizSeq) {
  return axios
    .get(`${config.baseUrl + config.review}/${bizSeq}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return [];
    });
}

/** 매장별 상품 리스트 받아오기 */
function getProductList(bizSeq) {
  return axios
    .get(`${config.baseUrl + config.review}/${bizSeq}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return [];
    });
}
/** 상품목록 받아오기 */
function getProductList(reqSeq) {
  return axios
    .get(`${config.baseUrl + config.product}/products/${reqSeq}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return [];
    });
}

export { getTest, loginAuth, getShopList, getProductList };
