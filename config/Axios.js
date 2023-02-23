import axios from "axios";

const SERVE_URL= 'http://3.231.166.128:800/api-airbnb/';

const instance = axios.create({
    baseURL:SERVER_URL,
    timeout:30000
})

export default instance;