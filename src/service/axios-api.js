import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

export const axiosGet = (url) => {
  return axios({
    baseURL: baseURL,
    method: 'get',
    url: url,
  });
};

export const axiosPost = (url, data) => {
  axios({
    baseURL: baseURL,
    url: url,
    method: 'post',
    data: data,
  });
};
