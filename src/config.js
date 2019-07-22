const configs = {
  production: {
    API_BASE_URL: 'http://localhost:3004',
  },
  development: {
    API_BASE_URL: 'http://localhost:3004',
  },
};

const config = configs[process.env.NODE_ENV];
export default config;
