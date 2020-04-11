import axios from 'axios';
import config from '../config';
import LocalStorage from '../utils/localStorage';

axios.defaults.baseURL = config.API_BASE_URL;

const addAuthorizationHeader = () => {
  const token = LocalStorage.getUserToken();

  if (token) {
    axios.defaults.headers.common.Authorization = `Token ${token}`;
  } else {
    axios.defaults.headers.common.Authorization = '';
  }
}


export const get = (path, requiresToken) => {
  if (requiresToken) {
    addAuthorizationHeader();
  }
  return axios.get(`/api/v1/${path}`);
};

export const post = (path, data, requiresToken) => {
  if (requiresToken) {
    addAuthorizationHeader();
  }
  return axios.post(`/api/v1/${path}`, data);
};

export const edit = async (path, data, requiresToken) => {
  if (requiresToken) {
    addAuthorizationHeader();
  }
  return axios.patch(`/api/v1/${path}`, data);
};
