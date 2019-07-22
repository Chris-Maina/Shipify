import config from '../config';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const API_BASE_URL = config.API_BASE_URL;
export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = {};
  error.statusText = Error(response.statusText);
  error.response = response;
  throw error;
};

export const get = async (path) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${path}`, { headers });
    const valid = checkStatus(response);
    const result = await valid.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const edit = async (path, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${path}`, {
      headers,
      method: 'PUT',
      body: JSON.stringify(data),
    });
    const valid = checkStatus(response);
    const result = await valid.json();
    return result;
  } catch (error) {
    throw error;
  }
};
