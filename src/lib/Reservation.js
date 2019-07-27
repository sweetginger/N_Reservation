/**
 * N_Reservation JS
 */
import axios from "axios";

const config = {
  baseUrl: "http://172.30.1.19:8090",
  reservation: ""
};

/** test api : 아무거나 테스트 */
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

export { getTest };
