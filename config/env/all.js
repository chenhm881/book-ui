const path = require('path');

const rootPath = path.normalize(`${__dirname}/../..`);

module.exports = {
  appName: 'book-ui',
  root: rootPath,
  port: process.env.PORT || 8080,
  https: {
    enabled: false,
    port: process.env.TLS_PORT || 8443,
    key: `${rootPath}/server/certs/ssl-key-np.pem`,
    cert: `${rootPath}/server/certs/ssl-cert.pem`
  },
  accessLog: {
    fileSize: '1m',
    keep: 10,
    compress: true
  },
  isAWSEnvironment: false,
  preferClusterMode: true
};
