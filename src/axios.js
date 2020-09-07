import axios from "axios";

const instance = axios.create({
    baseURL: "https://whatsappmern-backend.herokuapp.com/",
})

export default instance;