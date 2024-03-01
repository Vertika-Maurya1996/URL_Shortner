import axios from "axios";

const baseURL = "https://url-shortner-server-sigma.vercel.app/";
const api = axios.create({baseURL:baseURL,timeout:5000,headers:{'Content-Type':'application/json'}})
export default api
