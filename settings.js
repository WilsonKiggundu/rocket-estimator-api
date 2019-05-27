export default {
  BASE_URL: 'localhost',
  PORT: process.env.PORT || 3000,
  database:
    process.env.ENV === 'Test'
      ? 'mongodb://localhost/estimator_test'
      : 'mongodb://ekastimo:Oe6aGK02xsqoHlVN@cluster0-shard-00-00-shw15.mongodb.net:27017,cluster0-shard-00-01-shw15.mongodb.net:27017,cluster0-shard-00-02-shw15.mongodb.net:27017/rocket_estimator_database?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
};
