module.exports = {
  environmentName: 'Production',
  isAWSEnvironment: true,
  statsd: {
    host: 'statsd',
    port: 8125,
    path: 'book-ui'
  }
};
