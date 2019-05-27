export default {
  BASE_URL: 'localhost',
  PORT: process.env.PORT || 3000,
  database:
    process.env.ENV === 'Test'
      ? 'mongodb://localhost/estimator_test'
      : 'mongodb://localhost/estimator',
};
