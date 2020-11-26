import axios from "axios";

const instance = axios.create({
  baseURL: "https://delivery-68a8d.firebaseio.com/",
});

export default instance;
