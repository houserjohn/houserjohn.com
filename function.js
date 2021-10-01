// function.js
const { https } = require('firebase-functions');
const { default: next } = require('next');

const customNextConfig = require('./next.config');

const isDev = process.env.NODE_ENV !== 'production';

/*
const server = next({
  dev: isDev,
  conf: customNextConfig,
});
*/

const server = next({
  dev: isDev,
  conf: { distDir: '.next' },
});

const nextjsHandle = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
  return server.prepare().then(() => nextjsHandle(req, res));
});