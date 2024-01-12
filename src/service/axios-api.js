import axios from 'axios';

const baseURL = 'http://157.7.214.16:8000/library-0.0.1-SNAPSHOT/api';
// const baseURL = 'http://localhost:8080/api';

export const axiosGet = (url) => {
  return axios({
    baseURL: baseURL,
    method: 'get',
    url: url,
  });
};

export const axiosGetWithParams = (
  url,
  params,
  data = { data: 'undefined' }
) => {
  if (data.data === 'undefined') {
    return axios({
      baseURL: baseURL,
      method: 'get',
      url: url,
      params: params,
    });
  } else {
    return axios({
      baseURL: baseURL,
      method: 'get',
      url: url,
      params: params,
      data: data,
    });
  }
};

export const axiosPost = (url, data) => {
  axios({
    baseURL: baseURL,
    url: url,
    method: 'post',
    data: data,
  });
};

export const axiosPostWithParams = (url, data, params) => {
  axios({
    baseURL: baseURL,
    url: url,
    method: 'post',
    data: data,
    params: params,
  });
};
