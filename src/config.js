const configs = {
  production: {
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  },
  development: {
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  },
};

const config = configs[process.env.NODE_ENV];
export default config;
