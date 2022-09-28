import axios from "axios";

const api = axios.create({
    baseURL: "http://codebangkok.com:5000"
})

export default api