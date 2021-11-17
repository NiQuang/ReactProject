import axios from "axios";

const instance = axios.create({
    baseURL: "https://61893ca2d0821900178d78a3.mockapi.io"
});

export default instance;