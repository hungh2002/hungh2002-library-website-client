import axios from "axios";

const baseURL = 'http://157.7.214.16:8000/library/api';

export const axiosGet = (url) => {
  axios({
    baseURL: baseURL,
    url: url
  });
};

export const axiosPost = (url, data) => {
  axios({
    baseURL: baseURL,
    url: url,
    data: data
  });
};