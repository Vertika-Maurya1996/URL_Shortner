import axios from "axios";

const baseURL = "https://verceltest-olive-kappa.vercel.app/";
const api = axios.create({baseURL:baseURL,timeout:5000,headers:{'Content-Type':'application/json'}})
export default api
